'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { PredictionModal } from "../components/PredictionModal"
import { ProcessingScreen } from "../components/ProcessingScreen"
import React from 'react';

const meteorologicCategories = ['t2m', 'rh2m', 'ws10m', 'frost_days', 'snodp', 'ps', 'pw']
const meteorologicCategoriesNames = {
  't2m': 'Temperature at 2 Meters', 
  'rh2m': 'Relative Humidity at 2 Meters', 
  'ws10m': 'Wind Speed at 10 Meters', 
  'frost_days': 'Frost Days', 
  'snodp': 'Snow Depth', 
  'ps': 'Surface Pressure', 
  'pw': 'Precipitable Water'}

export default function ProvinceCropForecasting() {
  const getDefaultValue = (category) => {
    const baseValues = {
      't2m': 20,
      'rh2m': 50,
      'ws10m': 5,
      'frost_days': 0,
      'snodp': 0,
      'ps': 1000,
      'pw': 20
    }
    return baseValues[category]
  }

  const [selectedCountry, setSelectedCountry] = useState('')
  const [selectedProvince, setSelectedProvince] = useState('')
  const [selectedYear, setSelectedYear] = useState('')
  const [selectedCropType, setSelectedCropType] = useState('')
  const [formData, setFormData] = useState(() => {
    const initialData = {}
    meteorologicCategories.forEach(category => {
      initialData[category] = {}
      for (let i = 1; i <= 8; i++) {
        initialData[category][`${category}_${i}`] = getDefaultValue(category)
      }
    })
    return initialData
  })
  const [countriesData, setCountriesData] = useState([])
  const [isPredictionModalOpen, setIsPredictionModalOpen] = useState(false)
  const [predictionResult, setPredictionResult] = useState(null)
  const [selectedCountryName, setSelectedCountryName] = useState('')
  const [selectedProvinceName, setSelectedProvinceName] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)

  useEffect(() => {
    fetch('/data/countries.json')
      .then(response => response.json())
      .then(data => setCountriesData(data))
      .catch(error => console.error('Error loading countries data:', error))
  }, [])

  const years = Array.from({length: 9}, (_, i) => 2022 + i)

  const handleInputChange = (category, field, value) => {
    setFormData(prevData => ({
      ...prevData,
      [category]: {
        ...prevData[category],
        [field]: parseFloat(value) || 0
      }
    }))
  }

  const renderInputs = (title, category, count) => (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {Array.from({length: count}, (_, i) => i + 1).map(num => {
            const fieldName = `${category}_${num}`
            return (
              <div key={fieldName}>
                <Label htmlFor={fieldName}>{`${fieldName} (${getMonthName(num)})`}</Label>
                <Input
                  id={fieldName}
                  type="number"
                  value={formData[category][fieldName]}
                  onChange={(e) => handleInputChange(category, fieldName, e.target.value)}
                />
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )

  const getMonthName = (num) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August']
    return months[num - 1]
  }

  const handleSubmit = async () => {
    if (!selectedCountryName || !selectedProvinceName || !selectedYear || !selectedCropType) {
      alert('Please select a country, province, year, and crop type before submitting.')
      return
    }

    setIsProcessing(true)

    const payload = {
      country: selectedCountryName,
      province: selectedProvinceName,
      year: parseInt(selectedYear),
      cropType: selectedCropType,
      ...formData
    }

    try {
      const response = await fetch('https://eu-forecast-api-python.onrender.com/predict-by-province-manual', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result = await response.json()
      setPredictionResult(result.prediction)
      setIsPredictionModalOpen(true)
    } catch (error) {
      console.error('Error:', error)
      alert('An error occurred while fetching the prediction.')
    }finally {
      setIsProcessing(false)
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Province Crop Forecasting</h1>
      
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>General Variables</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div>
              <Label htmlFor="country">Country</Label>
              <Select onValueChange={(code) => {
                setSelectedCountry(code)
                setSelectedCountryName(countriesData.find(c => c.code === code)?.name || '')
              }}>
                <SelectTrigger id="country">
                  <SelectValue placeholder="Select a country" />
                </SelectTrigger>
                <SelectContent className="select-content">
                  {countriesData.map(country => (
                    <SelectItem key={country.code} value={country.code} className="select-item">{country.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="province">Province</Label>
              <Select onValueChange={(name) => {
                setSelectedProvince(name)
                setSelectedProvinceName(name)
              }}>
                <SelectTrigger id="province">
                  <SelectValue placeholder="Select a province" />
                </SelectTrigger>
                <SelectContent className="select-content">
                  {selectedCountry && countriesData.find(c => c.code === selectedCountry)?.provinces.map(province => (
                    <SelectItem key={province.name} value={province.name} className="select-item">{province.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="year">Year</Label>
              <Select onValueChange={setSelectedYear}>
                <SelectTrigger id="year">
                  <SelectValue placeholder="Select a year" />
                </SelectTrigger>
                <SelectContent className="select-content">
                  {years.map(year => (
                    <SelectItem key={year} value={year.toString()} className="select-item">{year}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex justify-center mb-4">
            <div className="w-1/3">
              <Label htmlFor="cropType">Crop Type</Label>
              <Select onValueChange={setSelectedCropType}>
                <SelectTrigger id="cropType">
                  <SelectValue placeholder="Select crop type" />
                </SelectTrigger>
                <SelectContent className="select-content">
                  <SelectItem value="allCrops" className="select-item">All Crops</SelectItem>
                  <SelectItem value="topCrop" className="select-item">Top Crop</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          {selectedCropType === 'topCrop' && (
            <div className="mt-4 text-center">
              <p>Top Crop: Cereals for the production of grain including seed</p>
            </div>
          )}
        </CardContent>
      </Card>

      {meteorologicCategories.map(category => (
        <React.Fragment key={category}>
          {renderInputs(`Meteorologic ${category.toUpperCase()} (${meteorologicCategoriesNames[category]})`, category, 8)}
        </React.Fragment>
      ))}

      <Button onClick={handleSubmit} className="w-full mt-4">Submit</Button>

      <PredictionModal 
        isOpen={isPredictionModalOpen} 
        onClose={() => setIsPredictionModalOpen(false)}
        prediction={predictionResult}
      />
      {isProcessing && <ProcessingScreen />}
    </div>
  )
}


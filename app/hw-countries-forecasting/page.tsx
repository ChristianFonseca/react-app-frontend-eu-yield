'use client'

import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

import { Country } from '../data/europeanCountries'
import countriesData from '../../public/data/countries.json'
import YieldChart from '../components/YieldChart'
import YearSlicer from '../components/YearSlicer'

const GoogleMapComponent = dynamic(() => import('../components/GoogleMapComponent'), {
  loading: () => <p>Loading map...</p>,
  ssr: false
})

interface GoogleMapComponentProps {
  onCountrySelect: (country: Country, provinces: number) => void;
}

export default function AutoWeatherForecasting() {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null)
  const [provincesCount, setProvincesCount] = useState<number>(0)
  const [selectedModel, setSelectedModel] = useState<string>("top_crop")
  const [yieldData, setYieldData] = useState<{ [key: number]: number } | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [selectedYears, setSelectedYears] = useState<number[]>([])
  const [forecastData, setForecastData] = useState<{ [key: number]: number } | null>(null);
  const [selectedCropType, setSelectedCropType] = useState('')

  const fetchYieldData = async (country: string, model: string) => {
    setIsLoading(true)
    setError(null)
    setForecastData(null); 

    try {
      const response = await fetch('https://eu-forecast-api-python.onrender.com/hw-yield-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ country: country, crop_type:model }),
      })
      if (!response.ok) {
        throw new Error('Failed to fetch yield data')
      }
      const data = await response.json()
      setYieldData(data)
    } catch (err) {
      setError('Failed to load yield data. Please try again.')
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleCountrySelect = (country: Country, provinces: number) => {
    setSelectedCountry(country)
    setProvincesCount(provinces)
    setForecastData(null); 
    if (country) {
      fetchYieldData(country.name, selectedModel)
    }
  }

  const handleModelChange = (value: string) => {
    if (value && selectedCountry) {
      setSelectedModel(value)
      fetchYieldData(selectedCountry.name, value)
    }
  }

  const handleForecast = async () => {
    if (selectedCountry && selectedYears.length > 0) {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch('https://eu-forecast-api-python.onrender.com/hw-forecast', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            country: selectedCountry.name,
            crop_type: selectedModel,
            years: selectedYears
          }),
        });
        if (!response.ok) {
          throw new Error('Failed to fetch forecast data');
        }
        const data = await response.json();
        setForecastData(data);
        
        console.log(forecastData);
      } catch (err) {
        setError('Failed to load forecast data. Please try again.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleYearChange = (years: number[]) => {
    setSelectedYears(years)
  }

  const handleModelChangeAndSetCropType = (value) => {
    handleModelChange(value);
    setSelectedCropType(value);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Holt-Winters Forecasting</h1>
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Coordinates Map</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[600px] w-full">
            <GoogleMapComponent onCountrySelect={handleCountrySelect} />
          </div>
        </CardContent>
      </Card>
      {selectedCountry && (
        <Card className="mt-4">
          <CardHeader>
            <CardTitle>{selectedCountry.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Center: Lat {selectedCountry.center.lat}, Lng {selectedCountry.center.lng}</p>
            <p>Number of provinces: {provincesCount}</p>
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Select Forecasting Years:</h3>
              <YearSlicer minYear={2022} maxYear={2030} onChange={handleYearChange} />
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Select HW Forecasting Model:</h3>
              <ToggleGroup type="single" value={selectedModel} onValueChange={handleModelChangeAndSetCropType} aria-label="Forecasting Model">
                <ToggleGroupItem value="top_crop" aria-label="Holt Winters"> 
                  Top Crop
                </ToggleGroupItem>
                <ToggleGroupItem value="all_crops" aria-label="LightGBM">
                  All Crops
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
            {selectedCropType === 'top_crop' && (
              <div className="mt-4 text-center">
                <p>Top Crop: Cereals for the production of grain including seed</p>
              </div>
            )}
            {isLoading && <p className="mt-4">Loading yield data...</p>}
            {error && <p className="mt-4 text-red-500">{error}</p>}
            {yieldData && (
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">Historical Yield Data</h3>
                {Object.keys(yieldData).length === 0 ? (
                  <p className="text-yellow-600">No Model was developed for this country</p>
                ) : (
                  <YieldChart historicalData={yieldData}  forecastData={forecastData} />
                )}
              </div>
            )}
            <Button 
              className="mt-6 w-full" 
              onClick={handleForecast} 
              disabled={!yieldData || Object.keys(yieldData).length === 0}
            >
              Forecast
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}


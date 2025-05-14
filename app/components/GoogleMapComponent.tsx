'use client'

import React, { useState } from 'react'
import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps'
import { europeanCountries, Country } from '../data/europeanCountries'
import { Button } from "@/components/ui/button"
import countriesData from '../../public/data/countries.json'

interface GoogleMapComponentProps {
  onCountrySelect: (country: Country, provinces: number) => void;
}

const GoogleMapComponent: React.FC<GoogleMapComponentProps> = ({ onCountrySelect }) => {
  const [activeCountry, setActiveCountry] = useState<string | null>(null);

  const handleCountryClick = (country: Country) => {
    setActiveCountry(country.name);
    const countryData = countriesData.find(c => c.name === country.name);
    const provincesCount = countryData ? countryData.provinces.length : 0;
    onCountrySelect(country, provincesCount);
  };

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}>
      <Map
        mapId={'europe-weather-map'}
        style={{ width: '100%', height: '100%' }}
        center={{ lat: 54.5260, lng: 15.2551 }}
        zoom={4}
        gestureHandling={'none'}
        disableDefaultUI={true}
        options={{
          draggable: false,
          zoomControl: false,
          scrollwheel: false,
          disableDoubleClickZoom: true,
        }}
      >
        {europeanCountries.map((country: Country) => (
          <AdvancedMarker
            key={country.name}
            position={country.center}
            onClick={() => handleCountryClick(country)}
          >
            <div style={{ 
              width: '10px', 
              height: '10px', 
              borderRadius: '50%', 
              backgroundColor: activeCountry === country.name ? 'red' : 'blue' 
            }} />
          </AdvancedMarker>
        ))}
      </Map>
    </APIProvider>
  )
}

export default GoogleMapComponent
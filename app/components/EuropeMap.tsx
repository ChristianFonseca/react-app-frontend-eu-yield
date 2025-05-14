'use client'

import React from 'react'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'

const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/europe.json"

export function EuropeMap() {
  return (
    <ComposableMap projection="geoAzimuthalEqualArea" projectionConfig={{
      rotate: [-10.0, -53.0, 0],
      scale: 1200
    }}>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#EAEAEC"
              stroke="#D6D6DA"
              style={{
                default: { outline: 'none' },
                hover: { fill: "#F53", outline: 'none' },
                pressed: { outline: 'none' },
              }}
            />
          ))
        }
      </Geographies>
    </ComposableMap>
  )
}


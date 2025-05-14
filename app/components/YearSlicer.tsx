'use client'

import React, { useState, useEffect } from 'react'
import { Slider } from "@/components/ui/slider"

interface YearSlicerProps {
  minYear: number;
  maxYear: number;
  onChange: (selectedYears: number[]) => void;
}

const YearSlicer: React.FC<YearSlicerProps> = ({ minYear, maxYear, onChange }) => {
  const [selectedYears, setSelectedYears] = useState<number[]>([minYear])

  useEffect(() => {
    onChange(selectedYears)
  }, [selectedYears, onChange])

  const handleSliderChange = (value: number[]) => {
    const selectedYears = Array.from({ length: value[0] - minYear + 1 }, (_, i) => minYear + i)
    setSelectedYears(selectedYears)
  }

  return (
    <div className="w-full">
      <Slider
        min={minYear}
        max={maxYear}
        step={1}
        value={[selectedYears.length + minYear - 1]}
        onValueChange={handleSliderChange}
        className="w-full"
      />
      <div className="flex justify-between mt-2">
        {Array.from({ length: maxYear - minYear + 1 }, (_, i) => minYear + i).map((year) => (
          <div
            key={year}
            className={`text-xs ${
              selectedYears.includes(year) ? 'text-primary font-bold' : 'text-gray-400'
            }`}
          >
            {year}
          </div>
        ))}
      </div>
    </div>
  )
}

export default YearSlicer

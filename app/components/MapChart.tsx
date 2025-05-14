import React, { memo } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";

// const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/europe.json";

const geoUrl = "https://github.com/subyfly/topojson/blob/master/continents/europe.json";


const MapChart = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -52.0, 0],
        center: [-5, 5],
        scale: 1100
      }}
    >
      <ZoomableGroup zoom={1} minZoom={1} maxZoom={1} center={[10, 50]}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#D6D6DA"
                stroke="#FFFFFF"
                strokeWidth={0.5}
              >
                <text
                  x={geo.properties.centroid[0]}
                  y={geo.properties.centroid[1]}
                  textAnchor="middle"
                  alignmentBaseline="middle"
                  fontSize={8}
                  fill="#000000"
                >
                  {geo.properties.name}
                </text>
              </Geography>
            ))
          }
        </Geographies>
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default memo(MapChart);

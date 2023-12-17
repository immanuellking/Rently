import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import React from "react";

const Map = () => {
//   const { isLoaded } = useJsApiLoader({
//     id: "AIzaSyD80EWd1Boxio10YI2qDFRkeTpK1IkBAVg",
//     googleMapsApiKey: "AIzaSyD80EWd1Boxio10YI2qDFRkeTpK1IkBAVg",
//   });

const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyD80EWd1Boxio10YI2qDFRkeTpK1IkBAVg"
  })

  const containerStyle = {
    width: "100vw",
    height: "70vh",
  };

  const center = {
    lat: 30.3165,
    lng: 78.0322,
  };

  return (
    isLoaded && (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <Marker position={{ lat: 30.3165, lng: 78.0322 }} />
        <></>
      </GoogleMap>
    )
  );
};

export default Map;

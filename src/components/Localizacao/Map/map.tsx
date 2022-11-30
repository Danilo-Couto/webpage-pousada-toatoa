import { GoogleMap, Marker, LoadScript, useJsApiLoader } from "@react-google-maps/api";
import { useMemo } from "react";

function Map() {
  const containerStyle = {
      width: '1200px',
      height: '400px'
  };
  
  const center = useMemo(() => ({ 
    lat: -6.2316437861024365,
    lng: -35.04304665161367      
    }), []);

    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    });
    
    return (
        <>
        {isLoaded ?
        (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}
        >
            <Marker position={center}/>
        </GoogleMap>
        )
        : null }
        </>
    )
}

export default Map;

// https://www.youtube.com/watch?v=9e-5QHpadi0
// https://stackoverflow.com/questions/71198157/testing-react-google-maps-usejsapiloader-using-react-testing-library
//https://dev.to/thomasledoux1/easy-way-to-integrate-google-maps-in-react-1j6j
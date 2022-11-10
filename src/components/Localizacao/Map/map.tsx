import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

function Map() {
  const containerStyle = {
      width: '1200px',
      height: '400px'
  };
  
  const center = {
      lat: -6.2316437861024365,
      lng: -35.04304665161367
  };

  return (
      <LoadScript
          googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
      >
      <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
      >
          <Marker position={center}/>
      </GoogleMap>
      </LoadScript>    
  );
}

export default Map;

// https://www.youtube.com/watch?v=9e-5QHpadi0

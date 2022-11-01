import styles from '../../../styles/Home.module.css'
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker, LoadScript } from "@react-google-maps/api";

function Localizacao() {
  const containerStyle = {
    width: '1200px',
    height: '400px'
  };
  
  const center = {
    lat: -6.2316437861024365,
    lng: -35.04304665161367
  };
  
  return (
    <>
      <h2 className={styles.sub_title}>LOCALIZACAO</h2>
      <p>Rua Praia do Amor, 48, B, Pipa - RN</p>
      <div className={styles.grid}>
        <div className={styles.grid}>
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
        </div>
      </div>
    </>
    );
  }
  
  function Map() {
    const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

    return (
      <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
        <Marker position={center} />
      </GoogleMap>
    );
  }


export default Localizacao;

// https://www.youtube.com/watch?v=9e-5QHpadi0

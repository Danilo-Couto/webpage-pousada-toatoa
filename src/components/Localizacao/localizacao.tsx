import styles from '../../../styles/Home.module.css'
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker, LoadScript } from "@react-google-maps/api";

function Localizacao() {
  const containerStyle = {
    width: '400px',
    height: '400px'
  };
  
  const center = {
    lat: -3.745,
    lng: -38.523
  };
  
  return (
    <>
      <h2 className={styles.sub_title}>LOCALIZACAO</h2><div className={styles.grid}>
        <div className={styles.grid}>
        <LoadScript
          googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          >
          <>
        </>
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

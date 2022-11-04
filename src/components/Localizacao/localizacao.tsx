import styles from '../../../styles/Home.module.css'
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
import { handleRedirect} from '../../helpers';

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
    <div className={styles.main}>
      <h2 className={styles.sub_title}>LOCALIZACAO</h2>
      <p>Rua Praia do Amor, 48, B, Pipa - RN</p>
      <button className={styles.button_drive}
       onClick={() =>
        handleRedirect('https://www.google.com/maps/dir//POUSADA+%26+HOSTEL+TOA+TOA+EM+PIPA+-+R.+Praia+do+Amor,+48,+Tibau+do+Sul+-+RN,+59178-000/@-6.23207,-35.0439185,18.58z/data=!4m8!4m7!1m0!1m5!1m1!1s0x7b28fb676dba819:0xa2acc91d07df4801!2m2!1d-35.0431498!2d-6.2316913')
      }
      >FAZER ROTA</button>
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
    </div>
    );
  }

export default Localizacao;

// https://www.youtube.com/watch?v=9e-5QHpadi0

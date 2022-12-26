import { GoogleMap, Marker, LoadScript, useJsApiLoader } from "@react-google-maps/api";
import { useMemo } from "react";
import styles from '../../../../styles/Home.module.css'

function Map() {
  const center = useMemo(() => ({ 
    lat: -6.2316437861024365,
    lng: -35.04304665161367      
    }), []);

    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    });
    
    return (  
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11546.9701011241!2d-35.05668435555337!3d-6.230699016318558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b28fb676dba819%3A0xa2acc91d07df4801!2sPOUSADA%20TOA%20TOA%20EM%20PIPA!5e0!3m2!1sen!2sbr!4v1671908364324!5m2!1sen!2sbr" width="600" 
            loading="lazy" allowFullScreen
            style={{ border: 0, width: '90vw', height:'400px'}}
            >
        </iframe>

        // <div >
        //     {isLoaded ?
        //     (
        //     <GoogleMap
        //         mapContainerStyle={{
        //             height: '100vh', width: '100vw'
        //           }}
        //         center={center}
        //         zoom={15}
        //     >
        //         <Marker position={center}/>
        //     </GoogleMap>
        //     )
        //     : null }
        // </div>
    )
}

export default Map;

// https://www.youtube.com/watch?v=9e-5QHpadi0
// https://stackoverflow.com/questions/71198157/testing-react-google-maps-usejsapiloader-using-react-testing-library
//https://dev.to/thomasledoux1/easy-way-to-integrate-google-maps-in-react-1j6j
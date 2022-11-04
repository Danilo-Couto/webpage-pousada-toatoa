import styles from '../../../styles/Home.module.css'
import { handleRedirect } from '../../helpers';

export default function ButtonDrive() {
  return (
    <button className={styles.button_drive}
    onClick={() =>
      handleRedirect('https://www.google.com/maps/dir//POUSADA+%26+HOSTEL+TOA+TOA+EM+PIPA+-+R.+Praia+do+Amor,+48,+Tibau+do+Sul+-+RN,+59178-000/@-6.23207,-35.0439185,18.58z/data=!4m8!4m7!1m0!1m5!1m1!1s0x7b28fb676dba819:0xa2acc91d07df4801!2m2!1d-35.0431498!2d-6.2316913')
    }
    >FAZER ROTA</button>    
  );
}

import styles from '../../../styles/Home.module.css'
import { handleRedirect } from '../../helpers';

export default function ButtonChangeMap({showMaps, setShowMaps}) {
  return (
    <button className={styles.button_drive}
      onClick={() => setShowMaps(!showMaps)}
    > TROCAR MAPA</button>    
  );
}
import styles from '../../../styles/Home.module.css'

export default function ButtonChangeMap({showMaps, setShowMaps}) {
  return (
    <button className={styles.button_drive}
      onClick={() => setShowMaps(!showMaps)}
    > TROCAR MAPA</button>    
  );
}
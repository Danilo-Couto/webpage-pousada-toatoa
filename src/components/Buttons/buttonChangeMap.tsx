import styles from '../../../styles/Home.module.css'
import useTranslation from '../../hooks/useTranslation';

export default function ButtonChangeMap({showMaps, setShowMaps}) {
  const {t} = useTranslation();

  return (
    <button className={styles.button_drive}
      onClick={() => setShowMaps(!showMaps)}
    > 
      {t('botao_trocar_mapa')}
    </button>    
  );
}
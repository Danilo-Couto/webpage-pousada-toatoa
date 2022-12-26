import { useRouter } from 'next/router';
import {useEffect, useState} from 'react';
import styles from '../../../styles/Home.module.css'
import useTranslation from '../../hooks/useTranslation';
import ButtonDrive from '../Buttons/bookDrive';
import ButtonHowGetHere from '../Buttons/howGetHere';
import ButtonChangeMap from '../Buttons/buttonChangeMap';
import Map from './Map/map';
import StaticMap from './Map/StaticMap';

function Localizacao() {
  const [showLocation, setShowLocation] = useState(false);
  const {pathname} = useRouter();
  const [showMaps, setShowMaps] = useState(true);
  const {t} = useTranslation();
  
  useEffect(() => {
    if (pathname !== '/') setShowLocation(true)
  }, [pathname]);

  return (
    <div className={styles.main}>
      <h2 className={styles.sub_title}>   
      {t('localizacao')}
    </h2>
      <h3 className={styles.description}>
        {t('slogan')}
      </h3>
        {showLocation &&
        <p className={styles.description}>
        {t('localizacao_descricao')}
        </p>}
      <h3 className={styles.description}>
        {t('aeroportos')}
      </h3>
      <p className={styles.description}>
      {t('aerooprto_natal')}
      </p>
      <p className={styles.description}>
      {t('aerooprto_jp')}
      </p>
      <div className={styles.grid}>
        <ButtonDrive/>
        <ButtonHowGetHere/>
        <ButtonChangeMap showMaps={showMaps} setShowMaps={setShowMaps}/>
      </div>
      <div className={styles.main}>
        <p>Rua Praia do Amor, 48, B, Pipa - RN</p>
        <div className={styles.grid}>
        { showMaps ? <Map /> : <StaticMap /> }
        </div>
      </div>
    </div>
    );
  }

export default Localizacao;
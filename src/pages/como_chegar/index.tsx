import styles from '../../../styles/Home.module.css'
import ButtonDrive from '../../components/Buttons/bookDrive';
import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/header';
import BlablacarButton from '../../components/Buttons/blablacar';
import HeadGettingHere from '../../components/Head/head_gettingthere';
import useTranslation from '../../hooks/useTranslation';
import { particulares, taxistas } from '../../lib/como_chegar_const';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <HeadGettingHere/>
      <Header/>
      <div className={styles.main}>
        <h2 className={styles.sub_title}>
          {t('como_chegar')}
        </h2>
        <h3>{t('de_carro')}</h3>
        <ButtonDrive/>
      <div className={styles.grid_img_room}>
        <div className={styles.getting_there_item}>
          <h3>{t('de_taxi')}</h3>
          <p>{t('taxi_descricao')}</p>
          <h4>{t('taxi_contatos')}</h4>
          <ul className={styles.ul_no_bullets}>
          {taxistas.slice(0,3).map((taxista, i)=> ( 
            <li key={i}>{taxista}</li>
          ))}
          </ul>
        </div>
        <div className={styles.getting_there_item}>
          <h3> {t('de_carona')}</h3>
          <p>{t('carona_descricao')}</p>
          <BlablacarButton />
        </div>

        <div className={styles.getting_there_item}>
          <h3>{t('de_van_particular')}</h3>
          <ul className={styles.ul_no_bullets}>
            {particulares.map((p, i)=> ( 
              <li key={i}>{p}</li>
            ))}
          </ul>
        </div>

        <div className={styles.getting_there_item}>
          <h3>{t('de_onibus')}</h3>
          <p>{t('onibus_descricao')}</p>
          <h4>NATAL - PIPA</h4>
          <h5>{t('ds')}</h5>
          06:00 - 07:20 - 08:20 - 09:30 11:00 - 12:00 - 14:00 - 16:00 - 17:00 - 18:10
          <h5>{t('sabado')}</h5>
          6:00 - 08:20 - 09:30 - 11:00 - 12:00 - 14:00 - 16:00 - 18:10
          <h5>{t('domingos')}</h5>
          06:50 - 09:30 - 15:00
          <h4>PIPA - NATAL</h4>
          <h5>{t('ds')}</h5>
          05:00 - 06:00 - 07:10 - 10:40- 11:20 - 12:15 - 13:30 - 14:30 - 15:50 - 18:20
          <h5>{t('sabado')}</h5>
          05:40 - 07:10 - 10:40 - 11:20 - 13:30 - 14:30 - 15:50
          <h5>{t('domingos')}</h5>
          07:20 - 09:30 - 15:20
        </div>
        
        <div className={styles.getting_there_item}>
          <h3>{t('de_micro')}</h3>
          <p>{t('micro_descricao')}</p>
          <h4> NATAL - PIPA</h4>
          <h5> 05:50 - 10:00 - 14:30</h5>
          <h4> PIPA - NATAL</h4>
          <h5> 07:50 - 12:20 - 16:30- 13:30 - 14:30 - 15:50 - 18:20</h5>
        </div>
        
      </div>
      <div className={styles.getting_there_item}>
        <h3> {t('de_van_local')}</h3>
        (Goianinha-Pipa/ Pipa-Goianinha)
        <p>(84)99448-9620</p>
        <p>{t('van_local_descricao')}</p>      
      </div>

      <div className={styles.getting_there_item}>
      <p>{t('mais_infos')}</p>      
        <a href='https://www.viajenaviagem.com/destino/pipa/como-chegar' target="_blank" rel="noreferrer">
            <p>viajenaviagem</p>
        </a>
        <a href='https://www.pipa.tur.br/transporte/i/38599565/terminal-de-onibus ' target="_blank" rel="noreferrer">
          <p>terminal de onibus</p>
        </a>
        <a href='https://www.buscaonibus.com.br/horario/pipa/natal' target="_blank" rel="noreferrer">
          <p>busca onibus</p>
        </a>
      </div>
    </div>

    <Footer/>
  </div>
);
}


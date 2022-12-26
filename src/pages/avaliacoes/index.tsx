import styles from '../../../styles/Home.module.css'
import RatingsBooking from '../../components/Avaliacoes/RatingsBooking';
import OtasButton from '../../components/Buttons/otas';
import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/header';
import useTranslation from '../../hooks/useTranslation';

export default function Reservas() {
  const {t} = useTranslation();

  return (
    <div>
      <Header/>
      <div className={styles.main}>
        <h2 className={styles.sub_title}>
        {t('avaliacoes')}
        </h2>
        <RatingsBooking />
        <h3 className={styles.description}>
          {t('avaliacoes_descricao')}
        </h3>
        <OtasButton/>
      </div>
      <Footer/>
    </div>
  );
}
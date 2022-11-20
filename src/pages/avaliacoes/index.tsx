import styles from '../../../styles/Home.module.css'
import RatingsBooking from '../../components/Avaliacoes/RatingsBooking';
import OtasButton from '../../components/Buttons/otas';
import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/header';

export default function Reservas() {
  return (
    <div>
      <Header/>
      <div className={styles.main}>
        <h2 className={styles.sub_title}>AVALIAÇÕES</h2>
        <RatingsBooking />
        <h3 className={styles.description}>
          Visite nossos parceros para ver o que nossos hóspedes disseram da gente in loco.
        </h3>
        <OtasButton/>
      </div>
      <Footer/>
    </div>
  );
}
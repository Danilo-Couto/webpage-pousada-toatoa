import styles from '../../../styles/Home.module.css'
import OtasButton from '../../components/Buttons/otas';
import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/header';

export default function Reservas() {
  return (
    <div className={styles.container}>
      <Header/>
      <div className={styles.main}>
        <h2>
          Página em contruçao.
        </h2>
        <h2 className={styles.sub_title}>
          Por enquanto, visite nossos parceros para ver o que nossos hóspedes disseram da gente
        </h2>
        <OtasButton/>
      </div>
      <Footer/>
    </div>
  );
}

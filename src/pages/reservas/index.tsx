import styles from '../../../styles/Home.module.css'
import Footer from '../../components/Footer/footer';
import Form from '../../components/Form/form';
import Header from '../../components/Header/header';
import Intro from '../../components/Intro/intro';

export default function Reservas() {
  return (
    <div className={styles.container}>
      <Header/>
      <Intro/>
    </div>
  );
}

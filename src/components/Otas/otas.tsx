import styles from '../../../styles/Home.module.css'
import BookNowButton from '../Buttons/bookNow';
import OtasButton from '../Buttons/otas';
function Otas() {
  return (
    <div className={styles.main}>
      <h2 className={styles.sub_title}>CANAIS DE RESERVA</h2>
      <div className={styles.otas}>
        <BookNowButton/>
        <OtasButton/>
        {/* <h3 className={styles.description}>Mas garantimos 10% de desconto reservando diretamente conosco</h3> */}
      </div>
    </div>
  );
}

export default Otas;

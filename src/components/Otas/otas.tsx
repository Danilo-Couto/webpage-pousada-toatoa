import styles from '../../../styles/Home.module.css'
import BookNowButton from '../Buttons/bookNow';
import OtasButton from '../Buttons/otas';
function Otas() {
  return (
    <div className={styles.main}>
      <h2 className={styles.sub_title}>CANAIS DE RESERVA</h2>
      <div className={styles.otas}>
        <h3 className={styles.description}>ATÉ 25% RESERVANDO AGORA DIRETAMENTE CONOSCO!</h3>
        <BookNowButton/>
        <OtasButton/>
      </div>
    </div>
  );
}

export default Otas;

import styles from '../../../styles/Home.module.css'

function Otas() {
  return (
    <div >
      <h2>OUTROS CANAIS DE RESERVA</h2>
      <h3>Mas garantimos 10% de desconto, reservando diretamente conosco</h3>
      <button> RESERVE JÁ</button>
      <div className={styles.grid}>
        <a href="" className={styles.card}>
          <p> BOOKING</p> 
        </a>
        <a href="" className={styles.card}>
          <p> AIRBNB</p> 
        </a>
        <a href="" className={styles.card}>
          <p> EXPEDIA</p> 
        </a>
        <a href="" className={styles.card}>
          <p> HOSTELWORLD</p> 
        </a>
      </div>
    </div>
  );
}

export default Otas;

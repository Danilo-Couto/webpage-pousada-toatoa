import styles from '../../../styles/Home.module.css'
function Otas() {
  return (
    <div className={styles.main}>
      <h2 className={styles.sub_title}>OUTROS CANAIS DE RESERVA</h2>
      <h3 className={styles.description}>Mas garantimos 10% de desconto, reservando diretamente conosco</h3>
      <button className={styles.button}> RESERVE JÁ</button>
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

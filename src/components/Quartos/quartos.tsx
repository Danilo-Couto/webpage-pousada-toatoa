import styles from '../../../styles/Home.module.css'

function Quartos() {
  return (
    <div className={styles.main}>
        <h2 className={styles.sub_title}>
          NOSSOS QUARTOS
        </h2>
        <h3 className={styles.description}>
          Quartos privativos para casais e grupos de até 6 pessoas. Todos com banheiro privativo com chuveiro elétrico, wifi, toalhas e roupas de cama.
        </h3>

        <div className={styles.grid}>
          <a href="" className={styles.card}>
            <h2>SUÍTES POR DO SOL</h2>
            <p>
              PRIVATIVO 2 A 4 PESSOAS
            </p>
            <p> --- </p>
            <p> Para até 4 pessoas: 1 cama de casal + 1 beliche</p>
            <p> Opção no 1o andar com saída exclusiva para jardim</p> 
            <p> ---- </p>
            <p> Ar-condicionado, banheiro privativo e varanda com rede</p>
            <p> ---- </p>
          </a>

          <a href="" className={styles.card}>
            <h2>SUÍTES FLORESTA</h2>
            <p>
              PRIVATIVO 2 A 4 PESSOAS
            </p>
            <p> --- </p>
            <p> Para até 4 pessoas: 1 cama de casal + 1 beliche</p> 
            <p> Opção no 2o andar com vista para a floresta</p> 
            <p> ---- </p>
            <p> Ar-condicionado, banheiro privativo e varanda com rede</p>
            <p> ---- </p>
          </a>

          <a href="" className={styles.card}>
            <h2>CHALÉZINHOS DA PAZ&rarr;</h2>
            <p>
              PRIVATIVO 1 A 3 PESSOAS
            </p>
            <p> --- </p>
            <p> Nossa opção de entrada, a mais economica</p>
            <p> ---- </p>
            <p> Ventilador e banheiro privativo</p>
            <p> ---- </p>
            <p> Para até 3 pessoas: 1 cama de casal + 1 beliche</p> 
          </a>

          <a href="" className={styles.card}>
            <h2>QUARTOS DA ONDA</h2>
            <p>
              PRIVATIVO 4 A 6 PESSOAS
            </p>
            <p> --- </p>
            <p> Nossa opção para grupos e famílias.</p>
            <p> ---- </p>
            <p> 2 ambientes: um com cama de casal e outro com 2 beliches</p> 
            <p> Opção no 1o andar com saída exclusiva para jardim</p> 
            <p> ---- </p>
            <p> Ar-condicionado, banheiro privativo e varanda com rede</p>
            <p> ---- </p>
          </a>

          <a href="" className={styles.card}>
            <h2>QUARTOS DO CÉU</h2>
            <p>
              PRIVATIVO 4 A 6 PESSOAS
            </p>
            <p> --- </p>
            <p> Nossa opção para grupos e famílias</p>
            <p> ---- </p>
            <p> 2 ambientes: um com cama de casal e outro com 2 beliches</p> 
            <p> Opção no 2o andar com vista para a floresta</p> 
            <p> ---- </p>
            <p> Ar-condicionado, banheiro privativo e varanda com rede</p>
            <p> ---- </p>
          </a>
        </div>
    </div>
    );
}

export default Quartos;

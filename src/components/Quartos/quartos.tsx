import styles from '../../../styles/Home.module.css'
import Image from 'next/image';
import por_do_sol from '../../../public/images/hospedagem praia do amor - toa toa20220903_110900~2-01.jpeg'
import floresta from '../../../public/images/hospedagem praia do amor - toa toa20220903_100658~2-01.jpeg'
import chales_da_paz from '../../../public/images/hospedagem praia do amor - toa toa20220903_114450~2-01.jpeg'
import da_onda from '../../../public/images/hospedagem praia do amor - toa toa20220903_092924~2-01.jpeg'
import do_ceu from '../../../public/images/hospedagem praia do amor - toa toa20220903_102925~2-01.jpeg'

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
            <Image
            src={por_do_sol}
            alt="Acomodaçoes Toa Toa Em Pipa"
            className={styles.img_card}
            />
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
            <Image
            src={floresta}
            alt="Acomodaçoes Toa Toa Em Pipa"
            className={styles.img_card}
            />
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
            <Image
            src={chales_da_paz}
            alt="Acomodaçoes Toa Toa Em Pipa"
            className={styles.img_card}
            />
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
            <Image
            src={da_onda}
            alt="Acomodaçoes Toa Toa Em Pipa"
            className={styles.img_card}
            />
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
            <Image
            src={do_ceu}
            alt="Acomodaçoes Toa Toa Em Pipa"
            className={styles.img_card}
            />
          </a>
        </div>
    </div>
    );
}

export default Quartos;

import Image from "next/image";
import styles from '../../../styles/Home.module.css'
import mypic from '../../../public/images/praia-do-pipa-tibau-do-sul.jpg'

function Banner() {
  return (
    <div className={styles.main}>
      -
      <Image
        className={styles.img_main}
        src={mypic}
        alt="Praia do Amor - Pipa - RN"
      />
      <div className={styles.titles}>
        <h2 className={styles.sub_title}>
          DE VIAJANTE PARA VIAJANTES
        </h2>  
        <h2>
          VIAJAMOS O MUNDO E SOMOS APAIXONADOS POR RECEBER E CONHECER PESSOAS
        </h2>
      </div>
    </div>
    );
}

export default Banner;

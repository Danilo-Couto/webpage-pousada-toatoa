import Image from "next/image";
import styles from '../../../styles/Home.module.css'
import mypic from '../../../public/images/hospedagem praia do amor - toa toa 20220907_124214~2.jpg'
import BookNowButton from "../Buttons/bookNow";

function Intro() {
  return (
    <div className={styles.main}>
      <Image
        className={styles.img_main}
        src={mypic}
        alt="Piscina Pousada Toa Toa Em Pipa"
      />
      <div className={styles.titles}>
        <h1 className={styles.title}>
          BEM VINDO A POUSADA TOA TOA EM PIPA!
        </h1>
        <h2 className={styles.sub_title}>
          A CASA DE PRAIA DOS SURFISTAS, APAIXONADOS E VIAJANTES
        </h2>  
        <h2>
          A 50 METROS DA PRAIA DO AMOR E 550 METROS DO CENTRO
        </h2>
      <BookNowButton/>
      </div>
    </div>
    );
}

export default Intro;

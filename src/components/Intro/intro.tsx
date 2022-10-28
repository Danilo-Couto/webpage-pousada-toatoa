import Image from "next/image";
import styles from '../../../styles/Home.module.css'

function Intro() {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>
        BEM VINDO A POUSADA TOA TOA EM PIPA!
      </h1>
      <h2>
        A CASA DE PRAIA DOS SURFISTAS, APAIXONADOS E VIAJANTES
      </h2>
      <h3> 
        A 50 METROS DA PRAIA DO AMOR E 550 METROS DO CENTRO
      </h3>  
      <div style={{width: '1200px', height: '600px', position: 'relative'}}>
        <Image
        src="/images/hospedagem praia do amor - toa toa 20220907_124214~2.jpg"
        alt="Piscina Pousada Toa Toa Em Pipa"
        fill
        sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
        />
      </div>
      <button className={styles.card} >
        <h2>RESERVE AGORA COM 10% DE DESCONTO</h2>
      </button>
    </div>
    );
}

export default Intro;

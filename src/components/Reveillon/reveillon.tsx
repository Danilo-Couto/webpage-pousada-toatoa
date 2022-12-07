import styles from '../../../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link';
import { handleRedirect } from '../../helpers';

function Reveillon({quartos}) {
  return (
    <div className={styles.main}>
      <h2 className={styles.sub_title}>
        REVEILLON 2023: ESCOLHA SUA HABITAÇÃO E SEJA FELIZ!
      </h2>
      <h3 className={styles.description}>
        Quartos privativos de até 6 pessoas. Todos com banheiro privativo com chuveiro elétrico, wifi, toalhas e roupas de cama.
      </h3>
      <h3 className={styles.subtitle}>
        PREÇOS EXCLUSIVOS DO SITE
      </h3>
      <div className={styles.grid}>
        {quartos.map((e, i)=> ( 
          <div
          className={styles.card}
          key = {i}
          >
          <div className={styles.titles}>
            <h2>{e.title}</h2>
            <p> {e.subtitulo} </p>
            <h2>{e.price}</h2>
            <h2>{e.price2}</h2>
          </div>
          <Image
          width={500}
          height={300}
          src={e.src.cover}
          alt={e.title}
          className={styles.img_card}
          />
        </div>
        ))}
        <h3 className={styles.subtitle}>
          RESERVE AGORA DIRETO PELO WHATSAPP PARA APROVEITAR ESTES PREÇOS. MENCIONE QUE VEIO PELO SITE.
        </h3>
      </div>
        <button
            className={styles.button_booknow}
            onClick={() =>handleRedirect('https://wa.me/message/P7Y6BQIEU6KTO1')}
            > RESERVAR JÁ!
          </button>
    </div>
  );
}

export default Reveillon;

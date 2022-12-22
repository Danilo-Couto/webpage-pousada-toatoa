import styles from '../../../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link';
import useTranslation from '../../hooks/useTranslation';

function Quartos({quartos}) {
  const {t} = useTranslation();

  return (
    <div className={styles.main}>
      <h2 className={styles.sub_title}>
        {t('nossos_quartos')}
      </h2>
      <h3 className={styles.description}>
        {t('nossos_quartos_descricao')}
      </h3>
      <div className={styles.grid}>
        {quartos.map((e, i)=> ( 
          <Link
          className={styles.card}
          key = {i}
          href={e.href} 
          >
          <div className={styles.titles}>
            <h2>{e.title}</h2>
            <p> {e.subtitulo} </p>
          </div>
          <Image
          width={500}
          height={300}
          src={e.src.cover}
          alt={e.title}
          className={styles.img_card}
          />
        </Link>
        ))}
      </div>
    </div>
  );
}

export default Quartos;

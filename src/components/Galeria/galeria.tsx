import Image from 'next/image';
import styles from '../../../styles/Home.module.css'
import useTranslation from '../../hooks/useTranslation';

function Galeria({galeria}) {
  const {t} = useTranslation();

  return (
    <div className={styles.main}>
      <h2 className={styles.sub_title}>
       {t('galeria_fotos')}
      </h2>
      <h3 className={styles.description}>
        {t('galeria_descricao')}
      </h3>
      <div className={styles.grid}>
        {galeria.images.map((e, i)=> ( 
          <Image
          width={500}
          height={300}
          className={styles.img_galery}
          key={i}
          src={e}
          alt={e.src}
          />
        ))}
      </div>
    </div>
  );
}

export default Galeria;

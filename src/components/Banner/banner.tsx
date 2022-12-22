import Image from "next/image";
import styles from '../../../styles/Home.module.css'
import mypic from '../../../public/images/praia-do-pipa-tibau-do-sul.jpg'
import useTranslation from "../../hooks/useTranslation";

function Banner() {
  const {t} = useTranslation();

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
          {t('banner_home')}
        </h2>  
        <h2>
          {t('banner_home_descricao')}
        </h2>
      </div>
    </div>
    );
}

export default Banner;

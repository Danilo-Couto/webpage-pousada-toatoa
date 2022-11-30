import Image from "next/image";
import location from '../../../../public/images/localizacao_pousada_toatoa_pipa.jpg'
import styles from '../../../../styles/Home.module.css'

function StaticMap() {
  return (
    <Image
      width={2000}
      height={500}
      src={location}
      alt={'localizacao pousada toatoa pipa'}
      className={styles.img_general}
  /> 
  );
}

export default StaticMap;


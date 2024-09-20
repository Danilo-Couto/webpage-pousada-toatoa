import Image from "next/image";
import styles from '../../../styles/Home.module.css'
import mypic from '../../../public/images/hospedagem praia do amor - toa toa 20220907_124214~2.jpg'
import BookNowButton from "../Buttons/bookNow";
import useTranslation from "../../hooks/useTranslation";
import { usePathname } from "next/navigation";
import Form from "../Form/form";

function Intro() {
  const {t} = useTranslation();
  const p = usePathname()

  return (
    <div className={styles.main}>
      <Image
        className={styles.img_main}
        src={mypic}
        alt="Piscina Pousada Toa Toa Em Pipa"
      />
      {p.includes('/reservas') && (
        <div className={styles.overlay}>
          <Form />  
        </div>
      )}
      {!p.includes('/reservas') && (
        <div className={styles.titles}>
          <h1 className={styles.title}>
            {t('bem_vindo')}
          </h1>
          <h2 className={styles.sub_title}>
            {(t('slogan'))}
          </h2>  
          <BookNowButton/>
        </div>
      )}
      
    </div>
  );
}

export default Intro;

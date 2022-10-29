import styles from '../../../styles/Home.module.css'
import {
  AiOutlineInstagram,
  AiOutlineWhatsApp,
  AiFillFacebook
} from 'react-icons/ai';

export default function Footer() {
  function handleRedirect(url: string) {
    window.open(url); 
  }

  function handleScrollTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
  //   <footer className={styles.footer}>
  //   <a
  //     // href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
  //     // target="_blank"
  //     // rel="noopener noreferrer"
  //   >
  //     Pousada Toa Toa Em Pipa - Rua Praia do Amor, 48 B
  //     <span className={styles.logo}>
  //       <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
  //     </span>
  //   </a>
  // </footer>
  
  <div className={styles.footer}>
    <span>
      Pousada Toa Toa Em Pipa - Rua Praia do Amor, 48 B
    </span> 
    <section>
      <AiOutlineInstagram
        onClick={() => handleRedirect('https://instagram.com/toatoa_pipa')}
      />
      <AiFillFacebook 
      onClick={() =>
        handleRedirect('https://www.facebook.com/HospedariaToaToaEmPipa')
      }
    />
      <AiOutlineWhatsApp
      onClick={() =>
        handleRedirect('')
      }
    />
    </section>
    <button type="button" onClick={handleScrollTop}>
      Back to the Top
    </button>
</div>

  );
}

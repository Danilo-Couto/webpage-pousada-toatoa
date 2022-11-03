import Image from "next/image";
import Link from "next/link";
import styles from '../../../styles/Home.module.css'
import logo from '../../../public/images/logo_hospedaria_toatoa_em_pipa.jpeg'


function Header() {
  return (
    <div className={styles.header}>
      <Image
        src={logo}
        alt="Acomodaçoes Toa Toa Em Pipa"
        className={styles.logo} 
      />

      <nav className={styles.header}>
        <Link href="/"> LOCALIZAÇÃO  </Link>
        <Link href="/">RESERVAS  </Link>
        <Link href="/quartos/">QUARTOS </Link>
        <Link href="/">PASSEIOS PAGOS </Link>
        <Link href="/">PASSEIOS SEM GUIAS </Link>
        <Link href="/">GALERIA  </Link>
        <Link href="/">AVALIAÇÕES  </Link>
        <Link href="/">FAQ  </Link>
        <Link href="/"> COMO CHEGAR </Link>
        </nav>
    </div>
 );
}

export default Header;

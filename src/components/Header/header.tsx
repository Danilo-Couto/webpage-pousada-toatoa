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
        <Link href="/localizacao"> LOCALIZAÇÃO  </Link>
        <Link href="/reservar">RESERVAS  </Link>
        <Link href="/quartos">QUARTOS </Link>
        <Link href="/passeios_pagos">PASSEIOS PAGOS </Link>
        <Link href="/passeios_gratis">PASSEIOS SEM GUIAS </Link>
        <Link href="/galeria">GALERIA  </Link>
        <Link href="/avaliacoes">AVALIAÇÕES  </Link>
        <Link href="/faq">FAQ  </Link>
        <Link href="/como_chegar"> COMO CHEGAR </Link>
        </nav>
    </div>
 );
}

export default Header;

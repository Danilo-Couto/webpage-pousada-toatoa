import Image from "next/image";
import Link from "next/link";
import styles from '../../../styles/Home.module.css'
import logo from '../../../public/images/logo_hospedaria_toatoa_em_pipa.jpeg'

function Header() {
  return (
    <div className={styles.header}>
      <Link href='/'>
        <Image
          src={logo}
          alt="Acomodaçoes Toa Toa Em Pipa"
          width={100}
          height={100}
        />
      </Link>
      <Link href="/"> </Link>
      <Link href="/"> </Link>
      <Link href="/reservas">RESERVAS  </Link>
      <Link href="/quartos">QUARTOS </Link>
      <Link href="/localizacao"> LOCALIZAÇÃO  </Link>
      <Link href="/galeria">GALERIA  </Link>
      <Link href="/avaliacoes">AVALIAÇÕES  </Link>
      {/* <Link href="/passeios_pagos">PASSEIOS PAGOS </Link>
      <Link href="/passeios_gratis">PASSEIOS SEM GUIAS </Link>
      <Link href="/faq">FAQ  </Link> */}
      <Link href="/como_chegar"> COMO CHEGAR </Link>
    </div>
 );
}

export default Header;

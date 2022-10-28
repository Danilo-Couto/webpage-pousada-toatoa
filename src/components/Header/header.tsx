import Link from "next/link";

function Header() {
  return (
      <ul>
        <Link href="/" >LOCALIZAÇÃO  </Link>
        <Link href="/" >RESERVAS  </Link>
        <Link href="/" >QUARTOS  </Link>
        <Link href="/" >PASSEIOS PAGOS </Link>
        <Link href="/" >PASSEIOS SEM GUIAS </Link>
        <Link href="/" >GALERIA  </Link>
        <Link href="/" >AVALIAÇÕES  </Link>
        <Link  href="/" > COMO CHEGAR </Link>
      </ul>
 );
}

export default Header;

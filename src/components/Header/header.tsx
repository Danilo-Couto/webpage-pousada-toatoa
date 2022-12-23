import Image from "next/image";
import Link from "next/link";
import styles from '../../../styles/Home.module.css'
import logo from '../../../public/images/logo_hospedaria_toatoa_em_pipa.jpeg'
import useTranslation from '../../hooks/useTranslation';
import { useRouter } from "next/router";

function Header() {
  const { t, locale, setLocale, locales } = useTranslation();
  const { asPath, pathname, push, route } = useRouter();

  function handleLocaleChange(language: string) {
    if (!window) {
      return;
    }
    
    const regex = new RegExp(`^/(${locales.join('|')})`);
    localStorage.setItem('lang', language);
    setLocale(language);

    if (!route.includes('quartos/')) {
      push(pathname, asPath.replace(regex, `/${language}`));
    }
  }

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
      <Link href="/reservas">{t('reservas')}</Link>
      {/* <Link href="https://hbook.hsystem.com.br/Booking?companyId=632b13f5e819f634133f8f8a">RESERVAS  </Link> */}
      <Link href={`${locale}/quartos`}> {t('quartos')}</Link>
      <Link href="/localizacao"> {t('localizacao')}</Link>
      <Link href="/galeria"> {t('galeria')}</Link>
      <Link href="/avaliacoes"> {t('avaliacoes')}</Link>
      {/* <Link href="/passeios_pagos"> {t('passeios_pagos')} </Link>
      <Link href="/passeios_gratis"> {t('passeios_gratis')} </Link>
      <Link href="/faq"> {t('')} FAQ  </Link> */}
      <Link href="/como_chegar"> {t('como_chegar')}</Link>
      {/* <Link href="/reveillon"> {t('reveillon')}</Link> */}
      <div>
        {locales.map((locale) => (
          <button key={locale} onClick={() => handleLocaleChange(locale)}>
            {locale}
          </button>
        ))}
      </div>
    </div>
 );}

export default Header;

// referencia: https://github.dev/elvessousa/next-intl
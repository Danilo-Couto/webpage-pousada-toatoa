import Image from "next/image";
import Link from "next/link";
import styles from '../../../styles/Home.module.css'
import logo from '../../../public/images/logo_hospedaria_toatoa_em_pipa.jpeg'
import useTranslation from '../../hooks/useTranslation';
import { useRouter } from "next/router";
import ReactCountryFlag from "react-country-flag";

function Header() {
  const { t, locale, setLocale, locales } = useTranslation();
  const { asPath, pathname, push, route } = useRouter();
  
  const flag = (locale: string) => { 
    if (locale === 'pt' ) return 'BR';
    if (locale === 'en' ) return 'US';
    if (locale === 'es' ) return 'ES';
  }

  function handleLocaleChange(language: string) {
    if (!window) {
      return;
    }
    
    const regex = new RegExp(`^/(${locales.join('|')})`);
    localStorage.setItem('lang', language);
    setLocale(language);

    if (route.includes('quartos/')) {
      push(pathname, asPath.replace(regex, `/${language}`));
    }
  }

  return (
    <div className={styles.header}>
        <Image
          src={logo}
          alt="Acomodaçoes Toa Toa Em Pipa"
          width={125}
          height={125}
        />
      <Link href="/"> </Link>
      <Link href="/">HOME</Link>
      <Link href="/reservas">{t('reservas')}</Link>    
      <Link
      href={{
        pathname: '/[lang]/quartos',
        query: {lang: locale},
      }}
    > {t('quartos')}
    </Link>
      <Link href="/localizacao"> {t('localizacao')}</Link>
      <Link href="/galeria"> {t('galeria')}</Link>
      <Link href="/avaliacoes"> {t('avaliacoes')}</Link>
      <Link href="/como_chegar"> {t('como_chegar')}</Link>
        {locales.map((locale) => (
          <button
          className={styles.button_flags}
          key={locale}
          onClick={() => handleLocaleChange(locale)}>
            <ReactCountryFlag
              countryCode={flag(locale)}
              style={{
                  fontSize: '2em',
              }}
          />
          </button>
        ))}
    </div>
 );
}

export default Header;

// referencia: https://github.dev/elvessousa/next-intl
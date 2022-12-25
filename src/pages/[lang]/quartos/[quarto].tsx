import Footer from '../../../components/Footer/footer';
import Header from '../../../components/Header/header';
import Quarto from '../../../components/Quarto/quarto';
import styles from '../../../../styles/Home.module.css'
import { locales } from '../../../context/LanguageContext';
import { rooms } from '../../../lib/rooms_const';
import changeLanguages from '../../../hooks/changeLanguages';

 export default function Quartos ({locale, quarto}) {
   const quartos = changeLanguages(locale);
  const quartoProps = quartos.filter(room => room.name === quarto.name)[0]

  return(
    <div className={styles.container}>
      <Header/>
      <div className={styles.main}>
        <Quarto quarto={quartoProps} />
      </div>
      <Footer />
    </div>
  )
}

export async function getStaticProps({params}) {
  const cor = params.quarto;
  const quarto = rooms.filter(room => room.name === cor)[0]
  
  return {
    props: {
      quarto,
      locale: params?.lang || 'pt',
    }
  };
};

export async function getStaticPaths() {
  let result = [];
  const paths = () => {
    rooms.map(room => {
        locales.map(local => {
            result.push(
              { params: { lang: local, quarto: room.name } }
            )
        });
    });
    return result;
  }
  
  return {
    paths: paths(),
    fallback: false
  };
};
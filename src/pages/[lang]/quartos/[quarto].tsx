import Footer from '../../../components/Footer/footer';
import Header from '../../../components/Header/header';
import Quarto from '../../../components/Quarto/quarto';
import styles from '../../../../styles/Home.module.css'
import { locales } from '../../../context/LanguageContext';
import { rooms } from '../../../lib/rooms_const';

 export default function Quartos ({quarto}) {
  return(
    <div className={styles.container}>
      <Header/>
      <div className={styles.main}>
        <Quarto quarto={quarto} />
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


export function getStaticPaths() {
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
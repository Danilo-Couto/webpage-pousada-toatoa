import styles from '../../../styles/Home.module.css'
import Footer from '../../components/Footer/footer'
import HeadRooms from '../../components/Head/head_rooms'
import Header from '../../components/Header/header'
import Quartos from '../../components/Quartos/quartos'
import { locales } from '../../context/LanguageContext'
import changeLanguages from '../../hooks/changeLanguages'
import { rooms } from '../../lib/rooms_const'

export default function Home({locale}) {
  const quartos = changeLanguages(locale);

  return (
    <div className={styles.container}>
      <HeadRooms/>
      <Header/>
      <Quartos quartos={quartos}/>
      <Footer />
    </div>
  )
}

export async function getStaticProps(paths) {
  return {
      props: {
        locale: paths.params?.lang || 'pt',
        rooms: rooms
      }
  };
};

export const getStaticPaths = async () => {
  const paths = locales.map(local => {
    return {
      params: {
        lang: local,
      }
    }
  });
        
  return {
    paths,
    fallback: false,
  };
};
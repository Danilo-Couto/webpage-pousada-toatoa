import styles from '../../../styles/Home.module.css'
import Footer from '../../components/Footer/footer'
import HeadRooms from '../../components/Head/head_rooms'
import Header from '../../components/Header/header'
import Quartos from '../../components/Quartos/quartos'
import { rooms } from '../../consts/rooms_const'
import changeLanguages from '../../hooks/changeLanguages'

export default function Home({locale}) {
  const quartos = changeLanguages(locale);
  // console.log(quartos)
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
  return {
    paths: [{ params: { lang: 'pt' } }, { params: { lang: 'en' } }, { params: { lang: 'es' } }],
    fallback: false,
  };
};
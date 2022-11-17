import { useRouter } from 'next/router'
import styles from '../../../styles/Home.module.css'
import Footer from '../../components/Footer/footer'
import HeadRooms from '../../components/Head/head_rooms'
import Header from '../../components/Header/header'
import Quartos from '../../components/Quartos/quartos'
import { rooms } from '../../consts/rooms_const'

export default function Home({quartos}) {
  return (
    <div className={styles.container}>
      <HeadRooms/>
      <Header/>
      <Quartos quartos={quartos}/>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  return {
      props: {
        quartos: rooms
      }
  }
}
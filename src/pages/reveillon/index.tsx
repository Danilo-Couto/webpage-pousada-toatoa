import { useRouter } from 'next/router'
import styles from '../../../styles/Home.module.css'
import Footer from '../../components/Footer/footer'
import HeadRooms from '../../components/Head/head_rooms'
import Header from '../../components/Header/header'
import Reveillon from '../../components/Reveillon/reveillon'
import { rooms } from '../../lib/rooms_const'

export default function Home({quartos}) {
  const {pathname} = useRouter();

  return (
    <div className={styles.container}>
      <HeadRooms/>
      <Header/>
      <Reveillon quartos={quartos}/>
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
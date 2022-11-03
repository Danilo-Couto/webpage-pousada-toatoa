import { useRouter } from 'next/router'
import styles from '../../../styles/Home.module.css'
import Footer from '../../components/Footer/footer'
import Header from '../../components/Header/header'
import Quartos from '../../components/Quartos/quartos'
import { rooms } from '../../consts'

export default function Home({quartos}) {
  return (
    <div className={styles.container}>
      <Header/>
      <Quartos quartos={quartos}/>
      <Footer />
    </div>
  )
}

export async function getStaticProps({params}) {
  console.log(params)
  const quartos = rooms
  return {
      props: {
          quartos:quartos[0]
      }
  }
}
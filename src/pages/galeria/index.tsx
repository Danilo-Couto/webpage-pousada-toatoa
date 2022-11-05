import styles from '../../../styles/Home.module.css'
import Footer from '../../components/Footer/footer'
import Header from '../../components/Header/header'
import Galeria from '../../components/Quartos/quartos'
import { IMAGES } from '../../consts/images'

export default function Home({galeria}) {
  console.log(IMAGES)
  return (
    <div className={styles.container}>
      <Header/>
      <Galeria galeria={galeria}/>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  return {
      props: {
        galeria: IMAGES
      }
  }
}
import Footer from '../../components/Footer/footer'
import Header from '../../components/Header/header'
import styles from '../../../styles/Home.module.css'
import { rooms } from '../../consts/rooms_const'
import Quarto from '../../components/Quarto/quarto'

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

export async function getStaticProps({ params }) {
  const cor = params.quarto;
  const quarto = rooms.filter(room => room.name === cor)[0]
  return {
    props: {
      quarto
    }
  }
}

export function getStaticPaths() {
  const paths = rooms.map(room => {
    const quarto = room.name;
    return {
      params: {
        quarto
      }
    }
  });
  return {
    paths,
    fallback: false
  }
}
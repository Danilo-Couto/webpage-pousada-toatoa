import Image from 'next/image'
import Footer from '../../components/Footer/footer'
import Header from '../../components/Header/header'
import styles from '../../../styles/Home.module.css'
import { rooms } from '../../consts'

export default function Quartos ({quarto}) {
  return(
    <div className={styles.container}>
    <Header/>
        <div className={styles.grid}>
          <div className={styles.main_rooms}>

            <h1>{quarto.title}</h1>
            <h2>{quarto.subtitulo}</h2>
            <p>{quarto.description}</p>
            <p>{quarto.subDescription}</p>
            <ul>
              {quarto.items.map((item, i) => 
              <li key={i}> {item} </li>) 
              }
            </ul>
            <Image
            src={quarto.src}
            alt={quarto.title}
            className={styles.rooms}
            />
          </div>
       </div>
    <Footer />
  </div>
  )
}

export async function getStaticProps({ params }) {
  const cor = params.quarto;
  const quarto = rooms.filter(room => room.name === cor)

  return {
    props: {
      quarto: quarto[0]
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
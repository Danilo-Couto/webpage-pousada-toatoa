import Image from 'next/image'
import { useRouter } from 'next/router'
import Footer from '../../components/Footer/footer'
import Header from '../../components/Header/header'
import styles from '../../../styles/Home.module.css'
import { rooms } from '../../consts'

function Quartos ({quartos}) {
  const router = useRouter()
  const {slug} = router.query
  console.log(rooms[0][slug])
 
  return(
    <div className={styles.container}>
    <Header/>
        <div className={styles.grid}>
          <div className={styles.main_rooms}>

            <h1>{rooms[0][slug].title}</h1>
            <h2>{rooms[0][slug].subtitulo}</h2>
            <p>{rooms[0][slug].description}</p>
            <ul>
              {rooms[0][slug].items.map((item, i) => 
              <li key={i}> {item} </li>) 
              }
            </ul>
            <Image
            src={rooms[0][slug].src}
            alt={rooms[0][slug].title}
            className={styles.rooms}
            />
          </div>
       </div>
    <Footer />
  </div>
  )
}

export default Quartos
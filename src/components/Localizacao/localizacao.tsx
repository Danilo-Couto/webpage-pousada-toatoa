import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {useEffect, useState} from 'react';
import styles from '../../../styles/Home.module.css'
import ButtonDrive from '../Buttons/bookDrive';
import Map from './Map/map';
import location from '../../../public/images/localizacao_pousada_toatoa_pipa.jpg'

function Localizacao() {
  const [showLocation, setShowLocation] = useState(false);
  const {pathname} = useRouter()
  
  useEffect(() => {
    if (pathname !== '/') setShowLocation(true)
  }, [pathname]);
  
  return (
    <div className={styles.main}>
      <h2 className={styles.sub_title}>LOCALIZACAO</h2>
      <h3 className={styles.description}>
        A 50 metros da Praia do Amor e 500 metros do centro de Pipa!
      </h3>
        {showLocation &&
        <p className={styles.description}>
        Estamos muito bem localizados <b>ao lado da natureza e perto do centro</b>, mas isolado do barulho da cidade e agitação das noitadas de Pipa.
        <br/>
        Nossa rua é o <b>único acesso a Praia do Amor</b>.
        <br/>
        Chegando aqui, o recomendado é deixar o carro em nosso estacionamento e <b>fazer tudo a pé</b>: caminhadas, passeios e botecagem.
        <br/>
        Nossos vizinhos são nosso amigos e oferecem todos os serviços complementares a sua estadia: <b>padarias, restaurantes, mercados, farmácias, bancos, lojas e outras conveniências</b>.
        <br/>
        Durante o dia, banhistas, surfistas e sofistas desfilam em nossa rua. Cai a noite e o único som é do das ondas do mar batendo nas falésias. 
      </p>
      }
      <div className={styles.grid}>
        <ButtonDrive/>
        <Link
          className={styles.button_drive}
          href='/como_chegar'
        >COMO CHEGAR</Link>
      </div>
      <div className={styles.grid}>
        <p>Rua Praia do Amor, 48, B, Pipa - RN</p>
        <div className={styles.grid}>
        <Image
          width={2000}
          height={500}
          src={location}
          alt={'localizacao pousada toatoa pipa'}
        />
        {/* <Map /> */}
        </div>
      </div>
    </div>
    );
  }

export default Localizacao;
import Link from 'next/link';
import { useRouter } from 'next/router';
import {useEffect, useState} from 'react';
import styles from '../../../styles/Home.module.css'
import { handleRedirect} from '../../helpers';
import ButtonDrive from '../Buttons/bookDrive';
import Map from './Map/map';

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
        <p>
        Estamos muito bem localizados ao lado da natureza e perto do centro, mas protegidos do barulho da cidade e agitação das noitadas de Pipa.
        Nossa rua é o único acesso a Praia do Amor.
        Chegando aqui, o recomendado é deixar o carro em nosso estacionamento e fazer tudo a pé: caminhadas, passeios e botecagem.
        Nossos vizinhos são nosso amigos e oferecem todos os serviços complementares a sua estadia: padarias, restaurantes, mercados, farmácias, bancos, lojas e outras conveniências.
        Durante o dia, banhistas, surfistas e sofistas desfilam em nossa rua. Cai a noite e o único som é do das ondas do mar batendo nas falésias. 
      </p>
      }
      <div className={styles.grid}>
        <ButtonDrive/>
        <Link className={styles.button_drive}
        href='/como_chegar'
        >COMO CHEGAR</Link>
      </div>
      <div className={styles.grid}>
        <div className={styles.grid}>
        <Map />
        </div>
      </div>
      <p>Rua Praia do Amor, 48, B, Pipa - RN</p>
    </div>
    );
  }

export default Localizacao;
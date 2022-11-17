import styles from '../../../styles/Home.module.css'
import { particulares, taxistas } from '../../consts/como_chegar_const';
import ButtonDrive from '../../components/Buttons/bookDrive';
import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/header';
import HeadGettingHere from '../../components/Head/head_gettinghere';
import Link from 'next/link';
import BlablacarButton from '../../components/Buttons/blablacar';

export default function Home() {
  return (
    <div className={styles.container}>
      <HeadGettingHere/>
      <Header/>
      <div className={styles.main}>
        <h2 className={styles.sub_title}>COMO CHEGAR</h2>
        <h3>DE CARRO</h3>
        <ButtonDrive/>
      <div className={styles.grid_img_room}>
        <div className={styles.getting_there_item}>
          <h3>TÁXI</h3>
          <p>
          A corrida de Táxi do Aeroporto de Natal a Pipa custa cerca de R$ 200 (duzentos reais).
          <br/>
          De Joao Pessoa custa cerca de R$ 300 (trezentos reais)
          </p>
          <h4>Taxistas parceiros (mencione a gente)</h4>
          <ul className={styles.ul_no_bullets}>
          {taxistas.slice(0,3).map((taxista, i)=> ( 
            <li key={i}>{taxista}</li>
          ))}
          </ul>
        </div>
        <div className={styles.getting_there_item}>
          <h3>VAN PARTICULAR</h3>
          <ul className={styles.ul_no_bullets}>
            {particulares.map((p, i)=> ( 
              <li key={i}>{p}</li>
            ))}
          </ul>
        </div>
        <div className={styles.main}>
          <h3>CARONA</h3>
          <p>
          Pegue uma carona com pessoas de confiaça, economize na viagem e ainda faça amizades
          </p>
          <BlablacarButton />
        </div>

        <div className={styles.getting_there_item}>
          <h3>VAN LOCAL (Goianinha-Pipa/ Pipa-Goianinha)</h3>
          <p>
          (84) 99448-9620</p>
          <p>
          Diariamente, das 5h às 0h30 com intervalos de 10 minutos. Saída: frete Mercado Pai e Filho.
          </p>
          <p>
          * Muito usada também para ir para as praias vizinhas, como a Praia do Madeiro, Cacimbinhas, Tibau do Sul e Sibaúma.
          </p>      
        </div>
        <div className={styles.getting_there_item}>
          <h3>MICRO-ONIBUS (Natal - Pipa / Pipa - Natal)
          </h3>
          <p>Com ar-condicionado com saídas da Rodoviária em Natal e/ou em frente da loja de material de construção chamada Paraíso das Construções.
          Valor: R$ 11,50
          </p>
          <h4>Horários NATAL - PIPA</h4>
          <h5> 05:50 - 10:00 - 14:30</h5>
          <h4>Horários PIPA - NATAL</h4>
          <h5> 07:50 - 12:20 - 16:30- 13:30 - 14:30 - 15:50 - 18:20
          </h5>
        </div>
        <div className={styles.getting_there_item}>
          <h3>ONIBUS  (Natal - Pipa / Pipa - Natal)</h3>
          <p>Saindo de Natal (rodoviária) ou da Praia da Pipa (estacionamento). Valor: R$ 15,00
          <br/> 
          Empresa de Ônibus Expresso Oceano: (84) 3311 3300/ (84) 3311-3333
          </p>
          <h4>Horários NATAL - PIPA</h4>
          <h5>Dias de semana</h5>
          06:00 - 07:20 - 08:20 - 09:30 11:00 - 12:00 - 14:00 - 16:00 - 17:00 - 18:10
          <h5>Sábados</h5>
          6:00 - 08:20 - 09:30 - 11:00 - 12:00 - 14:00 - 16:00 - 18:10
          <h5>Domingos e Feriados</h5>
          06:50 - 09:30 - 15:00
          <h4>Horários PIPA - NATAL</h4>
          <h5>Dias de semana</h5>
          05:00 - 06:00 - 07:10 - 10:40- 11:20 - 12:15 - 13:30 - 14:30 - 15:50 - 18:20
          <h5>Sábados</h5>
          05:40 - 07:10 - 10:40 - 11:20 - 13:30 - 14:30 - 15:50
          <h5>Domingos e Feriados</h5>
          07:20 - 09:30 - 15:20
        </div>
      </div>
    </div>
    <Footer/>
  </div>
);
}
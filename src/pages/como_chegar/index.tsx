import styles from '../../../styles/Home.module.css'
import { particulares, taxistas } from '../../consts/como_chegar_const';
import ButtonDrive from '../../components/Buttons/bookDrive';
import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/header';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>
      <div className={styles.main}>
        <h2 className={styles.sub_title}>COMO CHEGAR</h2>
        <h3>DE CARRO</h3>
        <ButtonDrive/>
        <h3>AEROPORTOS</h3>
        <p>
        O Aeroporto de Natal, Aeroporto Governador Aluízio Alves, fica na verdade em São Gonçalo do Amarante, e esta a 116 km de Pipa.
       <br/>
        Já o Aeroporto de Joao Pessoa, Castro Pinto, esta localizado a 141km daqui daqui
       <br/>
        Portanto, nosso ponto de partida será essas cidades
        </p>

        <h3>DE TÁXI</h3>
        <p>
        A corrida de Táxi do Aeroporto a Pipa custa cerca de R$ 200 (duzentos reais).
        <br/>
        De Joao Pessoa custa cerca de R$ 300 (trezentos reais)
        </p>
        <h4>Taxistas parceiros</h4>
        <ul>
        {taxistas.map((taxista, i)=> ( 
          <li key={i}>{taxista}</li>
        ))}
        </ul>
        
        <h3>DE ONIBUS</h3>
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
      
      <h3>DE MICRO-ONIBUS (Natal - Pipa / Pipa - Natal)
      </h3>
      <p>Com ar-condicionado com saídas da Rodoviária em Natal e/ou em frente da loja de material de construção chamada Paraíso das Construções.
      Valor: R$ 11,50
      </p>
      <h4>Horários PIPA - NATAL</h4>
      <h5> 07:50 - 12:20 - 16:30- 13:30 - 14:30 - 15:50 - 18:20
      </h5>
      <h4>Horários NATAL - PIPA</h4>
      <h5> 05:50 - 10:00 - 14:30</h5>

      <h3>DE VAN LOCAL (Goianinha-Pipa/ Pipa-Goianinha)</h3>
      <p>
      Van Local: (84) 99448-9620</p>
      <p>
      Diariamente, das 5h às 0h30 com intervalos de 10 minutos.
      A vans circulam entre Goianinha (saída atrás da igreja) e Pipa, (rua principal/anel viário) passando por Tibau do Sul (Lagoa de Guaraíras) e praia do Madero
      <br/>
      * Muito usada também por aqueles que querem ir para as praias vizinhas sem ir a pé ou usar o carro. Como a Praia do Madeiro, Cacimbinhas, Tibau do Sul e Sibaúma.
      </p>      

      <h3>DE VAN LOCAL (Sibaúma-Pipa/ Pipa-Sibaúma)</h3>
      <p>No terminal ao lado da boate Calangos</p>
      <h4>Horários PIPA-SIBAÚMA</h4>
      <h5> 6:00h / 7:00 / 8:00 / 9:00 / 11:00 / 13:00 / 15:00 / 16:40 / 17:15 / 19:00
    </h5>
    <h4>Horários SIBAÚMA-PIPA</h4>
      <h5> 6:15 / 7:15 / 8:15 / 10:00 / 12:00 / 14:00 / 16:00 / 17:00 / 18:00 / 19:30
    </h5>

    <h3>TRANSFERS PARTICULARES</h3>
      <ul>
        {particulares.map((p, i)=> ( 
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
    <Footer/>
    </div>
  );
}
import styles from '../../../styles/Home.module.css'

function Galeria({galeria}) {
  return (
    <div className={styles.main}>
      <h2 className={styles.sub_title}>
        GALERIA DE FOTOS
      </h2>
      <h3 className={styles.description}>
        Estacionamento - Piscina - Cozinha Compartilhada - Wi-Fi - Chuveiro Externo - Lounge Social com Rede, TV, Sofá e Cafézinho.
      </h3>
      <div className={styles.grid}>
        {galeria.images.map((e, i)=> ( 
          <img
          className={styles.img_galery}
          key={i}
          src={e}
          alt={e.src}
          />
        ))}
      </div>
    </div>
  );
}

export default Galeria;

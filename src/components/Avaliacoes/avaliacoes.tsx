import styles from '../../../styles/Home.module.css'

function Avaliacoes(ratings) {
  return (
    <>
      <h2 className={styles.sub_title}>AVALIAÇÕES</h2>
      <div className={styles.grid}>
        <div>
          {!ratings ? 'ratings' : <p></p>}    
        </div>
      </div>
    </>
    );
}

export default Avaliacoes;

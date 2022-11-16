import Link from "next/link";
import styles from '../../../styles/Home.module.css'


function Burguer({burguer, setBurguer}) {
  return (
    <div 
      className={styles.burguer}
      // open={open}
      onClick={() => setBurguer(!burguer)}
    >

    </div>
 );
}

export default Burguer;

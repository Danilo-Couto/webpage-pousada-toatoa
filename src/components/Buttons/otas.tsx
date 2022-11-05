import styles from '../../../styles/Home.module.css'

export default function OtasButton() {
  return (
    <div className={styles.grid}>
        <a href="https://www.booking.com/hotel/br/hostel-praia-da-pipa.pt-br.html?label=gen173nr-1FCAsoIEIUaG9zdGVsLXByYWlhLWRhLXBpcGFILVgEaCCIAQGYAS24ARjIAQzYAQHoAQH4AQOIAgGoAgS4Atu4gZsGwAIB0gIkYWMzYjM5MzItMmI3YS00YzIyLTk4YWYtYzYxZjY3MzdhNTVl2AIF4AIB&sid=4f4c6f6856e3aef51ff38fff3fbd3ff0&dist=0&keep_landing=1&sb_price_type=total&type=total&" className={styles.card} target="_blank" rel="noreferrer">
            <p> BOOKING</p>
        </a>
        <a href="https://www.airbnb.com.br/users/471750972/listings" className={styles.card} target="_blank" rel="noreferrer">
            <p> AIRBNB</p>
        </a>
        <a href="https://www.expedia.com.br/Tibau-Do-Sul-Hoteis-Pousada-Toa-Toa-Em-Pipa.h87702206.Hotel-Reservas?chkin=2022-11-01&chkout=2022-11-03&x_pwa=1&rfrr=HSR&pwa_ts=1667259733855&referrerUrl=aHR0cHM6Ly93d3cuZXhwZWRpYS5jb20uYnIvSG90ZWwtU2VhcmNo&useRewards=false&rm1=a2&regionId=6084403&destination=Pipa%2C+Tibau+do+Sul%2C+Rio+Grande+do+Norte+%28estado%29%2C+Brasil&destType=CURRENT_LOCATION&selected=87702206&sort=RECOMMENDED&top_dp=186&top_cur=BRL&userIntent=&selectedRoomType=321058070&selectedRatePlan=387645110" className={styles.card} target="_blank" rel="noreferrer">
            <p> EXPEDIA</p>
        </a>
        <a href="https://www.hostelworld.com/pwa/hosteldetails.php/Pousada-Toa-Toa-Em-Pipa/Tibau-do-Sul/315920/?from=2022-11-01&to=2022-11-04&guests=2" className={styles.card} target="_blank" rel="noreferrer">
            <p> HOSTELWORLD</p>
        </a>
    </div>
  );
}

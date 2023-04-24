import styles from "./GlobalSection.module.css";

const GlobalSection = (props) => {
   const { dataIndo } = props;
   
   const { total: confirmed } = dataIndo.indonesia.find(item => item.status === "Positif");
   const { total: recovered} = dataIndo.indonesia.find(item => item.status === "Sembuh");
   const { total: death} = dataIndo.indonesia.find(item => item.status === "Meninggal");

   const formatNumber = (number) => {
      return number >= 100 ? number.toLocaleString() : number;
   }

   return (
      <div className={styles.container}>
         <section className={styles.covid}>
            <h1 className={styles.covid__title}>Indonesia</h1>
            <p className={styles.covid__description}>
               Data Covid Berdasarkan Indonesia
            </p>
            <div className={styles.data}>
               <div className={styles.data__global}>
                  <h4 className={styles.data__title}>Confirmed</h4>
                  <h1 className={styles.data__confirmed}>{formatNumber(confirmed)}</h1>
               </div>
               <div className={styles.data__global}>
                  <h4 className={styles.data__title}>Recovered</h4>
                  <h1 className={styles.data__recovered}>{formatNumber(recovered)}</h1>
               </div>
               <div className={styles.data__global}>
                  <h4 className={styles.data__title}>Death</h4>
                  <h1 className={styles.data__death}>{formatNumber(death)}</h1>
               </div>
            </div>
         </section>
      </div>
   );
}

export default GlobalSection;
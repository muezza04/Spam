import { useEffect, useState } from "react";
import styles from "./GlobalSection.module.css";

const GlobalSection = () => {
   const [covid, setCovid] = useState(null);

   const fetchCovid = async () => {
      try {
         const url = "https://covid-fe-2023.vercel.app/api/global.json";
         const response = await fetch(url);
         const data = await response.json();
         setCovid(data.global);
      } catch (error) {
         console.log(error);
      }
   }

   useEffect(() => {
      fetchCovid();
   }, []);

   const formatNumber = (number) => {
      return number >= 100 ? number.toLocaleString() : number;
   }

   return (
      <div className={styles.container}>
         <section className={styles.covid}>
            <h1 className={styles.covid__title}>Global Situation</h1>
            <p className={styles.covid__description}>
               Data Covid Berdasarkan Indonesia
            </p>
            <div className={styles.data}>
               <div className={styles.data__global}>
                  <h4 className={styles.data__title}>Confirmed</h4>
                  <h1 className={styles.data__confirmed}>{covid && formatNumber(covid.find(item => item.status === "confirmed").total)}</h1>
               </div>
               <div className={styles.data__global}>
                  <h4 className={styles.data__title}>Recovered</h4>
                  <h1 className={styles.data__recovered}>{covid && formatNumber(covid.find(item => item.status === "recovered").total)}</h1>
               </div>
               <div className={styles.data__global}>
                  <h4 className={styles.data__title}>Death</h4>
                  <h1 className={styles.data__death}>{covid && formatNumber(covid.find(item => item.status === "death").total)}</h1>
               </div>
            </div>
         </section>
      </div>
   );
}

export default GlobalSection;

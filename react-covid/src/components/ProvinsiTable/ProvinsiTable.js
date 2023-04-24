import Provinsi from "../Provinsi/Provinsi";
import styles from "./ProvinsiTable.module.css";


const ProvinsiTable = (props) => {
   const { provinces } = props;
   return (
      <div className={styles.container}>
         <section className={styles.provinsi}>
            <h1 className={styles.provinsi__title}>Provinsi</h1>
            <p className={styles.provinsi__description}>
               Data Covid Berdasarkan Indonesia
            </p>
            <div className={styles.table}>
               <table className={styles.table__provinsi}>
                  <thead className={styles.table__title}>
                     <tr>
                        <th>No</th>
                        <th>Provinsi</th>
                        <th>Positif</th>
                        <th>Sembuh</th>
                        <th>Dirawat</th>
                        <th>Meninggal</th>
                     </tr>
                  </thead>
                  <tbody className={styles.table__data}>

                     {provinces.provinces.map((province, index) => (
                        <Provinsi key={province.kota} province={province} no={index + 1} />
                     ))}

                  </tbody>
               </table>
            </div>
         </section>
      </div>
   );
}

export default ProvinsiTable;
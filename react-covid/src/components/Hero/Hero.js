import styles from "./Hero.module.css";
import img from "../../asset/img/hero_img.png"

const Hero = () => {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.hero__left}>
                    <h2 className={styles.hero__title}>COVID  ID</h2>
                    <p className={styles.hero__genre}>
                        Monitoring Perkembangan Covid
                    </p>
                    <p className={styles.hero__description}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit tenetur tempora dolor commodi omnis, repellendus in natus dolore, doloremque minima ad quasi, nulla libero perferendis aperiam sit reiciendis! Suscipit, tenetur.
                    </p>
                    <button className={styles.hero__button}>Vaccine</button>
                </div>
                <div className={styles.hero__right}>
                    <img
                        className={styles.hero__image}
                        src={img} 
                        alt="ImageCovid" 
                    />
                </div>
            </section>
        </div>
    );
}

export default Hero;
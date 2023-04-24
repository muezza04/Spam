import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.container}>
            <footer className={styles.footer}>
                <div>
                    <h1 className={styles.footer__title}>Covid ID</h1>
                    <p className={styles.footer__description}>Developed by Nuzurwan Patri Arja</p>
                </div>
                <div>
                    <ul className={styles.footer__list}>
                        <li>Global</li>
                        <li>Indonesia</li>
                        <li>Provinsi</li>
                        <li>About</li>
                    </ul>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
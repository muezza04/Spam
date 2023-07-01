import { useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <div>
                    <h1 className={styles.navbar__brand}>Covid ID</h1>
                </div>
                <div>
                    <ul className={`${styles.navbar__list} ${showMenu ? styles.show : ""}`}>
                        <li className={styles.navbar__item}>
                            <Link to="/">Global</Link>
                        </li>
                        <li className={styles.navbar__item}>
                            <Link to="/covid/indonesia">Indonesia</Link>
                        </li>
                        <li className={styles.navbar__item}>
                            <Link to="/covid/provinsi">Provinsi</Link>
                        </li>
                        <li className={styles.navbar__item}>
                            <Link to="/covid/about">About</Link>
                        </li>
                    </ul>

                    <div className={styles.menu__toggle}>
                        <input 
                            type="checkbox" 
                            onClick={() => setShowMenu(!showMenu)}
                        />
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
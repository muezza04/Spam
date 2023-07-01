import { useState } from "react";
import StyledNavbar from "./Navbar.styled";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <StyledNavbar>
            <nav>
                <div>
                    <h1>Covid ID</h1>
                </div>
                <div>
                    <ul className={`${styles.navbar__list} ${showMenu ? styles.show : ""}`}>
                        <li>
                            <Link to="/" as="a">Global</Link>
                        </li>
                        <li>
                            <Link to="/covid/indonesia" as="a">Indonesia</Link>
                        </li>
                        <li>
                            <Link to="/covid/provinsi" as="a">Provinsi</Link>
                        </li>
                        <li>
                            <Link to="/covid/about" as="a">About</Link>
                        </li>
                    </ul>

                    <div className="menu__toggle">
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
        </StyledNavbar>
    );
};

export default Navbar;
import styled from "styled-components";

const StyledNavbar = styled.div`
    background-color: #06D6A0;
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 3rem;
    height: 80px;
    color: white;
}

h1 {
    font-size: 2.5rem;
}

ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    margin-right: 2rem;
}

a {
    font-size: 1rem;
    letter-spacing: 1px;
    margin-left: 3.5rem;
    font-weight: bold;
    cursor: pointer;
    transition: color 0.5s;
}

a:hover {
    color: rgb(41, 41, 41);
}

.menu__toggle {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    height: 20px;
    position: relative;
}

.menu__toggle input {
    position: absolute;
    width: 40px;
    height: 27px;
    left: -6px;
    top: -3px;
    opacity: 0;
    cursor: pointer;
    /* Biar maju kedepan */
    z-index: 3;
}

.menu__toggle span {
    display: block;
    width: 28px;
    height: 3px;
    background-color: white;
    border-radius: 3px;
    z-index: 2;
    /* Transisi */
    transition: all 0.5s;
}

/* Hamburger menu animation 
    nth-child yaitu mencari nomor tag keberapa pada class menu__toggle
*/
.menu__toggle span:nth-child(2) {
   transform-origin: 0 0;
}

.menu__toggle span:nth-child(4) {
    transform-origin: 0 100%;
 }

/* Fungsi dari  ~ yaitu target yg akan di modifikasi*/
.menu__toggle input:checked ~ span:nth-child(2) {
    transform: rotate(45deg) translate(-1px, 0);
}

.menu__toggle input:checked ~ span:nth-child(4) {
    transform: rotate(-45deg) translate(-1.5px, 0);
}

.menu__toggle input:checked ~ span:nth-child(3) {
    opacity: 0;
    transform: scale(0);
}

@media (max-width: 768px) {
    nav {
        margin: 0 1rem;
        height: 80px;
        justify-content: space-around;
    }

    a {
        margin-left: 2rem;
    }
}

@media (max-width: 590px) {
    h1 {
        margin-left: 1rem;
    }

    nav {
        justify-content: space-between;
    }

    .menu__toggle {
        display: flex;
    }

    ul {
        display: none;
    }

    .show {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        position: absolute;
        right: 0;
        top: 4rem;
        height: 20vh;
        width: 100%;
        margin: 0;
        background-color: #06D6A0;
        z-index: 1;
        opacity: 0.9;
    }

    a {
        font-size: 1rem;
    }
  }
`;

export default StyledNavbar;
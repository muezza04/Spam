import styled from "styled-components";

const StyledHero = styled.div`
  /* Small Screen */
  margin: 0;
  padding: 4rem 0;
  letter-spacing: 1px;

section {
  display: flex;
  flex-direction: column-reverse;
  text-align: center;
  margin: 0 2rem;
}

.hero__left {
  margin-bottom: 1rem;
}

h2 {
  color: #06D6A0;
  font-size: 2.44rem;
}

.hero__genre {
  letter-spacing: 1px;
  color: #118AB2;
  margin-bottom: 1rem;
  font-size: 1rem;
}

.hero__desc {
  color: #64748B;
}

button {
  margin: 2rem 0;
  padding: 0.6rem 3rem;
  border: none;
  border-radius: 10px;
  background-color: #06D6A0;
  color: white;
  font-weight: bold;
  cursor: pointer;
  letter-spacing: 1px;
  font-size: 1rem;
}

button:hover {
  background-color: #00ffbb;
}

img {
  max-width: 70%;
  height: auto;
  margin-bottom: 2rem;
}

/* Medium Screen */
@media (min-width: 768px) {
  /*
  * Nothing TODO HERE.
  * We haven't styling Hero
  */
}

/* Large Screen */
@media (min-width: 992px) {
    max-width: 1200px;
    margin: 3rem auto;

  section {
    margin: 0 1rem;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    text-align: left;
  }

  .hero__left {
    flex-basis: 40%;
  }

  .hero__right {
    margin-left: 2rem;
    flex-basis: 40%;
  }

  img {
    max-width: 90%;
  }
}
`;

export default StyledHero;
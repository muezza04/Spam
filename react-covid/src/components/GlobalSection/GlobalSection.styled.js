import styled from "styled-components";

const StyledGlobal = styled.div`
  .container {
   background-color: #F8F9FA;
}

.covid {
   display: flex;
   align-items: center;
   flex-direction: column;
}

.covid__title {
   font-size: 3rem;
   margin-top: 3rem;
   color: #06D6A0;
}

.covid__description {
   color: #118AB2;
   letter-spacing: 1px;
}

.data {
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   justify-content: space-around;
   margin: 2rem;
}

.data__global {
   display: flex;
   flex-basis: 30%;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   width: 350px;
   height: 270px;
   background-color: #ffffff;
   margin: 2rem 1rem 2rem 0;
   border-radius: 2rem;
   box-shadow: 0 0.3rem 2px -1px hsl(0, 0%, 83%);
}

.data__title {
   font-size: 2rem;
   color: #073B4C;
   margin-bottom: 0.2rem;
}

.data__global h1 {
   font-size: 3rem;
}

.data__confirmed {
   color: #06D6A0;
}

.data__recovered {
   color: #118AB2;
}

.data__death {
   color: #EF476F;
}

@media (max-width: 768px) {
   .data__global {
      flex-basis: 70%;
   }
}

@media (max-width: 590px) {
   .data__global {
      flex-basis: 80%;
   }
}
`;

export default StyledGlobal;
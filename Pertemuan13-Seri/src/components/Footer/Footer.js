import styled from "styled-components";

const StyledFooter = styled.div`
  /* Small Screen */

  background-color: #f72585;
  padding: 1rem;
  color: #fff;
  text-align: center;

  h2 {
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 1rem;
  }
`;
function Footer() {
  return (
    <StyledFooter>
      <div>
        <footer>
          <h2>Movie App</h2>
          <p>Created by Seri Ani Ritonga</p>
        </footer>
      </div>
    </StyledFooter>
  );
}

export default Footer;

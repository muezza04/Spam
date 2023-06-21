import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNavbar = styled.div`
  /* Small Screen */

  background-color: #f72585;
  padding: 1rem;
  color: #fff;

  nav {
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-size: 2.4rem;
    margin-bottom: 1rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
  }

  li {
    margin-bottom: 1rem;
  }
  link {
    color: #fff;
    text-decoration: none;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    nav {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    h1 {
      margin-bottom: 0;
    }

    ul {
      flex-direction: row;
    }

    li {
      margin: 0 1rem;
    }
  }

  /* Large Screen */
  @media (min-width: 992px) {
    /* 
   * Nothing TODO HERE.
   * We haven't styling Navbar.
   */
  }
`;

// import link dari React Router

function Navbar() {
  return (
    <StyledNavbar>
      <div>
        <nav>
          <div>
            <h1>Movie App</h1>
          </div>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/movie/create">Add Movie</Link>
              </li>
              <li>
                <Link to="/movie/populer">Popular</Link>
              </li>
              <li>
                <Link to="/movie/now">Now playing</Link>
              </li>
              <li>
                <Link to="/movie/top">Top Rated</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </StyledNavbar>
  );
}

export default Navbar;

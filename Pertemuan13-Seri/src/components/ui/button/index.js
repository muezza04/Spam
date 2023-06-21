// import Styled Component

import styled, { css } from "styled-components";

// Membuat variable Button (Component)
// Buat element button dan beri styling
// Styling menggunakan tagged
const Button = styled.button`
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 10px;
  color: #fff;
  background-color: #4361ee;
  cursor: pointer;

  background-color: ${(seri) =>
    seri.theme.colors[seri.variant] || seri.theme.colors["primary"]};

  ${(props) => {
    return (
      props.full &&
      css`
        display: block;
        width: 100%;
      `
    );
  }};

  ${(seri) => seri.theme.ukuran[seri.size] || seri.theme.ukuran["md"]};
`;

export default Button;

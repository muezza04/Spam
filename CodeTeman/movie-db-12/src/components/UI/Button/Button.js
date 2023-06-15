import styled, {css} from "styled-components";


const Button = styled.button`
    border: none;
    border-radius: 10px;
    color: white;
    cursor: pointer;

    //tangkap props variant
    background-color: ${function (props) {
        if (props.variant) {
            return props.theme.colors[props.variant];
        } else {
            return props.theme.colors["primary"];
        }
    }};

    //props full
    ${function(props) {
        return props.full && css`
         width: 75%;
         display: block;
    `}}

    ${function (props) {
        if (props.sm) {
        return css`
            font-size: ${props.theme.buttonSize.sm.fontSize};
            padding: ${props.theme.buttonSize.sm.padding};
        `;
        } else if (props.lg) {
        return css`
            font-size: ${props.theme.buttonSize.lg.fontSize};
            padding: ${props.theme.buttonSize.lg.padding};
        `;
        } else {
        return css`
            font-size: ${props.theme.buttonSize.md.fontSize};
            padding: ${props.theme.buttonSize.md.padding};
        `;
        }
    }};
`;

export default Button;
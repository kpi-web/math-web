import React from 'react';
import styled from "styled-components";

interface ButtonProps extends ButtonStyledProps {
    children: any,
    onClickHandler?: Function,
}

interface ButtonStyledProps {
    type?: any,
}

const ButtonStyled = styled.button<ButtonStyledProps>`
  width: fit-content;
  border-radius: 5px;
`

const Button = ({children, onClickHandler,  ...props}: ButtonProps) => {
    return (
        <ButtonStyled onClick={() => onClickHandler!()} {...props}>
            {children}
        </ButtonStyled>
    );
};

export default Button;

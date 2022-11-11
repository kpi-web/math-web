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

const Button = ({children, ...props}: ButtonProps) => {
    return (
        <ButtonStyled {...props}>
            {children}
        </ButtonStyled>
    );
};

export default Button;

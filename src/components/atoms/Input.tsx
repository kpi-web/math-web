import React from 'react';
import styled from "styled-components";

interface InputProps extends InputStyledProps{
    value: string,
    placeholder?: string,
    type?: string,
    onChangeHandler: Function,
}

interface InputStyledProps {


    height?: string,
    width?: string,
    additionalStyle?: any,
}

const InputStyled = styled.input<InputStyledProps>`
  padding-left: 15px;
  border: 1px solid;
  width: ${props => props.width};
  height: ${props => props.height};
  ${props => props.additionalStyle}
`

const Input = (
    {
        value,
        onChangeHandler,
        ...props
    }: InputProps
) => {
    return (
        <InputStyled
            value={value}
            onChange={(e: any) => onChangeHandler(e.target.value)}
            {...props}
        />
    );
};

export default Input;

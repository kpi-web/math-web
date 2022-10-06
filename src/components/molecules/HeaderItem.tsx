import React from 'react';
import Text from "../atoms/Text";
import styled from "styled-components";

interface HeaderItem {
    title: string,
}

const HeaderItemContainer = styled.div`
  width: fit-content;
  color: #ef7f59;
  transition: 0.5s;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
    transition: 0.5s;
  }
`

const HeaderItem = (
    {
        title
    }: HeaderItem
) => {
    return (
        <HeaderItemContainer>
            <Text>{title}</Text>
        </HeaderItemContainer>
    );
};

export default HeaderItem;

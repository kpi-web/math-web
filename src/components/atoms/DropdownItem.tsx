import React from 'react';
import Flex from "./Flex";
import Text from "./Text";
import styled from "styled-components";

interface DropdownItem {
    title: string,
    action: Function,
}


const Style = styled(Flex)`
  margin: 0;
  background-color: white;
  width: fit-content;
  height: fit-content;
  padding: 5px;
  transition: 0.5s;
  &:hover{
    color: #ef7f59;
    transition: 0.5s;
    cursor: pointer;
  }
`
const DropdownItem = (
    {
        title,
        action,
    }: DropdownItem
) => {
    return (
        <Style
            onClick={() => action()}
        >
            <Text margin={'0'}>
                {title}
            </Text>
        </Style>
    );
};

export default DropdownItem;

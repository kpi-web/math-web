import React, {useState} from 'react';
import Text from "../atoms/Text";
import styled from "styled-components";
import HeaderDropdown from "./HeaderDropdown";
import Flex from "../atoms/Flex";
import {dropDownItemsConfig} from "../../types";


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
interface HeaderItem {
    title: string,
    onClick: Function,
    dropdownConfig?: dropDownItemsConfig[]
}
const HeaderItem = (
    {
        title,
        dropdownConfig
    }: HeaderItem
) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(true)
    return (
        <Flex
            flexDirection={'column'}
        >
            <HeaderItemContainer onClick={(e: any) => {
                e.stopPropagation()
                setIsDropdownOpen(!isDropdownOpen)
            }}>
                <Text>{title}</Text>
            </HeaderItemContainer>
            {
                dropdownConfig && isDropdownOpen &&
                <HeaderDropdown dropDownVisibilityHandler={setIsDropdownOpen} dropdownConfig={dropdownConfig} />
            }
        </Flex>


    );
};

export default HeaderItem;

import React, {useEffect} from 'react';
import Flex from "../atoms/Flex";
import {dropDownItemsConfig} from "../../types";
import DropdownItem from "../atoms/DropdownItem";

interface HeaderDropdown {
    dropdownConfig: dropDownItemsConfig[],
    dropDownVisibilityHandler: Function
}

const HeaderDropdown = (
    {
        dropdownConfig,
        dropDownVisibilityHandler
    }: HeaderDropdown
) => {
    const bodyEventListener = () => dropDownVisibilityHandler(false)
    useEffect(() => {
        document.body.addEventListener('click', bodyEventListener)
        return () => document.body.removeEventListener('click', bodyEventListener)
    }, [])
    return (
        <Flex
            flexDirection={'column'}
            backgroundColor={'white'}
            borderRadius={'5px'}
            padding={'5px'}
            width={'100px'}
        >
            {
                dropdownConfig.map(({title, action}, index) =>
                    <DropdownItem key={index} title={title} action={action} />
                )
            }
        </Flex>
    );
};

export default HeaderDropdown;

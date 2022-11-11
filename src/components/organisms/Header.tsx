import React from 'react';
import styled from "styled-components";
import HeaderItem from "../molecules/HeaderItem";

const HeaderStyled = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  width: 70%;
  flex-grow: 1;
  justify-content: space-around;
`

const headerItems = [
    {
        title: 'Головна',
        onClickHandler: () => {}
    },
    {
        title: 'Про нас',
        onClickHandler: () => {}
    },
    {
        title: 'Вартість',
        onClickHandler: () => {}
    },
    {
        title: 'Навчання',
        onClickHandler: () => {}
    },
    {
        title: 'Контакти',
        onClickHandler: () => {}
    },
    {
        title: 'Особистий кабінет',
        onClickHandler: () => console.log('kek'),
        dropdownConfig: [
            {
                title: 'Вхід',
                action: () => console.log("Вхід"),
            },
            {
                title: 'Реєстрація',
                action: () => console.log("Реєстрація")
            }
        ]
    }
]

const Header = () => {
    return (
        <HeaderStyled>
            {
                headerItems.map(({title, onClickHandler, dropdownConfig}, index) =>
                    <HeaderItem dropdownConfig={dropdownConfig} onClick={onClickHandler} title={title} key={index}/>)
            }
        </HeaderStyled>

    );
};

export default Header;

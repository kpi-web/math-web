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

const titles = ["Головна", "Про нас", "Вартість", "Навчання", "Контакти", "Особистий кабінет"]

const Header = () => {
    return (
        <HeaderStyled>
            {
                titles.map((title, index) => <HeaderItem title={title} key={index}/>)
            }
        </HeaderStyled>
    );
};

export default Header;

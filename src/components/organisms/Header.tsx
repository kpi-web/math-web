import React from 'react';
import styled from "styled-components";
import HeaderItem from "../molecules/HeaderItem";

const HeaderStyled = styled.div`
  display: flex;
  width: 70%;
  background-color: beige;
  flex-grow: 1;
  padding: 20px;
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

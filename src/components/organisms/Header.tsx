import React from 'react';
import styled from "styled-components";
import HeaderItem from "../molecules/HeaderItem";
import Flex from "../atoms/Flex";
import app from "../../firebase";
import { signOut, getAuth } from "firebase/auth";

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



const Header = ({name}: {name: string}) => {

    const auth = getAuth(app)

    const out = async () => {
        try{
            await signOut(auth)
        }
        catch (e: any){
            console.log(e.message)
        }
    }
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
                    title: 'Вихід',
                    action: () => out(),
                }
            ]
        },

    ]
    return (
        <Flex>
            <HeaderStyled>
                {
                    headerItems.concat([{title: name, onClickHandler: () => {}}]).map(({title, onClickHandler, dropdownConfig}, index) =>
                        <HeaderItem dropdownConfig={dropdownConfig} onClick={onClickHandler} title={title} key={index}/>)
                }

            </HeaderStyled>
        </Flex>

    );
};

export default Header;

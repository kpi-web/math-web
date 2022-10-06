import React from 'react';
import Flex from "../atoms/Flex";
import Logo from "../atoms/Logo";
import footer from '../../assets/footer.png'

const Footer = () => {
    return (
        <Flex
            height={'400px'}
        >
            <Logo src={footer} alt={'footer'} width={'100%'}/>
        </Flex>
    );
};

export default Footer;

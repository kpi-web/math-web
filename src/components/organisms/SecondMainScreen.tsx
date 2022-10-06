import React from 'react';
import Flex from "../atoms/Flex";
import Logo from "../atoms/Logo";
import secondScreen from '../../assets/second-screen.png'

const SecondMainScreen = () => {
    return (
        <Flex
            height={'800px'}
            width={'100%'}
        >
            <Logo src={secondScreen} alt={'second-screen'} width={'95%'}/>
        </Flex>
    );
};

export default SecondMainScreen;

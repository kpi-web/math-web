import React from 'react';
import Flex from "../atoms/Flex";
import Logo from "../atoms/Logo";
import thirdScreen from '../../assets/third-screen.png'

const ThirdMainScreen = () => {
    return (
        <Flex
            height={'800px'}
            width={'100%'}
        >
            <Logo src={thirdScreen} alt={'third-screen'} width={'95%'}/>
        </Flex>
    );
};

export default ThirdMainScreen;

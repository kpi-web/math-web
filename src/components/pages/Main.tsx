import React from 'react';
import Flex from "../atoms/Flex";
import Header from "../organisms/Header";
import FirstMainScreen from "../organisms/FirstMainScreen";
import SecondMainScreen from "../organisms/SecondMainScreen";
import ThirdMainScreen from "../organisms/ThirdMainScreen";

const Main = () => {
    return (
        <Flex
            flexDirection={'column'}
            height={'fit-content'}
            width={'100vw'}
        >
            <Header />
            <FirstMainScreen />
            <SecondMainScreen />
            <ThirdMainScreen />


        </Flex>
    );
};

export default Main;

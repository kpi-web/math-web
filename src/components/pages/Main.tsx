import React from 'react';
import Flex from "../atoms/Flex";
import Header from "../organisms/Header";
import FirstMainScreen from "../organisms/FirstMainScreen";
import SecondMainScreen from "../organisms/SecondMainScreen";

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
            <Flex
            >
                sd
            </Flex>


        </Flex>
    );
};

export default Main;

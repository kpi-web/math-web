import React from 'react';
import Flex from "../atoms/Flex";
import Header from "../organisms/Header";
import FirstMainScreen from "../organisms/FirstMainScreen";

const Main = () => {
    return (
        <Flex
            flexDirection={'column'}
            height={'fit-content'}
            width={'100vw'}
        >
            <Header />
            <FirstMainScreen />
            <Flex
                height={'800px'}
            >
            </Flex>
            <Flex
            >
                sd
            </Flex>


        </Flex>
    );
};

export default Main;

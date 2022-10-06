import React from 'react';
import Flex from "../atoms/Flex";
import Logo from "../atoms/Logo";
import Text from "../atoms/Text";
import people from '../../assets/people.png'

const FirstMainScreen = () => {
    return (
        <Flex
            backgroundColor={'#2e325d'}
            justifyContent={'flex-start'}
            alignItems={'center'}
            height={'500px'}
            width={'100%'}
        >
            <Flex

                justifyContent={'center'}
                alignItems={'center'}
                width={'50%'}
                flexDirection={'column'}
            >
                <Text
                    fontSize={'48px'}
                    color={'white'}
                    fontWeight={'800'}
                    margin={'0'}
                >
                    Математика
                </Text>
                <Text
                    fontSize={'24px'}
                    color={'#ef7f59'}
                    fontWeight={'800'}
                    margin={'0'}
                >
                    онлайн
                </Text>
            </Flex>
            <Flex
                justifyContent={'center'}
            >
                <Logo src={people} alt={'kek'} height={'50%'} width={'50%'}/>
            </Flex>
        </Flex>
    );
};

export default FirstMainScreen;

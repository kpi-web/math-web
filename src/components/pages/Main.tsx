import React, {useEffect, useState} from 'react';
import Flex from "../atoms/Flex";
import Header from "../organisms/Header";
import FirstMainScreen from "../organisms/FirstMainScreen";
import SecondMainScreen from "../organisms/SecondMainScreen";
import ThirdMainScreen from "../organisms/ThirdMainScreen";
import Footer from "../organisms/Footer";
import { onAuthStateChanged, signOut, getAuth } from "firebase/auth";
import {useNavigate} from "react-router-dom";
import app from "../../firebase";

const Main = () => {
    const [email, setEmail] = useState('')
    const navigate = useNavigate()
    const auth = getAuth(app)
    useEffect(() => {
        onAuthStateChanged(auth, (user: any) => {
            if (!user){
                navigate('/signin')
            }
            else{
                setEmail(user.email)
                console.log(user)
            }
        })
    }, [])
    return (
        <Flex
            flexDirection={'column'}
            height={'fit-content'}
            width={'100vw'}
        >
            <Header name={email} />
            <FirstMainScreen />
            <SecondMainScreen />
            <ThirdMainScreen />
            <Footer />
        </Flex>
    );
};

export default Main;

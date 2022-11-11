import React, {useMemo} from 'react';
import Input from "../atoms/Input";
import Flex from "../atoms/Flex";
import {SignInUp} from "../../interfaces";
import {css} from "styled-components";
import Button from "../atoms/Button";
import {useLocation} from "react-router-dom";

const inputsStyle = css`
  border: 1px solid grey;
  border-radius: 5px;
  width: 130px;
`


const SignUpInTemplate = ({date, setDate, email, setEmail, password, setPassword, confirmPassword, setConfirmPassword, handler}: SignInUp) => {
    const {pathname} = useLocation()
    const isSignup = useMemo(() => pathname === '/signup',[])
    return (
        <Flex
            flexDirection={'column'}
            height={'100vh'}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <form onSubmit={(event) => {
                event.preventDefault()
                handler()
            }}>
                <Flex
                    flexDirection={'column'}
                    rowGap={'5px'}
                >
                    <Input placeholder={'dd.mm.yyyy'} value={date!} onChangeHandler={setDate!} additionalStyle={inputsStyle}/>
                    <Input placeholder={'Email'} value={email} onChangeHandler={setEmail} type={'email'} additionalStyle={inputsStyle}/>
                    <Input placeholder={'Пароль'} value={password} onChangeHandler={setPassword} type={'password'} additionalStyle={inputsStyle}/>
                    <Input
                        placeholder={'Підтвердити пароль'}
                        value={confirmPassword!}
                        onChangeHandler={setConfirmPassword!}
                        type={'password'}
                        additionalStyle={inputsStyle}
                    />
                </Flex>
                <Button type={'submit'}>{isSignup ? 'Sign up' : 'Sign in'}</Button>
            </form>
        </Flex>
    );
};

export default SignUpInTemplate;

import React, {useMemo} from 'react';
import Input from "../atoms/Input";
import Flex from "../atoms/Flex";
import {SignInUp} from "../../interfaces";
import {css} from "styled-components";
import Button from "../atoms/Button";
import {useLocation, useNavigate} from "react-router-dom";

const inputsStyle = css`
  border: 1px solid grey;
  border-radius: 5px;
  width: 130px;
`


const SignUpInTemplate = ({date, setDate, email, setEmail, password, setPassword, confirmPassword, setConfirmPassword, handler}: SignInUp) => {
    const {pathname} = useLocation()
    const isSignup = useMemo(() => pathname === '/signup',[])
    const navigate = useNavigate()
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
                    {   isSignup &&
                        <Input placeholder={'dd.mm.yyyy'} value={date!} onChangeHandler={setDate!} additionalStyle={inputsStyle}/>
                    }
                    <Input placeholder={'Email'} value={email} onChangeHandler={setEmail} type={'email'} additionalStyle={inputsStyle}/>
                    <Input placeholder={'Пароль'} value={password} onChangeHandler={setPassword} type={'password'} additionalStyle={inputsStyle}/>
                    {   isSignup &&
                        <Input
                            placeholder={'Підтвердити пароль'}
                            value={confirmPassword!}
                            onChangeHandler={setConfirmPassword!}
                            type={'password'}
                            additionalStyle={inputsStyle}
                        />
                    }
                </Flex>
                <Flex width={'100%'} justifyContent={'center'} marginTop={'15px'}>
                    <Button type={'submit'}>{isSignup ? 'Sign up' : 'Sign in'}</Button>
                </Flex>
            </form>
            <Button onClickHandler={() => navigate(isSignup ? '/signin' : '/signup')}>{isSignup ? 'Go to Sign in' : 'Go to Signup'}</Button>
        </Flex>
    );
};

export default SignUpInTemplate;

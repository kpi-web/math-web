import React, {useState} from 'react';
import SignUpInTemplate from "../templates/SignUpInTemplate";
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import {useNavigate} from "react-router-dom";
import app from "../../firebase";

const dateRegexp = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/

const SignUp = () => {
    const [date, setDate] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const navigate = useNavigate()
    const auth = getAuth(app)
    const signUp = async () => {
        if (!date.match(dateRegexp)) alert('Введіть дату правильно!')
        else if (password !== confirmPassword) {
            alert('Passwords are not equal');
        }
        else if (email) {
            try {
                await createUserWithEmailAndPassword(auth, email, password);
                alert('Registration successful');
                navigate('/');
            } catch (e: any) {
                switch (e.code) {
                    case 'auth/email-already-in-use':
                        alert('User is registered!');
                        break;

                    case 'auth/invalid-email':
                        alert('Wrong email');
                        break;

                    case 'auth/weak-password':
                        alert('Weak password');
                        break;
                    default:
                        console.log(e);
                        alert('Unexpected error');
                }
            }
        } else {
            alert('Enter an email!');
        }
    }

    return (
        <SignUpInTemplate
            date={date}
            setDate={setDate}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
            handler={signUp}
        />
    );
};

export default SignUp;

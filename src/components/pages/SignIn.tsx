import React, {useState} from 'react';
import SignUpInTemplate from "../templates/SignUpInTemplate";
import {signInWithEmailAndPassword, getAuth, }  from 'firebase/auth';
import {useNavigate} from "react-router-dom";
import app from "../../firebase";
const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const auth = getAuth(app)
    const signIn = async () => {
        if (email && password ){
            try{
                await signInWithEmailAndPassword(auth, email, password)
                navigate('/')

            }
            catch (e: any){
                console.log(e.code)
                switch (e.code) {
                    case 'auth/wrong-password':
                        return alert(`${e.code}`)
                    default:
                        alert('Unexpected error')
                }

            }
        }
        else{
            alert('Fill all fields!')
        }
    }
    return (
        <SignUpInTemplate email={email} setEmail={setEmail} password={password} setPassword={setPassword} handler={signIn} />
    );
};

export default SignIn;

import React, {useState} from 'react';
import SignUpInTemplate from "../templates/SignUpInTemplate";

const SignUp = () => {
    const [date, setDate] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
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
        />
    );
};

export default SignUp;

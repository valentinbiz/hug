import React from 'react';

import './SignInSignUpStyle.scss';

import SignIn from '../../Components/SignIn/SignInComponent';
import SignUp from '../../Components/SignUp/SignUpComponent';

const SignInSignUp = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>
);

export default SignInSignUp;
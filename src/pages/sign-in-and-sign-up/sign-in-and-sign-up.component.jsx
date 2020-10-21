import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import FormInput from '../../components/form-input/form-input.component';


import './sign-in-and-sign-up.styles.scss';


const SignInSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
            <SignIn/>
            <FormInput/>
    </div>
)


export default SignInSignUpPage;
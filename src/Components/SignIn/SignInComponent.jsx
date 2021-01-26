import React from 'react';

import FormInput from '../FormInput/FormInputComponent';
import CustomButton from '../CustomButton/CustomButtonComponent';

import {auth, signInWithGoogle} from '../../Firebase/Firebase.utils';

import './SignInStyle.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''})
        } catch(error) {
            console.error();
        }

        
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({ [name]: value})
    }

    render () {
        return (
            <div className='sign-in' >
                <h2> I already have an account</h2>
                <span> Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                     name='email'
                     value={this.state.email}
                     handleChange={this.handleChange}
                     label='Email'
                     required />
                    <FormInput
                     name='password'
                     value={this.state.password}
                     handleChange={this.handleChange}
                     label='Password'
                     required />
                    <div className='buttons'>
                    <CustomButton type='submit'> Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn> {''}Sign In with Google {''}</CustomButton>
                    </div>
                </form>

            </div>
        )
    }
}

export default SignIn;
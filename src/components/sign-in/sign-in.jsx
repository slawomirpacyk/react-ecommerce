import React, { Component } from 'react';

import FormInput from '../../components/form-input/form-input';
import CustomButton from '../../components/custom-button/custom-button';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.scss';

class SignIn extends Component {
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
            this.setState({
                email: '',
                password: '',
            })
        } catch(error) {
            console.log(error);
        }
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        })
    }

    render () {
        return (
            <div className="sign-in">
                <h2>Posiadasz już konto?</h2>
                <span>Zaloguj się przy pomocy swojego adres e-mail i hasła</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="email" 
                        name="email" 
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        label="E-mail"
                        required
                    />
                    <FormInput 
                        type="password"
                        name="password"
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        label="Hasło"
                        required
                    />
                    <div className='buttons'>
                        <CustomButton type="submit">Zaloguj się</CustomButton>
                        <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>Zaloguj się przez Google</CustomButton>    
                    </div>                    
                </form>
            </div>
        )
    }
}

export default SignIn;
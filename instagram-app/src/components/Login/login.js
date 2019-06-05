import React from 'react';

import './login.scss'

class Login extends React.Component{
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    login = e => {
        localStorage.setItem('isLoggedIn', JSON.stringify({
            username: this.state.username,
            password: this.state.password
        }))
        this.setState({
            username: '',
            password: ''
        })
    }

    handleLoginInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render(){
        return(
            <form className='login-form' onSubmit={this.login}>
                <input
                className='username-field'
                placeholder='Username'
                onChange={this.handleLoginInput}
                name='username'
                />
                <input
                className='password-field'
                placeholder='Password'
                onChange={this.handleLoginInput}
                name='password'
                />
                <button>Login</button>
            </form>
        )
    }
}

export default Login;
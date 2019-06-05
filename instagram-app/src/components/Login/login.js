import React from 'react';

class Login {
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
    }

    handleLoginInput = e => {
        this.setState({
            [event.target.name]: event.target.value
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
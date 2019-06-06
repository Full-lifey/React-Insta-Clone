import React from 'react';
import { Button, Form, Input} from 'reactstrap'

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
            <Form className='login-form' onSubmit={this.login}>
                <Input
                type='username'
                className='username-field'
                placeholder='Username'
                onChange={this.handleLoginInput}
                name='username'
                />
                <Input
                type='password'
                className='password-field'
                placeholder='Password'
                onChange={this.handleLoginInput}
                name='password'
                />
                <Button color='primary' size='lg'>Login</Button>
            </Form>
        )
    }
}

export default Login;
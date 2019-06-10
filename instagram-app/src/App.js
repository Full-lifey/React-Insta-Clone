import React from 'react';
import './App.scss';
import withAuthenticate from './components/authentication/withauthenticate'
import PostsPage from './components/PostContainer/PostsPage'
import LoginPage from './components/Login/login'

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(LoginPage)

const App = () => <ComponentFromWithAuthenticate />

export default App;

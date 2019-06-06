import React from "react";

const withAuthenticate = PostsPage => LoginPage =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        loggedIn: undefined
      };
    }

    logOut = () => {
        localStorage.removeItem('isLoggedIn')
        this.setState({
            loggedIn: false
        })
    }

    componentDidMount(){
        if(JSON.parse(localStorage.getItem('isLoggedIn'))) {
            this.setState({
                loggedIn: true
            });
        } else {
            this.setState({
                loggedIn: false
            })
        }
    }

    render() {
        return(
        this.state.loggedIn === true ?
            <PostsPage logOut={this.logOut}/>:        
            <LoginPage />
        )
    }
  };

export default withAuthenticate;

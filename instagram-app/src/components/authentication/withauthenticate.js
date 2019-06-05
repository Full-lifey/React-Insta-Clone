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
        if (this.state.loggedIn === true){
            return <PostsPage logOut={this.logOut}/>;
        } else {
            return <LoginPage />
        }
    }
  };

export default withAuthenticate;

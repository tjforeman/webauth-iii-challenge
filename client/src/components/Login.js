import React from 'react';
import axios from 'axios';
import { Button, Form, Input,} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Login extends React.Component {
    constructor() {
      super();
      this.state = {
        username: "",
        password: "",
  
        
      };
    }

      render() {
        return (
          <div>
            <h2>Log In</h2>
            <Form>
            <label htmlFor="username" />
              <Input
                type="text"
                placeholder="enter a username"
                name="username"
                onChange={this.changeHandler}
                value={this.state.username}
              />
              <label htmlFor="password" />
              <Input
                type="password"
                placeholder="enter a password"
                onChange={this.changeHandler}
                name="password"
                value={this.state.password}
              />
              <Button color="primary" onClick={this.submitForm}>
                Log In
              </Button>
            </Form>
          </div>
        );
      }

      changeHandler = e =>{
        e.preventDefault()
        this.setState({
        [e.target.name]: e.target.value
        })
    }

  submitForm = event => {
    event.preventDefault();
    const endpoint = 'http://localhost:8000/api/login';
    axios
      .post(endpoint, this.state)
      .then(res => {
        localStorage.setItem('jwt', res.data.token);
      })
      .catch(err => {
        console.error('Login Error', err);
      });
  };
}

export default Login;

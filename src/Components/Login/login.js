import React, { Component } from "react";
import styled from "styled-components";

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginWrapper = styled.div`
  width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const ErrorMessage = styled.p`
  color: red;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errorMessage: "",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // You can add your authentication logic here.
    // For a simple example, we'll just show an error message.
    if (
      this.state.email === "user@example.com" &&
      this.state.password === "password"
    ) {
      // Successful login
      console.log("Login successful");
    } else {
      // Failed login
      this.setState({ errorMessage: "Invalid email or password" });
    }
  };

  render() {
    return (
      <PageWrapper>
        <LoginWrapper>
          <h2>Login</h2>
          {this.state.errorMessage && (
            <ErrorMessage>{this.state.errorMessage}</ErrorMessage>
          )}
          <LoginForm onSubmit={this.handleSubmit}>
            <div>
              <Label>Email:</Label>
              <Input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div>
              <Label>Password:</Label>
              <Input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div>
              <SubmitButton type="submit">Login</SubmitButton>
            </div>
          </LoginForm>
        </LoginWrapper>
      </PageWrapper>
    );
  }
}

export default Login;

import React from 'react';
import styled from 'styled-components';
import { Button, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import { Title } from './Components';

const HintText = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 12px;
  font-style: italic;
  background-color: #ffffff;
  padding: 5px;
  border-radius: 5px;
`;

const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  /* background-image: url('https://media1.tenor.com/images/6bf658d3c1df80990a0817b417b78155/tenor.gif?itemid=10503435');
  background-size: cover;
  background-repeat: no-repeat; */
  padding: 20px;
  @media screen and (max-width: 600px) {
    background-image: none;
  }
`;

const StyledForm = styled.form`
  width: 30%;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const StyledFormGroup = styled(FormGroup)`
  text-align: left;
`;

const StyledFormLabel = styled(FormLabel)`
  font-weight: bold;
  font-size: 12px;
`;

const ErrorText = styled.div`
  color: red;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 12px;
  padding: 5px;
  display: ${props => (props.isShow ? 'block' : 'none')};
`;

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isValidated: false
    };
  }

  handleUsernameChange = _value => {
    this.setState({
      username: _value,
      isValidated: false
    });
  };

  handlePasswordChange = _value => {
    this.setState({
      password: _value,
      isValidated: false
    });
  };

  handleOnSubmit = e => {
    const { username, password } = this.state;
    if (username === 'abc' && password === 'abc') {
      this.props.history.push('/home');
    } else {
      e.preventDefault();
      e.stopPropagation();
    }
    this.setState({ isValidated: true });
  };

  render() {
    const { username, password, isValidated } = this.state;
    return (
      <LoginWrapper>
        <Title>Hack the North 2020</Title>
        <StyledForm onSubmit={this.handleOnSubmit} validated>
          <StyledFormGroup controlId="email" bsSize="large">
            <StyledFormLabel>Username</StyledFormLabel>
            <FormControl
              autoFocus
              type="username"
              value={username}
              placeholder="username"
              required
              onChange={e => this.handleUsernameChange(e.target.value)}
            />
            <ErrorText isShow={isValidated}>
              Please enter a valid username
            </ErrorText>
          </StyledFormGroup>
          <StyledFormGroup controlId="password" bsSize="large">
            <StyledFormLabel>Password</StyledFormLabel>
            <FormControl
              type="password"
              placeholder="password"
              value={password}
              required
              onChange={e => this.handlePasswordChange(e.target.value)}
            />
            <ErrorText isShow={isValidated}>
              Please enter a valid password
            </ErrorText>
          </StyledFormGroup>
          <Button block bsSize="large" type="submit">
            Login
          </Button>
        </StyledForm>
        <HintText>Hint: use "abc" as the password and username</HintText>
      </LoginWrapper>
    );
  }
}

import React from 'react';
import styled from 'styled-components';
import { Button, FormGroup, FormControl, FormLabel } from 'react-bootstrap';

export const Title = styled.div`
  font-size: 20px;
  margin-bottom: 20px;
  color: white;
`;

const HintText = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 12px;
  font-style: italic;
  color: white;
`;

const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  position: absolute;
  z-index: 3;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  padding: 20px;
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
  color: white;
`;

const ErrorText = styled.div`
  color: red;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 12px;
  padding: 5px;
  display: ${props => (props.isShow ? 'block' : 'none')};
`;

const Overlay = styled.div`
  background-color: rgb(0, 0, 0, 0.6);
  position: absolute;
  z-index: 2;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  opacity: 0.8;
`;

const BackgroundVideo = styled.div`
  background-image: url('https://media1.tenor.com/images/6bf658d3c1df80990a0817b417b78155/tenor.gif?itemid=10503435');
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;

const StyledButton = styled(Button)`
  margin-top: 50px;
  margin-bottom: 10px;
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
      <>
        <Overlay />
        <BackgroundVideo />
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
            <StyledButton block bsSize="large" type="submit">
              Login
            </StyledButton>
          </StyledForm>
          <HintText>Hint: use "abc" as the password and username</HintText>
        </LoginWrapper>
      </>
    );
  }
}

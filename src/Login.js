import React from 'react';
import styled from 'styled-components';
import { Button, FormGroup, FormControl, FormLabel } from 'react-bootstrap';

const Title = styled.div`
  font-size: 20px;
  margin-bottom: 50px;
`;

const HintText = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 12px;
  font-style: italic;
`;

const AppWrapper = styled.div`
  text-align: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const StyledForm = styled.form`
  width: 30%;
`;

const StyledFormGroup = styled(FormGroup)`
  text-align: left;
`;

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isValidForm: false
    };
  }

  handleUsernameChange = _value => {
    this.setState({
      username: _value,
      isValidForm: _value !== '' && this.state.password !== ''
    });
  };

  handlePasswordChange = _value => {
    this.setState({
      password: _value,
      isValidForm: this.state.username !== '' && _value !== ''
    });
  };

  handleOnSubmit = () => {
    const { username, password } = this.state;
    console.log(username, password);
    if (username === 'abc' && password === 'abc') {
      this.props.history.push('/home');
    } else {
      // invalid login
    }
  };

  render() {
    const { username, password, isValidForm } = this.state;
    return (
      <AppWrapper>
        <LoginWrapper>
          <Title>Hack the North 2020</Title>
          <StyledForm onSubmit={this.handleOnSubmit}>
            <StyledFormGroup controlId="email" bsSize="large">
              <FormLabel>Username</FormLabel>
              <FormControl
                autoFocus
                type="username"
                value={username}
                onChange={e => this.handleUsernameChange(e.target.value)}
              />
            </StyledFormGroup>
            <StyledFormGroup controlId="password" bsSize="large">
              <FormLabel>Password</FormLabel>
              <FormControl
                type="password"
                value={password}
                onChange={e => this.handlePasswordChange(e.target.value)}
              />
            </StyledFormGroup>
            <Button block bsSize="large" disabled={!isValidForm} type="submit">
              Login
            </Button>
          </StyledForm>
          <HintText>Hint: use "abc" as the password and username</HintText>
        </LoginWrapper>
      </AppWrapper>
    );
  }
}

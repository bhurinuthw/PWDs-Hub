import React, { Component } from 'react'

import { Box, FormField, TextInput, Button, Heading, Text, Image } from 'grommet';
import { Login as Signin } from 'grommet-icons';
import { Link, withRouter } from 'react-router-dom'

import { connect } from 'react-redux'
import { userActions } from 'actions';

import { styles } from './style'
import { colors } from 'theme';
import Spinner from 'react-spinkit'

class Login extends Component {
  constructor(props) {
    super(props);

    if (localStorage.getItem('user')) {
      this.props.history.push('/home');
    }

    this.state = {
      email: '',
      password: '',
    };
  }

  onChangeusername = (e) => {
    this.setState({ email: e.target.value });
  }
  onChangePassword = (e) => {
    this.setState({ password: e.target.value });
  }

  onLogin = () => {
    const { email, password } = this.state;
    this.props.dispatch(userActions.login(email, password));
  }

  onForgot = () => {
    this.props.history.push('/reset_password');
  }

  onSignup = () => {
    this.props.history.push('/register');
  }

  renderSigninButton() {
    if (this.props.loggingIn) {
      return (
        <Box align="center" pad='small'>
          <Spinner
            fadeIn="quarter"
            name="line-scale" color={colors.brand} />
        </Box>
      )
    } else {
      return (
        < Button primary icon={< Signin />} label="Sign in" onClick={this.onLogin} />
      );
    }
  }

  render() {
    return (
      <Box flex direction="column" align="center" justify="center" fill='vertical'>
        <Box responsive={false} pad='medium' style={{ width: 350 }}
          round={{ size: 'small' }}
          animation='fadeIn'>
          {/* <Image height="150px" src={require('assets/images/autoweb_icon.png')} fit="contain" /> */}
          <Text weight="bold" size="large">PWDs.hub</Text>
          <FormField >
            <TextInput
              ref='usernameInput'
              autoFocus
              placeholder="Username"
              value={this.state.email}
              onChange={this.onChangeusername} />
          </FormField>
          <FormField>
            <TextInput
              placeholder="Password"
              type="password"
              value={this.state.password}
              onChange={this.onChangePassword} />
          </FormField>

          {this.renderSigninButton()}

          <Box justify='center' direction='row' align='center' pad='small'>
            <Button hoverIndicator onClick={this.onForgot}>
              <Text size='small'>Forgot password? /</Text>
            </Button>
            <Button hoverIndicator style={{ marginLeft: 5 }} onClick={this.onSignup}>
              <Text weight='bold' size='small'> Sign up</Text>
            </Button>
          </Box>
        </Box>
      </Box>
    )
  }
}

function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
  return {
    loggingIn
  };
}

export default withRouter(connect(mapStateToProps)(Login));

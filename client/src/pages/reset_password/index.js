import React, { Component } from 'react'
import { Box, FormField, TextInput, Button, Image } from 'grommet';
import { Refresh } from 'grommet-icons';

export default class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
  }

  onChangeusername = (e) => {
    this.setState({ username: e.target.value });
  }

  onResetPassword = () => {
    // this.props.history.replace('/login');
    // Todos
  }

  render() {
    return (
      <Box flex direction="column" align="center" justify="center" fill='vertical'>
        <Box pad='medium' style={{ width: 350 }}
          round={{ size: 'small' }}
          animation='fadeIn'>
          <Image height="150px" src={require('assets/images/autoweb_icon.png')} fit="contain" />
          <FormField >
            <TextInput
              ref='usernameInput'
              autoFocus
              placeholder="Enter your username"
              value={this.state.username}
              onChange={this.onChangeusername} />
          </FormField>
          <Box>
            <Button primary icon={<Refresh />} label="Reset your password" onClick={this.onResetPassword} />
          </Box>
        </Box>
      </Box>
    )
  }
}

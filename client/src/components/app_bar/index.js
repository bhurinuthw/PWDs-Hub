import React, { Component } from 'react'
import { Box, Text, DropButton, } from 'grommet'
import { User, Notification, Menu } from 'grommet-icons'

import { connect } from 'react-redux'

import DropContent from 'components/dropdown_content'
import PlainButton from 'components/plain_button'

import { userActions } from 'actions'

import Media from 'react-media'

const iconColor = "#ffffff"

class AppBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      openNotificationPanel: undefined,
      openAccountPanel: undefined,
      username: 'Phat Thaveepholcharoen'
    }
  }

  onCloseDropdown = () => {
    this.setState({
      openNotificationPanel: false,
      openAccountPanel: false
    });

    setTimeout(() => this.setState({
      openNotificationPanel: undefined,
      openAccountPanel: undefined
    }), 1);
  };

  onSelectAccountPanel = (name) => {
    switch (name) {
      case 'Logout': this.props.dispatch(userActions.logout()); break;
    }
  }

  onSelectNotification = (name) => {
    switch (name) {
      case 'Notification#1': this.props.dispatch(userActions.logout());
    }
  }

  renderForSignedin() {
    const { user } = this.props;
    if (user == null) return null;
    else {
      const { openNotificationPanel, openAccountPanel } = this.state;
      return (
        <Box direction="row" gap='small'>
          <DropButton
            dropAlign={{ top: "bottom", right: "right" }}
            open={openNotificationPanel}
            onClose={() => this.setState({ openNotificationPanel: undefined })}
            dropContent={
              <DropContent
                title="Notifications"
                items={[{ label: 'Notification#1' }, { label: 'Notification#2' }, { label: 'Notification#3' }]}
                onSelect={this.onSelectNotification}
                onClose={this.onCloseDropdown} />}
          >
            <PlainButton icon={<Notification color={iconColor} />} />
          </DropButton>

          <DropButton
            dropAlign={{ top: "bottom", right: "right" }}
            open={openAccountPanel}
            onClose={() => this.setState({ openAccountPanel: undefined })}
            dropContent={
              <DropContent
                title={user.username}
                items={[{ label: 'Account Setting' }, { label: 'Logout' }]}
                onSelect={this.onSelectAccountPanel}
                onClose={this.onCloseDropdown} />}
          >

            <Media query="(min-width: 599px)">
              {matches =>
                matches ? (
                  <PlainButton icon={<User color={iconColor} />} label={user.username} />
                ) : (
                    <PlainButton icon={<User color={iconColor} />} />
                  )
              }
            </Media>

          </DropButton>
        </Box>);
    }
  }

  render() {
    return (
      <Box
        style={style}
        responsive={false}
        direction="row"
        align="center"
        justify="between"
        pad="small"
        background='brand'
        height="60px"
      >
        <Box onClick={() => { }} direction="row" align="center" gap="small" >
          <PlainButton icon={<Menu color={iconColor} />} onClick={() => this.props.onToggleMenu()} />
          <Text size="xlarge" color='light-0' weight="bold">AutoWeb</Text>
        </Box>
        {this.renderForSignedin()}

      </Box>
    )
  }
}

const style = {
  position: 'fixed',
  width: '100%',
  zIndex: 1,
}

const mapStateToProps = (state) => {
  return {
    user: state.authentication.user,
  }
}

export default connect(mapStateToProps)(AppBar);
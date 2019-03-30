import React, { Component } from 'react'

import { Box, Text, DropButton } from 'grommet'
import { FormDown } from 'grommet-icons'
import Avatar from 'react-avatar';
import DropContent from 'components/dropdown_content'
import PlainButton from 'components/plain_button'


export default class index extends Component {

  constructor(props) {
    super(props)

    this.state = {
      openDropdown: false
    }
  }

  onCloseDropdown = () => {
    this.setState({
      openDropdown: false,
    });
  };


  onSelectAction = (name, index) => {
    alert(name)
  }


  render() {
    const { name, description, imgUrl } = this.props
    const { openDropdown } = this.state
    return (
      <Box direction="row" gap="small" margin='xsmall'
        onClick={() => this.props.onClick()}
        background="light-0" pad="medium" round={{ size: 'small' }}>
        <Avatar size="48px" name={name} round src={imgUrl} />
        <Box direction="row" flex justify="between">
          <Box flex direction="column" justify="between">
            <Text >{name}</Text>
            <Text size="small" color="dark-6">{description}</Text>
          </Box>
        </Box>
      </Box>
    )
  }
}




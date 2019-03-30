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
    const { name, description, imgUrl, department, province, delay } = this.props
    const { openDropdown } = this.state
    return (
      <Box direction="row" gap="small" margin='xsmall' style={{cursor: 'pointer'}}
        responsive={false} animation={{ type: 'fadeIn', delay: delay * 100 }}
        onClick={() => this.props.onClick()}
        background="light-0" pad="medium" round={{ size: 'small' }}>
        <Avatar size="100" name={name} round
          src={"http://3.bp.blogspot.com/-XAhmg1VyIfw/UI3w3NV38KI/AAAAAAAAGdg/Psm7-bjGRc8/s1600/Wheelchair%2B%25E0%25B9%2584%25E0%25B8%259F%25E0%25B8%259F%25E0%25B9%2589%25E0%25B8%25B2.jpg"} />
        <Box direction="row" flex justify="between">
          <Box flex direction="column" justify="between">
            <Text size="medium" weight="bold">{name}</Text>
            <Text size="small" color="dark-6">{department}</Text>
            <Text size="small" color="dark-6">{province}</Text>
          </Box>
        </Box>
      </Box>
    )
  }
}




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
    const { name, type } = this.props
    const { openDropdown } = this.state
    return (
      <Box direction="row" gap="small" margin='xsmall'
        background="light-0" pad="xsmall" round={{ size: 'small' }}>
        <Avatar size="48px" name={name} round />
        <Box direction="row" flex justify="between">
          <Box flex direction="column" justify="between">
            <Text >{name}</Text>
            <Text size="small" color="dark-6">{type}</Text>
          </Box>
          <DropButton
            dropAlign={{ top: "bottom", right: "right" }}
            open={openDropdown}
            onClose={() => this.setState({ openDropdown: false })}
            dropContent={
              <DropContent
                title="Actions"
                items={[{ label: 'Edit Permission' }, { label: 'Remove' }]}
                onSelect={this.onSelectAction}
                onClose={this.onCloseDropdown} />}
          >
            <PlainButton icon={<FormDown />}
              onClick={() => this.setState({ openDropdown: true })} />
          </DropButton>
        </Box>
      </Box>
    )
  }
}




import React, { Component } from 'react'

import { Box, Text, Accordion, AccordionPanel, TextInput, Button } from 'grommet'
import { FormDown } from 'grommet-icons'
import Avatar from 'react-avatar';
import DropContent from 'components/dropdown_content'
import PlainButton from 'components/plain_button'

import { Scrollbars } from 'react-custom-scrollbars'

export default class index extends Component {

  state = {
    activeIndex: [0],
    selectedServiceMethod: null,
  };

  renderPanelHeader = (name, info) => {
    return (
      <Box pad="small">
        <Box direction="row" justify="between">
          <Text size="large" weight="bold">{name}</Text>
          <PlainButton icon={<FormDown />} />
        </Box>
        <Text>{info}</Text>
      </Box>
    )
  };

  renderListOfMethods = (service) => {
    const { id, name, info, methods } = service;
    const serviceId = id;
    const views = methods.map((method, index) =>
      <Box key={index} background="light-1">
        <Button fill hoverIndicator onClick={() => this.props.onSelectServiceMethod({ serviceId, name, info, method })}>
          <Box pad='small'>
            <Text >{method.name}</Text>
          </Box>
        </Button>
      </Box>)
    return views;
  }

  renderServiceItem = () => {
    const { services } = this.props;
    const views = services.map((item, index) =>
      <AccordionPanel
        key={index}
        header={this.renderPanelHeader(item.name, item.info)}
      >
        {this.renderListOfMethods(item)}
      </AccordionPanel>)

    return views;
  }

  render() {
    return (
      <Scrollbars autoHeightMax={360} autoHeight autoHide>
        <Accordion
          style={{ overflow: 'hidden' }}
          onActive={newActiveIndex => this.setState({ activeIndex: newActiveIndex })}
        >
          {this.renderServiceItem()}
        </Accordion>
      </Scrollbars>
    );
  }
}




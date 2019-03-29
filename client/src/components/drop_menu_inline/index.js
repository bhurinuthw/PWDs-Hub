import React, { Component } from 'react'

import { Box } from 'grommet'

import { Transition, config } from 'react-spring'

import PlainButton from 'components/plain_button'

export default class DropMenuInline extends Component {

  render() {
    const { showMenuBar } = this.props;
    return (
      <Transition
        items={showMenuBar}
        from={{ height: 0, opacity: 0 }}
        enter={{ height: 'auto', opacity: 1 }}
        leave={{ height: 0, opacity: 0 }}
        config={config.wobbly}>
        {toggle =>
          toggle
            ? props => <Box style={{ ...props, ...style }} pad="medium" background="secondary" fill="horizontal" >
              <Box>
                <PlainButton label="My Flows" onClick={() => this.props.onSelectMenu('/my_flows')} />
                <PlainButton label="My Team" onClick={() => this.props.onSelectMenu('/my_team')} />
                <PlainButton label="Setting" onClick={() => this.props.onSelectMenu('/setting')} />
              </Box>
            </Box>
            : null
        }
      </Transition>
    )
  }

  toggleExpand = (e) => {
    this.setState({
      isExpand: !this.state.isExpand,
    });
  }


}

const style = { position: 'fixed', top: 60, zIndex: 10, }
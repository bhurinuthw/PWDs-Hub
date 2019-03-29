import React, { Component } from 'react'

import {
  Box, Button,
  Heading,
  Tabs,
  Tab,
} from 'grommet';

import { Add } from 'grommet-icons';
import { Row, Col } from 'react-flexbox-grid'
import { global } from 'style';
import { colors } from 'theme'

import FlowItem from 'components/flow_item'

import { myFlows } from './mockup'
import { workflowActions } from 'actions';

import { connect } from 'react-redux';

import Spinner from 'react-spinkit';

class MyFlows extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTabIndex: 0,
      myFlows: myFlows,
    }
  }

  componentDidMount = () => {
    this.props.dispatch(workflowActions.getMyFlows());
  }


  onCreateFlow = () => {
    const { match } = this.props
    this.props.history.push(match.url + '/create/add_information');
  }

  onActiveTab = index => this.setState({ activeTabIndex: index });

  onSelectFlow = flow => {
    const { history, match, dispatch, workflowMyFlows } = this.props;
    const { myFlows } = workflowMyFlows;
    const currentFlow = myFlows.find((item) => item.id == flow.id);
    dispatch(workflowActions.setCurrentFlow(currentFlow));
    history.push(match.url + '/' + flow.id);
  }

  renderFlows = () => {
    const { workflowMyFlows } = this.props;
    const { myFlows, loadingMyFlows } = workflowMyFlows;

    if (loadingMyFlows) {
      return (
        <Box fill="horizontal" justify="center" align="center" margin={{ top: 'large' }}>
          <Spinner
            fadeIn="quarter"
            name="line-scale"
            color={colors.brand} />
        </Box>
      );
    }
    return myFlows.map((item, index) =>
      <Col key={index} lg={4} md={4} sm={12} xs={12}>
        <FlowItem
          delay={index}
          onSelectFlow={() => { this.onSelectFlow(item) }}
          name={item.name}
          description={item.description}
          owner={item.user_id} />
      </Col>
    )
  }

  render() {
    return (
      <div style={global.mainContainer}>
        <Box pad={{ horizontal: 'medium' }}>
          <Row>
            <Col lg={8} sm={8} xs={12}>
              <Box direction="row" align="center">
                <Heading size='small' margin={{ right: 'medium' }}>My Flows</Heading>
                <Tabs activeIndex={this.state.activeTabIndex} onActive={this.onActiveTab}>
                  <Tab title="Active" />
                  <Tab title="Stopped" />
                </Tabs>
              </Box>
            </Col>

            <Col lg={4} sm={4} xs={12}>
              <Box direction="row" align="center" fill justify="end">
                <Button label="New Flow" primary icon={<Add />} color="accent-1" onClick={() => this.onCreateFlow()} />
              </Box>
            </Col>
          </Row>
        </Box>

        <Box pad={{ bottom: 'large' }}>
          <Row >
            {this.renderFlows()}
          </Row>
        </Box>


      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    workflowMyFlows: state.workflowMyFlows,
  }
}

export default connect(mapStateToProps)(MyFlows);
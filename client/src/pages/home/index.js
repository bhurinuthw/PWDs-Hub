import React, { Component } from 'react'

import { global, FillParent } from 'style'

import AppBar from 'components/app_bar';
import DropMenuInline from 'components/drop_menu_inline'
import SideBar from 'components/sidebar';

import { Button, Box, Text, Heading } from 'grommet';

import NotFound from 'pages/not_found'
import MyFlows from 'pages/my_flows';

import ImageUploadExample from 'pages/add_activity';

import { Route, Switch } from 'react-router-dom'

import Media from 'react-media'
import { Row, Col } from 'react-flexbox-grid';

import { history } from '_helpers';

import PwdFilter from 'components/pwd_filter'

class Home extends Component {
  render() {
    return (
      <div style={global.mainContainer}>
        <Box pad={{ horizontal: 'medium' }}>
          <PwdFilter />
          <Row>
            <Col lg={8} sm={8} xs={12}>
              {/* <Box direction="row" align="center">
              <Heading size='small' margin={{ right: 'medium' }}>My Flows</Heading>
              <Tabs activeIndex={this.state.activeTabIndex} onActive={this.onActiveTab}>
                <Tab title="Active" />
                <Tab title="Stopped" />
              </Tabs>
            </Box> */}
            </Col>

            <Col lg={4} sm={4} xs={12}>
              {/* <Box direction="row" align="center" fill justify="end">
              <Button label="New Flow" primary icon={<Add />} color="accent-1" onClick={() => this.onCreateFlow()} />
            </Box> */}
            </Col>
          </Row>
        </Box>
      </div>);
  }
}

export default class index extends Component {
  state = {
    showMenuBar: false,
  }

  toggleMenubar = (e) => {
    this.setState({ showMenuBar: !this.state.showMenuBar });
  }

  navigateTo = (pathName) => {
    history.push(pathName);
    this.toggleMenubar();
  }

  renderRoutes = () => {
    const { match } = this.props;
    return (
      <div style={global.globalContainer}>
        <Switch>
          <Route exact path={match.url} component={Home} />
          <Route exact path={match.url + "/my_flows"} component={MyFlows} />
          <Route exact path={match.url + "/test_image"} component={ImageUploadExample} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }


  render() {
    const { showMenuBar } = this.state;
    return (
      <Box flex fill="vertical">
        <AppBar {...this.props} onToggleMenu={this.toggleMenubar} />
        <Media query="(min-width: 599px)">
          {matches =>
            matches ? (
              <FillParent>
                <SideBar showMenuBar={showMenuBar}
                  onSelectMenu={(pathName) => this.navigateTo(pathName)} {...this.props} />
                {this.renderRoutes()}
              </FillParent>
            ) : (
                <FillParent>
                  <DropMenuInline showMenuBar={showMenuBar}
                    onSelectMenu={(pathName) => this.navigateTo(pathName)} {...this.props} />
                  {this.renderRoutes()}
                </FillParent>
              )
          }
        </Media>
      </Box >
    )
  }
}

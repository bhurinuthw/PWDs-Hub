import React, { Component } from 'react'

import { global, FillParent } from 'style'

import AppBar from 'components/app_bar';
import DropMenuInline from 'components/drop_menu_inline'
import SideBar from 'components/sidebar';

import { Button, Box, Text, Heading } from 'grommet';

import NotFound from 'pages/not_found';
import Timeline from 'pages/timeline';

import ImageUploadExample from 'pages/add_activity';

import { Route, Switch } from 'react-router-dom'

import Media from 'react-media'
import { Row, Col } from 'react-flexbox-grid';

import { history } from '_helpers';

import PwdFilter from 'components/pwd_filter';
import PwdItem from 'components/collaborator_item';
import { pwds } from './mockup'

class Home extends Component {

  navigateToProfile = (uid) => {
    const { history } = this.props;
    history.push('/home/timeline/' + uid);
  }


  renderPwds = () => {
    return pwds.map((item, index) =>
      <Col lg={6} sm={6} xs={12} key={index}>
        <PwdItem
          onClick={() => this.navigateToProfile("1")}
          name={item.name} description={item.description}
          imgUrl={item.imgUrl} />
      </Col>)
  }


  render() {
    return (
      <div style={global.mainContainer}>
        <Box pad={{ horizontal: 'medium', vertical: 'medium' }} gap="small">
          <PwdFilter />
          <Box margin={{ top: 'small' }}>
            <Row>
              {/* <Col lg={8} sm={8} xs={12}>
              <PwdItem />
            </Col> */}
              {this.renderPwds()}
            </Row>
          </Box>
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
          {/* <Route exact path={match.url + "/my_flows"} component={MyFlows} /> */}
          <Route exact path={match.url + "/timeline/:uid"} component={Timeline} />
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

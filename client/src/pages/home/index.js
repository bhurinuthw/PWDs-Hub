import React, { Component } from 'react'

import { global, FillParent } from 'style'

import AppBar from 'components/app_bar';
import DropMenuInline from 'components/drop_menu_inline'
import SideBar from 'components/sidebar';

import { Button, Box, Text } from 'grommet';

import NotFound from 'pages/not_found'
import MyFlows from 'pages/my_flows';

import { Route, Switch } from 'react-router-dom'

import Media from 'react-media'

import { history } from '_helpers';

export default class Home extends Component {
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
          <Route exact path={match.url + "/my_flows"} component={MyFlows} />
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

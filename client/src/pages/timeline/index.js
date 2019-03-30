import React, { Component } from 'react'

import {
  Box, Button,
  Heading,
  Tabs,
  Tab,
  Text, Image,
  Paragraph,
  Layer,
  FormField,
  TextInput,
  TextArea,
} from 'grommet';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { Clock, Checkmark } from 'grommet-icons';
import { Row, Col } from 'react-flexbox-grid'
import { global } from 'style';
import { colors } from 'theme';

import { Scrollbars } from 'react-custom-scrollbars'

import Avatar from 'react-avatar';

import ActivityDialog from 'components/activity_dialog';

import { activityActions } from 'actions'
import { connect } from 'react-redux';

import { timelineItems as activities } from './mockup';
import axios from 'axios';
import { globalConstants } from '_constants';


class Timeline extends Component {

  state = {
    firstName: 'Phat',
    lastName: 'Thaveepholcharoen',
    activities: activities,
    isPwd: true,
    isSameDepartment: true,
    showConfirmDialog: false,
    indexToVerify: null,
    currentUser: null,
  }

  componentDidMount = () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.setState({ currentUser: currentUser });
  }

  onAddNewEvent = () => {
    this.props.dispatch(activityActions.toggleActivityDialog());
  }

  onEditProfile = () => {

  }

  onVerifyEvent = (index) => {

    this.setState({
      showConfirmDialog: true,
      indexToVerify: index
    });
  }

  onConfirmValidateEvent = (indexToVerify) => {
    const { activities } = this.state;
    activities[indexToVerify].verified = true;
    this.setState({ activities, showConfirmDialog: false });
  }


  renderValidateEvent = () => {
    const { showConfirmDialog, indexToVerify } = this.state
    return (showConfirmDialog &&
      <Layer
        onEsc={this.onColseDialog}
        onClickOutside={this.onColseDialog}>
        <Box pad="medium" gap="small" width="500px" direction="column">
          <Heading level={2} margin="none">
            ยืนยันกิจกรรมนี้
        </Heading>
          <Box direction="row" justify="end" align="center" gap="small">
            <Button label="Ok" primary
              onClick={() => this.onConfirmValidateEvent(indexToVerify)} />
            <Button label="Close"
              onClick={() => this.setState({ showConfirmDialog: false, indexToVerify: null })} />
          </Box>

        </Box>
      </Layer>)
  }

  renderUserProperties = () => {
    const { currentUser } = this.state;
    if (currentUser == null) return;
    return (
      <Box style={{ wordWrap: 'break-word' }}>
        <p >{currentUser.description}
        </p>
      </Box>
    );
  }

  renderIconAndName = () => {
    const { currentUser } = this.state;
    if (currentUser != null) {
      return (
        <Box direction="row" gap="small" align="center" margin={{ bottom: 'small' }}>
          <Box overflow="hidden" round>
            <Avatar size="48px" name={this.state.firstName}
              round src={currentUser.img_url} />

            {/* <Image height="150px" src={require('assets/images/autoweb_icon.png')} fit="contain" /> */}
          </Box>
          <Text size="large" weight="bold">
            {currentUser.name + "  " + currentUser.surname}
          </Text>
        </Box>
      );
    }
  }

  renderTimelineItems = () => {
    const { activities, isSameDepartment } = this.state;
    return activities.map((item, index) =>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date={item.date}
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<Clock color="#fff" />}
      >
        <Box pad={{ vertical: 'medium' }}>

          <Box pad={{ vertical: 'medium' }}>
            <Image height="150px" src={item.imageUrl} fit="contain" />
          </Box>

          <h3 className="vertical-timeline-element-title">{item.title}</h3>
          <h4 className="vertical-timeline-element-subtitle">{item.description}</h4>
          <Paragraph>
            {item.description}
          </Paragraph>
          {isSameDepartment && (
            <div style={{ position: 'absolute', right: 20, top: 20, }}>
              {item.verified == true ?
                <Box border={{ color: "#509137" }} pad="xsmall"
                  round={{ size: 'small' }}>
                  <Text size="small" color="#509137">ยืนยันแล้ว</Text>
                </Box> :
                <Box border={{ color: "#F3608D" }} pad="xsmall"
                  round={{ size: 'small' }}>
                  <Text size="small" color="#F3608D">รอการยืนยัน</Text>
                </Box>}

            </div>)
          }
        </Box>

      </VerticalTimelineElement>)
  }

  render() {
    return (
      <div style={global.mainContainer}>
        <ActivityDialog />
        {this.renderValidateEvent()}
        <Box direction="row" gap="medium" pad="medium">
          <Box style={{ display: 'flex', flex: 5, flexDirection: 'column' }}>
            <VerticalTimeline>
              {this.renderTimelineItems()}
            </VerticalTimeline>
          </Box>
          <Box style={{ display: 'flex', flex: 2, flexDirection: 'column' }}>

            <Box
              round={{ size: 'small' }}
              gap="small"
              pad="medium"
              background="light-0">

              {this.renderIconAndName()}
              {this.renderUserProperties()}
              <Button label="เพิ่มผลงาน" color="accent-3" onClick={this.onAddNewEvent} />
              <Button label="แก้ไขข้อมูล" color="accent-3" onClick={this.onEditProfile} />

              {/* <Box pad="medium">
                <Text>description...........................................</Text>
              </Box> */}

            </Box>

          </Box>

        </Box>


      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authentication: state.authentication,
  }
}

export default connect(mapStateToProps)(Timeline);
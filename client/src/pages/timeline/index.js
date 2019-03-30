import React, { Component } from 'react'

import {
  Box, Button,
  Heading,
  Tabs,
  Tab,
  Text, Image,
  Paragraph
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

import { timelineItems } from './mockup';

class Timeline extends Component {

  state = {
    firstName: 'Phat',
    lastName: 'Thaveepholcharoen',
    timelineItems: timelineItems,
    isPwd: true,
    isSameDepartment: true,
  }

  onAddNewEvent = () => {
    this.props.dispatch(activityActions.toggleActivityDialog());
  }

  onEditProfile = () => {

  }

  renderUserProperties = () => {
    return (
      <Box style={{ wordWrap: 'break-word' }}>
        <p >This is my description bra bra bra.
        </p>

      </Box>
    );
  }

  renderIconAndName = () => {
    return (
      <Box direction="row" gap="small" align="center" margin={{ bottom: 'medium' }}>
        <Box overflow="hidden" round>
          <Avatar size="48px" name={this.state.firstName}
            round src={require('assets/images/autoweb_icon.png')} />

          {/* <Image height="150px" src={require('assets/images/autoweb_icon.png')} fit="contain" /> */}
        </Box>
        <Text size="large" weight="bold">
          {this.state.firstName + "  " + this.state.lastName}
        </Text>
      </Box>
    );
  }


  renderTimelineItems = () => {
    const { timelineItems, isDepartment } = this.state;
    return timelineItems.map((item, index) =>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date={item.date}
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<Clock color="#fff" />}
      >
        <h3 className="vertical-timeline-element-title">{item.title}</h3>
        <h4 className="vertical-timeline-element-subtitle">{item.description}</h4>
        <Paragraph>
          {item.description}
        </Paragraph>
        {isDepartment && (
          <div style={{ position: 'absolute', right: 20, bottom: 20, }}>
            <Button label="Verify" color="accent-5" icon={<Checkmark />} onClick={() => { }} />
          </div>)
        }
      </VerticalTimelineElement>)
  }

  render() {
    return (
      <div style={global.mainContainer}>
        <ActivityDialog />
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
              <Button label="เพิ่มผลงาน" color="accent-3" onClick={this.onAddNewEvent} />
              <Button label="แก้ไขข้อมูล" color="accent-3" onClick={this.onEditProfile} />
              {this.renderUserProperties()}

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

// const mapStateToProps = (state) => {
//   return {
//     workflowMyFlows: state.workflowMyFlows,
//   }
// }

export default connect()(Timeline);
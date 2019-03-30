import React, { Component } from 'react'

import {
  Box, Button,
  Heading,
  Tabs,
  Tab,
  Text, Image,
} from 'grommet';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { Add } from 'grommet-icons';
import { Row, Col } from 'react-flexbox-grid'
import { global } from 'style';
import { colors } from 'theme';

import { Scrollbars } from 'react-custom-scrollbars'

import Avatar from 'react-avatar';

import ActivityDialog from 'components/activity_dialog';

import { activityActions } from 'actions'
import { connect } from 'react-redux';


class Timeline extends Component {

  state = {
    firstName: 'Phat',
    lastName: 'Thaveepholcharoen',
    isPwd: true,
  }

  onAddNewEvent = () => {
    this.props.dispatch(activityActions.toggleActivityDialog());
  }


  render() {
    return (
      <div style={global.mainContainer}>
        <ActivityDialog />
        <Box direction="row" gap="medium" pad={{ vertical: 'medium' }}>
          <Box style={{ display: 'flex', flex: 5, flexDirection: 'column' }}>
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2011 - present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<Add />}
              >
                <h3 className="vertical-timeline-element-title">Creative Director</h3>
                <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                <p>
                  Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2010 - 2011"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<Add />}
              >
                <h3 className="vertical-timeline-element-title">Art Director</h3>
                <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                <p>
                  Creative Direction, User Experience, Visual Design, SEO, Online Marketing
    </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2008 - 2010"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<Add />}
              >
                <h3 className="vertical-timeline-element-title">Web Designer</h3>
                <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                <p>
                  User Experience, Visual Design
    </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2006 - 2008"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<Add />}
              >
                <h3 className="vertical-timeline-element-title">Web Designer</h3>
                <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                <p>
                  User Experience, Visual Design
    </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="April 2013"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<Add />}
              >
                <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
                <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                <p>
                  Strategy, Social Media
    </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="November 2012"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<Add />}
              >
                <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                <p>
                  Creative Direction, User Experience, Visual Design
    </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2002 - 2006"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<Add />}
              >
                <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
                <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                <p>
                  Creative Direction, Visual Design
    </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                icon={<Add />}
              />
            </VerticalTimeline>
          </Box>
          <Box style={{ display: 'flex', flex: 2, flexDirection: 'column' }}>

            <Box round={{ size: 'small' }} gap="small"
              pad={{ horizontal: 'medium', vertical: 'small' }}
              background="light-0">
              <Box direction="row" gap="small" align="center">
                <Box overflow="hidden" round>
                  <Avatar size="48px" name={this.state.firstName}
                    round src={require('assets/images/autoweb_icon.png')} />

                  {/* <Image height="150px" src={require('assets/images/autoweb_icon.png')} fit="contain" /> */}
                </Box>
                <Text size="large" weight="bold">
                  {this.state.firstName + "  " + this.state.lastName}
                </Text>
              </Box>

              <Button label="เพิ่มผลงาน" color="accent-3" onClick={this.onAddNewEvent} />

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
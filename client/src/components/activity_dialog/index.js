import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import {
  Heading, Text, Box, Button,
  Layer, TextInput, FormField, TextArea,
} from 'grommet'

import { activityActions } from 'actions';

export class index extends Component {

  state = {
    eventName: '',
    eventDescription: '',
  }

  onColseDialog = () => {
    this.props.dispatch(activityActions.toggleActivityDialog());
  }

  onChangeEventName = (event) => {
    this.setState({ eventName: event.target.value });
  }
  onChangeEventDescription = (event) => {
    this.setState({ eventDescription: event.target.value });
  }
  onAddNewEvent = () => {

    this.props.dispatch(activityActions.toggleActivityDialog());
  }


  render() {
    const { activity } = this.props;
    return (
      <Fragment>
        {activity.showActivityDialog && (
          <Layer
            onEsc={this.onColseDialog}
            onClickOutside={this.onColseDialog}>
            <Box pad="medium" gap="small" width="500px" direction="column">
              <Heading level={2} margin="none">
                เพิ่มผลงาน
              </Heading>

              <Box gap="small">
                <FormField>
                  <TextInput
                    placeholder="ชื่อกิจกรรม"
                    value={this.state.eventName}
                    onChange={this.onChangeEventName} />
                </FormField>
                <FormField>
                  <TextArea
                    placeholder="คำอธิบาย"
                    value={this.state.eventDescription}
                    onChange={this.onChangeEventDescription} />
                </FormField>
              </Box>

              <Box direction="row" justify="end" align="center" gap="small">
                <Button label="Ok" primary onClick={this.onAddNewEvent} />
                <Button label="Close" onClick={this.onColseDialog} />
              </Box>

            </Box>
          </Layer>
        )}
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  activity: state.activity,
})

export default connect(mapStateToProps)(index);

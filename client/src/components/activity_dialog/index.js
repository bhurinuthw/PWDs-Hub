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

  onChangeFile = (e) => {
    let files = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      console.log("file data: ", e.target.result)
    }

    // const url = "http://127.0.0.1:8000/api/service"
    // const formData = { file: e.target.result }
    // return post(url.formData)
    //   .then(response => console.log("result ", response)).catch((err) => alert(err))
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
                <FormField>
                  <input type="file" name="file" onChange={(e) => this.onChangeFile(e)} />
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

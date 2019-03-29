import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import { Heading, Box, Button, Layer } from 'grommet'

import { workflowActions } from 'actions';

import 'flatpickr/dist/themes/light.css'
import './index.css';
import Flatpickr from 'react-flatpickr'


export class index extends Component {

  state = {
    showTimerDialog: false,
    targetTime: new Date(),
  }

  onTimeChange = (dateTime) => {
    this.setState({ targetTime: dateTime });
  }

  onColseDialog = () => {
    this.props.dispatch(workflowActions.toggleTimerDialog());
  }

  onSetTimer = () => {
    console.log(this.state.targetTime);
    this.onColseDialog();
  }


  render() {
    const { workflowTimers } = this.props;
    const { targetTime } = this.state;
    return (
      <Fragment>
        {workflowTimers.showTimerDialog && (
          <Layer
            onEsc={this.onColseDialog}
            onClickOutside={this.onColseDialog}>
            <Box pad="medium" gap="small" width="360px" direction="column">
              <Heading level={2} margin="none">
                Set a timer
              </Heading>

              <Box id="datepicker-container" margin={{ bottom: 'small' }}>
                <Flatpickr
                  data-enable-time
                  value={targetTime}
                  options={{
                    inline: true
                  }}
                  onChange={(dateTime) => this.onTimeChange(dateTime)} />
              </Box>

              <Box direction="row" justify="end" align="center" gap="small">
                <Button label="Ok" primary onClick={this.onSetTimer} />
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
  workflowTimers: state.workflowTimers,
})

export default connect(mapStateToProps)(index)

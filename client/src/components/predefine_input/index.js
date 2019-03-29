import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import {
  Heading, Text, Box, Button,
  Layer, TextInput, FormField,
} from 'grommet'

import { workflowActions } from 'actions';

export class index extends Component {

  state = {
    preInputs: [],
    serviceMethod: null,
  }

  onColseDialog = () => {
    this.props.dispatch(workflowActions.togglePreInputDialog());
  }

  onSetPreInput = () => {
    const { workflow } = this.props;
    const { preInputs } = this.state;
    const elementId = workflow.currentNode.id;
    const method = workflow.appliedMethods[elementId].method;
    this.props.dispatch(workflowActions.applyPreInputsToTask(elementId, preInputs, method));
    this.setState({ preInputs: [] });
    this.onColseDialog();
  }

  onChangePreInput = (event, index) => {
    const { preInputs } = this.state;
    preInputs[index].value = event.target.value;

    this.setState({
      preInputs: preInputs,
    })
  }

  componentWillReceiveProps = (nextProps) => {
    const { appliedMethods, currentNode } = nextProps.workflow;
    if (currentNode && appliedMethods[currentNode.id]) {
      const inputInterface = appliedMethods[currentNode.id].method.input_interface;
      const listOfInputs = [];
      Object.keys(inputInterface).map((item, index) => {
        listOfInputs.push({
          variableName: item,
          value: ''
        })
      })
      if (this.state.preInputs.length == 0) {
        this.setState({ preInputs: listOfInputs });
      }
    }
  }

  renderPreInputValues = () => {
    const { preInputs } = this.state;
    return preInputs.map((item, index) =>
      <div key={item.variableName}>
        <Text weight="bold" size="small">
          {item.variableName}
        </Text>
        <FormField>
          <TextInput value={item.value}
            onChange={(event) => this.onChangePreInput(event, index)} />
        </FormField>
      </div>
    )
  }


  render() {
    const { workflowPreInputs } = this.props;
    return (
      <Fragment>
        {workflowPreInputs.showPreInputDialog && (
          <Layer
            onEsc={this.onColseDialog}
            onClickOutside={this.onColseDialog}>
            <Box pad="medium" gap="small" width="500px" direction="column">
              <Heading level={2} margin="none">
                Pre-define Value for Input Interface
              </Heading>
              <Text>* Parameters required to use this service</Text>
              <Box gap="small">
                {this.renderPreInputValues()}
              </Box>

              <Box direction="row" justify="end" align="center" gap="small">
                <Button label="Ok" primary onClick={this.onSetPreInput} />
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
  workflowPreInputs: state.workflowPreInputs,
  workflow: state.workflow,
})

export default connect(mapStateToProps)(index)

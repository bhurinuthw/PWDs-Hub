import React, { Component } from 'react'
import { connect } from 'react-redux'

import ConditionList from 'components/condition_list'

const variables = [
  { name: 'Salary', type: 'Number' },
  { name: 'Single', type: 'Boolean' },
  { name: 'Name', type: 'String' },
];

const operators = ['==', '!=', '<', '<=', '>', '>='];

const bpmnNodes = [
  'TASK_1132',
  'TASK_2233E',
  'LANE_133ww'
];

class Test extends Component {

  render() {
    return (
      <div>
        <ConditionList
          show={true}
          onCloseConditionList={() => { }}
          variables={variables}
          operators={operators}
          bpmnNodes={bpmnNodes} />
      </div>
    )
  }
}

export default connect(null, null)(Test);
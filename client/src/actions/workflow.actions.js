import { workflowContants } from '_constants';
import { workflowService } from 'services'
import { socketActions } from 'actions'
import { history } from '_helpers';

export const workflowActions = {


  // RESTful
  sendWorkflowData,
  sendWorkflowDataToEngine,
  getMyFlows,
};

function applyPreInputsToTask(elementId, preInputs, method) {
  return {
    type: workflowContants.APPLY_PRE_INPUT,
    elementId,
    preInputs,
    method,
  }
}

function setCurrentElement(bpmnNode) {
  return {
    type: workflowContants.SET_CURRENT_ELEMENT,
    bpmnNode,
  }
}

function toggleMemberDialog() {
  return {
    type: workflowContants.TOGGLE_MEMBER_DIALOG
  }
}

function toggleTimerDialog() {
  return {
    type: workflowContants.TOGGLE_TIMER_DIALOG
  }
}

function togglePreInputDialog() {
  return {
    type: workflowContants.TOGGLE_PRE_INPUT_DIALOG
  }
}


function setExecutingForm(form) {
  return {
    type: workflowContants.SET_CURRENT_EXECUTING_FORM,
    executingForm: form,
  }
}

function addNewForm(form, taskId) {
  return {
    type: workflowContants.ADD_NEW_FROM,
    form: form,
    forTask: taskId
  };
}

function addNameToId(name, value) {
  return {
    id: name,
    value,
    type: workflowContants.NAME_TO_ID,
  };
}

function applyMethodToTask(taskId, method) {
  return {
    type: workflowContants.APPLY_METHOD_TO_TASK,
    taskId,
    method,
  }
}

function applyConditionsToGateWay(gatewayId, conditions) {
  return {
    type: workflowContants.APPLY_CONDITIONS_TO_GATEWAY,
    gatewayId,
    conditions,
  }
}

function setupExistingWorkflow() {
  return (dispatch, getState) => {
    const currentFlow = getState().workflowMyFlows.currentFlow;
    dispatch({
      type: workflowContants.SETUP_EXISTING_WORKFLOW,
      currentFlow,
    })
  }
}

function setupNewWorkflow() {
  return {
    type: workflowContants.SETUP_NEW_WORKFLOW
  }
}

function setCurrentFlow(currentFlow) {
  return {
    type: workflowContants.SET_CURRENT_FLOW,
    currentFlow,
  }

}

function setBpmnJson(bpmnAppJson) {
  return {
    type: workflowContants.SET_BPMN_JSON,
    bpmnAppJson
  }
}

function setAppInfo(appName, appDescription, mode) {
  return {
    type: workflowContants.SET_APP_INFO,
    appName,
    appDescription,
    mode,
  }
}

function addNewCollaborators(newCollaborators) {
  return {
    type: workflowContants.ADD_NEW_COLLABORATORS,
    newCollaborators,
  }
}

function sendWorkflowData(appName, appDescription,
  workflowData) {
  return dispatch => {
    dispatch(request());
    setTimeout(() => {
      workflowService.sendWorkflowData(appName, appDescription, workflowData
      ).then(
        res => {
          dispatch(success())
          history.push('/home/my_flows');
        }).catch(err => dispatch(failure(err)));
    }, 1000);


    function request() {
      return {
        type: workflowContants.SEND_WORKFLOW_DATA_REQUEST
      }
    }

    function success(data) {
      return {
        type: workflowContants.SEND_WORKFLOW_DATA_SUCCESS,
        data
      }
    }

    function failure(err) {
      console.error(err);
      return {
        type: workflowContants.SEND_WORKFLOW_DATA_FAILURE
      }
    }
  }

}

function sendWorkflowDataToEngine(appName, appDescription,
  workflowData) {
  return dispatch => {
    dispatch(request());
    setTimeout(() => {
      workflowService.sendWorkflowDataToEngine(appName, appDescription,
        workflowData
      ).then(
        res => {
          dispatch(success())
          history.push('/execute_flow/flow1133');
        }).catch(err => dispatch(failure(err)));
    }, 1000);


    function request() {
      return {
        type: workflowContants.SEND_WORKFLOW_DATA_REQUEST
      }
    }

    function success(data) {
      return {
        type: workflowContants.SEND_WORKFLOW_DATA_SUCCESS,
        data
      }
    }

    function failure(err) {
      console.error(err);
      return {
        type: workflowContants.SEND_WORKFLOW_DATA_FAILURE
      }
    }
  }

}



function getMyFlows() {
  return dispatch => {
    dispatch(request());
    workflowService.getMyFlows().then(
      (res) => {
        dispatch(success(res.data.workflow));
      }
    ).catch(err => dispatch(failure(err)));

    function request() {
      return {
        type: workflowContants.GET_MY_FLOWS_REQUEST,
      }
    }

    function success(myFlows) {
      return {
        type: workflowContants.GET_MY_FLOWS_SUCCESS,
        myFlows
      }
    }

    function failure(err) {
      console.error(err);
      return {
        type: workflowContants.GET_MY_FLOWS_FAILURE,
        err,
      }
    }
  }
}



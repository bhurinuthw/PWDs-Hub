import { workflowContants } from '_constants';

const defaultState = {
  myFlows: [],
  currentFlow: null,
  loadingMyFlows: false,
  err: null,
}

export function workflowMyFlows(state = defaultState, action) {
  switch (action.type) {

    case workflowContants.SET_CURRENT_FLOW: {
      const nextState = { ...state };
      nextState.currentFlow = action.currentFlow;
      return nextState;
    }

    case workflowContants.GET_MY_FLOWS_REQUEST: {
      const nextState = { ...state };
      nextState.loadingMyFlows = true;
      return nextState;
    }
    case workflowContants.GET_MY_FLOWS_SUCCESS: {
      const nextState = { ...state };
      nextState.loadingMyFlows = false;
      nextState.myFlows = action.myFlows;
      return nextState;
    }
    case workflowContants.GET_MY_FLOWS_FAILURE: {
      const nextState = { ...state };
      nextState.loadingMyFlows = false;
      nextState.err = action.err;
      return nextState;
    }

    default:
      return state
  }
}

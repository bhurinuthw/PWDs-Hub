import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { alert } from './alert.reducer';
import { workflowMyFlows } from './workflow.my_flows.reducer';
import { activity } from './activity.reducer'

import { socket } from './socket.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  alert,
  workflowMyFlows,
  socket,
  activity,
});

export default rootReducer;
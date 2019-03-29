import { socketConstants } from '_constants';

const defaultState = {
  message: {
    title: null,
    body: null
  },
}

export function socket(state = defaultState, action) {
  switch (action.type) {
    case socketConstants.RECEIVE_MESSAGE: {
      const nextState = { ...state };
      const { message } = action;
      nextState.message = message
      return nextState;
    }

    default:
      return state
  }
}

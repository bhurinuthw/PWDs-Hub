import { activityConstants } from '_constants';

const defaultState = {
    showActivityDialog: false,
}

export function activity(state = defaultState, action) {
    switch (action.type) {
        case activityConstants.TOGGLE_ACTIVITY_DIALOG: {
            const nextState = { ...state };
            nextState.showActivityDialog = !state.showActivityDialog;
            return nextState;
        }
        default:
            return state
    }
}
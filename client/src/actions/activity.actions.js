import { activityConstants } from '_constants';

export const activityActions = {
    toggleActivityDialog,
};

function toggleActivityDialog() {
    return {
        type: activityConstants.TOGGLE_ACTIVITY_DIALOG,
    }
}


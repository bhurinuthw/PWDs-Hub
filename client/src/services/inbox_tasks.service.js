import axios from 'axios'

import { globalConstants } from '_constants'

export const inboxTasksService = {
  getAllInboxTasks,
};

function getAllInboxTasks() {
  return axios.get(globalConstants.GET_ALL_INBOX_TASKS_URL);
}

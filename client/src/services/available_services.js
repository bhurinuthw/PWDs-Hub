import axios from 'axios'
import { globalConstants } from '_constants'

export const availaleServicesActions = {
    getAllServices,
    getAllMethodsByServiceId,
};

function getAllServices() {
    return axios.get(globalConstants.GET_ALL_SERVICES_URL);
}

function getAllMethodsByServiceId(serviceId) {
    return axios.post('http://localhost:8000/get_all_methods/', { serviceId })
}

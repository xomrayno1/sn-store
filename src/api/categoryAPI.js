import axios from "./axiosClient";
import {
    API_CATEGORY_GET_LIST_PSSF,
    API_CATEGORY_CREATE,
    API_CATEGORY_UPDATE,
    API_CATEGORY_DELETE
} from '../common/Constant'

const categoryAPI = {
    getListPSSF: (params) =>{
        const url = API_CATEGORY_GET_LIST_PSSF;
        return axios.post(url, params)
    },
    categoryCreate: (params) => {
        const url = API_CATEGORY_CREATE;
        return axios.post(url, params);
    },
    categoryUpdate: (params) => {
        const url = API_CATEGORY_UPDATE;
        return axios.put(url, params);
    },
    categoryDelete: (params) => {
        const url = API_CATEGORY_DELETE;
        return axios.post(url, params);
    }
}
export default categoryAPI;

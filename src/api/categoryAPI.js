import axios from "./axiosClient";
import {
    API_CATEGORY_GET_LIST_PSSF
} from '../common/Constant'
const categoryAPI = {
    getListPSSF: (params) =>{
        const url = API_CATEGORY_GET_LIST_PSSF;
        return axios.post(url, params)
    }
}
export default categoryAPI;

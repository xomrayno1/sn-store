import axios  from '../api/axiosClient'
import {
    API_PRODUCT_GET_LIST_PSSF
} from '../common/Constant'

const productAPI = {

    getListPSSF: (params) => {
        const url = API_PRODUCT_GET_LIST_PSSF;
        return axios.post(url, params)
    }
}
export default productAPI;
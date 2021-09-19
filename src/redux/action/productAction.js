import {
    PRODUCT_GET_LIST_PSSF
} from '../../common/Constant'

export const getSearchListFilter = (payload) => {
    return {
        type: PRODUCT_GET_LIST_PSSF,
        payload
    }
}
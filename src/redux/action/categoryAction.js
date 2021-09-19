import {
    CATEGORY_GET_LIST_PSSF
} from '../../common/Constant'

export const getSearchListFilter = (payload) => {
    return {
        type: CATEGORY_GET_LIST_PSSF,
        payload
    }
}
import {
    CATEGORY_GET_LIST_PSSF,
    CATEGORY_GET_LIST_PSSF_SUCCESS,
    CATEGORY_GET_LIST_PSSF_FAILED
} from '../../common/Constant'
const initialState = {
    loading: false,
    error: '',
    data: ''
}

const categoryReducer = (state = initialState, action) => {
    const { payload, type } = action;

    switch (type) {
        case CATEGORY_GET_LIST_PSSF:
            return {
                ...state,
                loading: true
            }
        case CATEGORY_GET_LIST_PSSF_SUCCESS:
            return {
                ...state,
                loading: false,
                data: {...payload}
            }
        case CATEGORY_GET_LIST_PSSF_FAILED:
            return {
                ...state,
                loading: false,
                error: payload
            }
        default:
            return state;
    }
}

export default categoryReducer;
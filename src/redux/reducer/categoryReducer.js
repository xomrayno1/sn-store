import {
    CATEGORY_GET_LIST_PSSF,
    CATEGORY_GET_LIST_PSSF_SUCCESS,
    CATEGORY_GET_LIST_PSSF_FAILED,
    CATEGORY_CREATE,
    CATEGORY_CREATE_SUCCESS,
    CATEGORY_CREATE_FAILED,
    CATEGORY_UPDATE,
    CATEGORY_UPDATE_SUCCESS,
    CATEGORY_UPDATE_FAILED,
    CATEGORY_DELETE,
    CATEGORY_DELETE_FAILED,
    CATEGORY_DELETE_SUCCESS
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
                data: { ...payload }
            }
        case CATEGORY_GET_LIST_PSSF_FAILED:
            return {
                ...state,
                loading: false,
                error: payload
            }
        case CATEGORY_CREATE:
            return {
                ...state,
                loading: true
            }
        case CATEGORY_CREATE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: { ...payload }
            }
        case CATEGORY_CREATE_FAILED:
            return {
                ...state,
                loading: false,
                error: payload
            }
        case CATEGORY_UPDATE:
            return {
                ...state,
                loading: true
            }
        case CATEGORY_UPDATE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: { ...payload }
            }
        case CATEGORY_UPDATE_FAILED:
            return {
                ...state,
                loading: false,
                error: payload
            }
        case CATEGORY_DELETE:
            return {
                ...state,
                loading: true
            }
        case CATEGORY_DELETE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: { ...payload }
            }
        case CATEGORY_DELETE_FAILED:
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
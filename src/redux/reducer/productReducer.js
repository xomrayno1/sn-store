import {
    PRODUCT_GET_LIST_PSSF,
    PRODUCT_GET_LIST_PSSF_SUCCESS,
    PRODUCT_GET_LIST_PSSF_FAILED
} from '../../common/Constant'

const initialState = {
    data: '', 
    isLoading: false,
    error: ''
}

const productReducer = (state = initialState , action) => {
    const {type, payload} = action;
    switch(type){
        case PRODUCT_GET_LIST_PSSF:
            return {
                ...state,
                isLoading: true
            }
        case PRODUCT_GET_LIST_PSSF_SUCCESS:
            return {
                ...state,
                data: {...payload},
                isLoading: false
            }
        case PRODUCT_GET_LIST_PSSF_FAILED:
            return {
                ...state,
                error: payload,
                isLoading: false
            }
        default: 
            return state;
    }

}
export default productReducer;
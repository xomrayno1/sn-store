import {
    PRODUCT_GET_LIST_PSSF,
    PRODUCT_CREATE,
    PRODUCT_UPDATE,
    PRODUCT_DELETE
} from '../../common/Constant'

export const getSearchListFilter = (payload) => {
    return {
        type: PRODUCT_GET_LIST_PSSF,
        payload
    }
}

export const productCreate = (payload, ref) => {
    return {
        type: PRODUCT_CREATE,
        payload,
        ref
    }
}

export const productUpdate = (payload, ref) => {
    return {
        type: PRODUCT_UPDATE,
        payload,
        ref
    }
}

export const productDelete = (payload) => {
    return {
        type: PRODUCT_DELETE,
        payload
    }
}
import {
    CATEGORY_GET_LIST_PSSF,
    CATEGORY_CREATE,
    CATEGORY_UPDATE,
    CATEGORY_DELETE
} from '../../common/Constant'

export const getSearchListFilter = (payload) => {
    return {
        type: CATEGORY_GET_LIST_PSSF,
        payload
    }
}

export const createCategory = (payload, ref) => {
    return {
        type: CATEGORY_CREATE,
        payload,
        ref
    }
}

export const updateCategory = (payload, ref) => {
    return {
        type: CATEGORY_UPDATE,
        payload,
        ref
    }
}

export const deleteCategory = (payload) => {
    return {
        type: CATEGORY_DELETE,
        payload
    }
}
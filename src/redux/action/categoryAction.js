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

export const createCategory = (ref, handleCancel) => {
    return {
        type: CATEGORY_CREATE,
        ref,
        handleCancel
    }
}

export const updateCategory = (ref, handleCancel) => {
    return {
        type: CATEGORY_UPDATE,
        ref,
        handleCancel
    }
}

export const deleteCategory = (payload) => {
    return {
        type: CATEGORY_DELETE,
        payload
    }
}
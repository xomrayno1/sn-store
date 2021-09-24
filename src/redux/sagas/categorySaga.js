import { put, call, takeLatest } from 'redux-saga/effects'


import categoryAPI from '../../api/categoryAPI'
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
    CATEGORY_DELETE_SUCCESS,
    CategoryFilterDefault
} from '../../common/Constant'
import { getMessage } from '../../common/Constant'

function* getListPSSF({ payload }) {
    try {
        const response = yield call(categoryAPI.getListPSSF, payload);
        yield put({ type: CATEGORY_GET_LIST_PSSF_SUCCESS, payload: response.data })
    } catch (error) {
        yield put({ type: CATEGORY_GET_LIST_PSSF_FAILED, payload: error })
    }
}

function* categoryCreate({ ref, handleCancel }) {
    const { current } = ref
    try {
        const data = {
            ...current.values
        }
        yield call(categoryAPI.categoryCreate, data);
        yield getListPSSF({ payload: CategoryFilterDefault });
        getMessage('success', 'Thêm thành công');
        setTimeout(() => {
            handleCancel();
        }, 500)
    } catch (err) {
        yield put({ type: CATEGORY_CREATE_FAILED, payload: err })
        if (!err.response) {
            getMessage('error', 'Network Error');
        } else {
            const { code, error, message } = err.response.data;
            switch (code) {
                case 400:
                    current.setErrors({
                        ...error
                    })
                    break;
                case 158:
                    current.setErrors({
                        name: message
                    })
                    break;
                default:
                    getMessage('error', 'Network Error');
                    break
            }
        }
    }
}

function* categoryUpdate({ ref, handleCancel }) {
    const { current } = ref
    try {
        const data = {
            ...current.values
        }
        yield call(categoryAPI.categoryUpdate, data);
        yield getListPSSF({ payload: CategoryFilterDefault });
        getMessage('success', 'Cập nhật thành công');
        setTimeout(() => {
            handleCancel();
        }, 500)
    } catch (err) {
        yield put({ type: CATEGORY_CREATE_FAILED, payload: err })
        if (!err.response) {
            getMessage('error', 'Network Error');
        } else {
            const { code, error, message } = err.response.data;
            switch (code) {
                case 400:
                    current.setErrors({
                        ...error
                    })
                    break;
                case 158:
                    current.setErrors({
                        name: message
                    })
                    break;
                default:
                    getMessage('error', 'Network Error');
                    break
            }
        }
    }
}

function* categoryDelete({ payload }) {
    try {
        yield call(categoryAPI.categoryDelete, payload);
        yield getListPSSF({ payload: CategoryFilterDefault })
        getMessage('success', 'Xoá thành công');
    } catch (err) {
        yield put({ type: CATEGORY_DELETE_FAILED, payload: err })
        if (!err.response) {
            getMessage('error', 'Network Error');
        } else {
            const { message } = err.response.data;
            getMessage('error', message);
        }
    }
}


function* categorySaga() {
    yield takeLatest(CATEGORY_GET_LIST_PSSF, getListPSSF);
    yield takeLatest(CATEGORY_CREATE, categoryCreate);
    yield takeLatest(CATEGORY_UPDATE, categoryUpdate);
    yield takeLatest(CATEGORY_DELETE, categoryDelete);

}
export default categorySaga;
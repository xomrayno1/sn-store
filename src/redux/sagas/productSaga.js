import {
    PRODUCT_GET_LIST_PSSF,
    PRODUCT_GET_LIST_PSSF_SUCCESS,
    PRODUCT_GET_LIST_PSSF_FAILED
} from "../../common/Constant"
import productAPI from '../../api/productAPI'

import {put, takeLatest, call} from 'redux-saga/effects'

function* getListPSSF({payload}){
    try {
        const response = yield call(productAPI.getListPSSF, payload);
        yield put({type: PRODUCT_GET_LIST_PSSF_SUCCESS, payload: response});
    } catch (error) {
        yield put({type: PRODUCT_GET_LIST_PSSF_FAILED, payload: error});
    }
}

function* productSaga(){
    yield takeLatest(PRODUCT_GET_LIST_PSSF, getListPSSF);
}
export default productSaga;
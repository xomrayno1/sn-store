import { put, call, takeLatest} from 'redux-saga/effects'

import categoryAPI from '../../api/categoryAPI'
import {
    CATEGORY_GET_LIST_PSSF,
    CATEGORY_GET_LIST_PSSF_SUCCESS,
    CATEGORY_GET_LIST_PSSF_FAILED
} from '../../common/Constant'

function* getListPSSF({payload}){
    try {
        const response = yield call(categoryAPI.getListPSSF, payload);
        yield put({type:  CATEGORY_GET_LIST_PSSF_SUCCESS, payload: response.data})
    } catch (error) {
        yield put({type:  CATEGORY_GET_LIST_PSSF_FAILED, payload: error})
    }
}
function* categorySaga(){
    yield takeLatest(CATEGORY_GET_LIST_PSSF, getListPSSF);
}
export default categorySaga;
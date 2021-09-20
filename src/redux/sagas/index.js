import {all} from 'redux-saga/effects'
import productSaga from '../sagas/productSaga'
import categorySaga from '../sagas/categorySaga'

export default function* rootSaga(){
    yield all([
        productSaga(),
        categorySaga()
    ])
}
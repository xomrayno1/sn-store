import {all} from 'redux-saga/effects'
import productSaga from '../sagas/productSaga'

export default function* rootSaga(){
    yield all([
        productSaga()
    ])
}
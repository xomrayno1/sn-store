import {combineReducers} from 'redux'
import productReducer from '../reducer/productReducer'

const rootReducer = combineReducers({
    product:  productReducer,
})

export default rootReducer;
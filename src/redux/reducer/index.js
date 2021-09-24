import {combineReducers} from 'redux'
import productReducer from '../reducer/productReducer'
import categoryReducer from './categoryReducer';

const rootReducer = combineReducers({
    product:  productReducer,
    category: categoryReducer,
})

export default rootReducer;
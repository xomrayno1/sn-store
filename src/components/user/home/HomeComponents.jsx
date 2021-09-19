import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Spin} from 'antd';

import Header from '../Header'
import ProductList from './ProductList'
import {
    getSearchListFilter
} from '../../../redux/action/productAction'

function HomeComponents(props) {
    const {isLoading} = useSelector(state => state.product);
    const {content} = useSelector(state => state.product.data.data) || {content: []};
 
    const dispatch = useDispatch();

    const [filter, setFilter] = useState({
        "searchKey" : "",
        "sortCase" : 1,
        "ascSort": true,
        "pageNumber": 1,
        "pageSize": 10
    })

    useEffect(()=>{
        dispatch(getSearchListFilter(filter));
    },[filter])


    return (
        <>
            <Header/>
            <div>
                <h1>Trang chủ</h1>
                <h2>Sản phẩm</h2>
                <div className="container px-4 px-lg-5 mt-5">
                    {
                        <Spin spinning={isLoading} tip="Loading...">
                            <ProductList products={content}/>
                        </Spin>
                    }
                </div>
            </div>
        </>
    );
}

export default HomeComponents;
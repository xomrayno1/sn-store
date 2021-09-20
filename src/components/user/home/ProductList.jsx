import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Spin } from 'antd';

import {
    getSearchListFilter
} from '../../../redux/action/productAction'

ProductList.propTypes = {
    products: PropTypes.array
};

ProductList.defaultProps ={
    products: []
}

function ProductList({category}) {

    const { isLoading } = useSelector(state => state.product);
    const { content } = useSelector(state => state.product.data.data) || {content: []};
 
    const dispatch = useDispatch();

    const [filter, setFilter] = useState({
        "searchKey" : "",
        "sortCase" : 1,
        "ascSort": true,
        "pageNumber": 1,
        "pageSize": 10,
        "categoryId": category 
    })
    useEffect(()=>{
        dispatch(getSearchListFilter(filter));
    },[filter])


    return (
        <Spin spinning={isLoading} tip="Loading...">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                {
                    content.map(item => (
                        <div className="col mb-5" key={item.id}>
                            <div className="card h-100">
                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">{item.name}</h5>
                                        <span className="text-muted">{item.price} VNĐ</span>
                                    </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Buy</a></div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </Spin>
    );
}

export default ProductList;
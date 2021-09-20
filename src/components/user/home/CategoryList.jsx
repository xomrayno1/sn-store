import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Tabs } from 'antd';
import { useDispatch } from 'react-redux';

import { getSearchListFilter } from '../../../redux/action/categoryAction'
import ProductList from './ProductList';
import { useSelector } from 'react-redux';


CategoryList.propTypes = {
    categories: PropTypes.array
};

CategoryList.defaultProps = {
    categories: []
}
function CategoryList() {

    const { content } = useSelector(state => state.category.data) || { content: [] };

    const filter = {
        "searchKey": "",
        "sortCase": 1,
        "ascSort": true,
        "pageNumber": 1,
        "pageSize": 10
    }

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSearchListFilter(filter));
    }, []);

    const categories = [{ id: 0, name: "Tất cả" }, ...content]

    return (
        <div>
            <Tabs defaultActiveKey="0" tabPosition="top" style={{ height: 480 }} size="large" className="overflow-auto">
                {
                    categories.map(item => (
                        <Tabs.TabPane tab={item.name} key={item.id}>
                            <ProductList searchKey={item.id} />
                        </Tabs.TabPane>
                    ))
                }
            </Tabs>
        </div>
    );
}

export default CategoryList;
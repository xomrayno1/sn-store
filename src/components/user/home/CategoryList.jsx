import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Tabs } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Spin } from 'antd';

import { getSearchListFilter } from '../../../redux/action/categoryAction'
import ProductList from './ProductList';

CategoryList.propTypes = {
    categories: PropTypes.array
};

CategoryList.defaultProps = {
    categories: []
}
function CategoryList() {
    const { loading } = useSelector(state => state.category);

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
            <Spin spinning={loading} tip="Loading..."> 
                <Tabs defaultActiveKey="0" destroyInactiveTabPane={true} tabPosition="top" style={{ height: 480 }} size="large" className="overflow-auto">
                    {
                        categories.map(item => (
                            <Tabs.TabPane tab={item.name} key={item.id} ><ProductList category={item.id}  /></Tabs.TabPane>
                        ))
                    }
                </Tabs>
            </Spin>
        </div>
    );
}

export default CategoryList;
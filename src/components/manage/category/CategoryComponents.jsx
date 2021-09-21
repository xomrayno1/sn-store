import React, { useEffect, useState, useRef } from 'react';
import { Table, Button, Space, Input, Modal, Spin } from 'antd';
import { PlusOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';

import { confirm, warning } from '../../../common/ModalAlert'
import Header from '../Header'
import { getSearchListFilter } from '../../../redux/action/categoryAction'

function CategoryComponents(props) {
    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
        }, {
            title: 'Name',
            dataIndex: 'name',
        }, {
            title: 'Mô tả',
            dataIndex: 'description',
        }, {
            title: 'Ngày tạo',
            dataIndex: 'created_date',
        }, {
            title: 'Ngày cập nhật',
            dataIndex: 'updated_date',
        }, {
            titile: '+',
            dataIndex: '+',
            render: (_, item) => {
                return (
                    <Button icon={<EditOutlined />} type="dashed"
                        style={{ backgroundColor: 'yellow' }}
                        onClick={() => onClickUpdate(item)}>
                        Cập nhật
                    </Button>
                )
            }
        }
    ];

    const { loading } = useSelector(state => state.category);

    const { content, totalElements, size } = useSelector(state => state.category.data) || { content: [], totalElements: 0, totalPages: 0 };

    const [filter, setFilter] = useState({
        "searchKey": "",
        "sortCase": 1,
        "ascSort": true,
        "pageNumber": 1,
        "pageSize": 5
    })

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSearchListFilter(filter));
    }, [filter]);

    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const onSelectChange = (selectedRowKeys) => {
        setSelectedRowKeys(selectedRowKeys);
    }
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange
    }

    const onHandleOkDelete = () => {
        setSelectedRowKeys([]);
    }

    const onHandlePagination = (page) => {
        setFilter({
            ...filter,
            pageNumber: page
        })
    }

    const searchRef = useRef();

    const onHandleSearch = () => {
        const searchKey = searchRef.current.input.value;
        setFilter({
            ...filter,
            searchKey
        })
    }

    // modal

    const [modal, setModal] = useState({
        title: '',
        visible: false,
    });

    const handleCancel = () => {
        setModal({ ...modal, visible: false })
    }

    const handleOk = () => {
        setModal({ ...modal, visible: false })
    }

    const onClickUpdate = (item) => {
        console.log(item);
        setModal({ ...modal, title: 'Cập nhật danh mục', visible: true })
    }



    return (
        <>
            <Header />
            <div className="container ">
                <hr />
                <div className="row" style={{ marginBottom: '10px' }}>
                    <div className="col-md-4 text-left">
                        <Space>
                            <Button icon={<PlusOutlined />} type="primary" onClick={() => setModal({ ...modal, title: 'Thêm danh mục', visible: true })}>
                                Thêm
                            </Button>
                            <Button icon={<DeleteOutlined />} type="danger"
                                onClick={() => selectedRowKeys.length != 0 ? confirm("Bạn có chắc chắn muốn xoá không ?", onHandleOkDelete)
                                    : warning("Vui Lòng chọn danh mục cần xoá.")
                                }>Xoá
                            </Button>
                        </Space>
                    </div>
                    <div className="col-md-6 text-right">
                        <Input placeholder="Nhập danh mục cần tìm..." ref={searchRef} onPressEnter={onHandleSearch} />
                    </div>
                    <div className="col-md-2 text-right">
                        <Button type="dashed" onClick={onHandleSearch}>Tìm</Button>
                    </div>
                </div>
                <Table
                    rowSelection={rowSelection}
                    columns={columns}
                    dataSource={content}
                    pagination={{
                        total: totalElements,
                        pageSize: size,
                        onChange: onHandlePagination

                    }}
                    loading={loading}
                />

                <Modal
                    title={modal.title}
                    centered
                    visible={modal.visible}
                    width={600}
                    onOk={handleOk}
                    // confirmLoading={confirmLoading}
                    onCancel={handleCancel}
                >
                    <p>Text</p>
                </Modal>

            </div>

        </>
    );
}

export default CategoryComponents;
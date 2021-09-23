import React, { useEffect, useState, useRef } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Table, Button, Space, Input, Modal, Spin } from 'antd';
import * as Yup from 'yup';

import '../../user/style.css'
import { TextInputComponennt, TextAreaComponennt, ErrorComponent } from '../../../common/Constant'
function CategoryModal({ categoryRef, modal, setModal, loadingForm, confirmLoading, setConfirmLoading }) {

    const handleCancel = () => {
        categoryRef.current.resetForm();
        setModal({ ...modal, visible: false })
    }

    const categorySchema  = Yup.object({
        name: Yup.string().required("Không được để trống tên")
    });

    const onSave = (item) => {
        console.log("save" + item);
        setConfirmLoading(true);
        setTimeout(() => {
            if(item.id){
                console.log("update");
            }else{
                console.log("add");
            }
            setConfirmLoading(false);
        },2000);

        
    }

    return (
        <Modal
        title={modal.title}
        centered
        visible={modal.visible}
        width={600}
        onCancel={handleCancel}
        footer={null}
    >
        <Formik
            initialValues={{
                description: "",
                name: "",
                id: 0
            }}
            onSubmit={onSave}
            innerRef={categoryRef}
            validateOnBlur={false}
            validateOnChange={false}
            validationSchema={categorySchema}
        >
            <Form>
                <Spin spinning={loadingForm} tip="Đang tải">
                    <div>
                        <span>Tên danh mục</span>
                        <Field name="name" as={TextInputComponennt} />
                        <ErrorMessage name="name"component="div" className="text-error" />
                    </div>
                    <div>
                        <span>Mô tả</span>
                        <Field name="description" as={TextAreaComponennt} />
                    </div>
                    <div style={{ marginTop: '10px' }}>
                        <Space>
                            <Button type="primary" key="save" loading={confirmLoading} htmlType="submit">Lưu</Button>
                            <Button key="canncel" type="danger" onClick={handleCancel}>Huỷ</Button>
                        </Space>
                    </div>
                </Spin>
            </Form>
        </Formik>
    </Modal>
    );
}

export default CategoryModal;
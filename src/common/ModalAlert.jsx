import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons' 

export function confirm(description, onHandleOk) {
    Modal.confirm({
      title: 'Xác nhận',
      icon: <ExclamationCircleOutlined />,
      content: description,
      okText: 'Đồng ý',
      cancelText: 'Huỷ',
      onOk: onHandleOk
    });
}

export function warning(description) {
    Modal.warning({
      title: 'Cảnh báo',
      icon: <ExclamationCircleOutlined />,
      content: description,
      cancelText: 'Huỷ',
    });
}
import { useState } from 'react';
import { Modal, Form, Input, Button, Spin } from 'antd';


const AuthModal = ({ visible, onCancel, OnAuthorize, OnClose }) => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const handleOk = async () => {
    setLoading(true);
    await OnAuthorize(form.getFieldValue("email"), form.getFieldValue("password"));
    setLoading(false);
    form.resetFields();
    OnClose();
    
  };

  const handleCancel = () => {
    onCancel();
    setLoading(false);
  };

  return (
    <Modal
      title="Authentication"
      open={visible}
      onCancel={handleCancel}
      footer={null}
    >
      <Form onFinish={handleOk}>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
            {
              type: 'email',
              message: 'Please enter a valid email address!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
            {
              min: 6,
              message: 'Password must be at least 6 characters!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" type="primary" block>
            {loading ? <Spin /> : 'Login'}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AuthModal;
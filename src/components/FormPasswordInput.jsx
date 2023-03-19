import React from 'react';
import { Form, Input } from 'antd';

const CustomPasswordInput = ({ field, form: { touched, errors }, ...props }) => {
  const error = touched[field.name] && errors[field.name];
  return (
    <Form.Item
      validateStatus={error ? 'error' : ''}
      help={error}
    >
      <Input.Password
        {...field}
        {...props}
      />
    </Form.Item>
  );
};

export default CustomPasswordInput;

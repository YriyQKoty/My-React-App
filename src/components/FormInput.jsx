import React from 'react';
import { Form, Input } from 'antd';

const CustomInput = ({ field, form: { touched, errors }, ...props }) => {
  const error = touched[field.name] && errors[field.name];
  return (
    <Form.Item
      validateStatus={error ? 'error' : ''}
      help={error}
    >
      <Input
        {...field}
        {...props}
      />
    </Form.Item>
  );
};

export default CustomInput;
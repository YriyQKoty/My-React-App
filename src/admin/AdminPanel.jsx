import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Input, Form as AntForm, Select, Upload, List, Table, Button } from 'antd';
import { TableOutlined, UnorderedListOutlined } from '@ant-design/icons';
import Modal from 'react-modal';
import * as Yup from "yup";

export default function AdminPanel() {
    const [products, setProducts] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [viewType, setViewType] = useState('table');

    //const [form] = Form.useForm();

    const validationSchema = {
        name: Yup.string().required('Please enter product name!'),
        description: Yup.string().required('Please enter product desc!'),
        price: Yup.number().required('Please enter product Price!').min(0.1).moreThan(5, "Price should be more than 5"),
      };

      const initialValues = {
        name: '',
        description: '',
        price: '',
        category: '',
        imageUrl: '',
      };


    const handleCancel = () => {
        setModalVisible(false);
    };

    const categories = ['Tank', 'Ammo', 'MLRS & Artillery', 'APC & IFV', 'Other'];

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description'
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price'
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category'
        },
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
            render: () => (
                <img src="https://picsum.photos/200" alt="product" style={{ width: '50px' }}
                />),
        },
    ];


    return (
        <div style={{ marginTop: '5rem' }}>
            <div style={{ marginBottom: '1rem' }}>
                <Button onClick={() => setModalVisible(true)}>Create Product</Button>
                <Button
                    type={viewType === 'table' ? 'primary' : 'default'}
                    onClick={() => setViewType('table')}
                    icon={<TableOutlined />}
                />
                <Button
                    type={viewType === 'list' ? 'primary' : 'default'}
                    onClick={() => setViewType('list')}
                    icon={<UnorderedListOutlined />}
                />
            </div>
            {viewType === 'table' ? (
                <Table dataSource={products} rowKey="id" columns={columns} />
            ) : (
                <List
                    itemLayout="horizontal"
                    dataSource={products}
                    rowKey="id"
                    renderItem={(item) => (
                        <List.Item>
                            <List.Item.Meta
                                title={item.name}
                                description={item.description}
                            />
                        </List.Item>
                    )}
                />
            )}
            <Modal
                isOpen={modalVisible} onRequestClose={handleCancel}
            >
                <Formik
                    initialValues={initialValues}
                    validationSchema={Yup.object(validationSchema)}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            const product = {
                                name: values.name,
                                description: values.description,
                                price: values.price,
                                category: values.category,
                                image: values.image
                            };
                            setProducts([...products, product]);
                            setSubmitting(false);
                            handleCancel()
                        }, 400);
                    }}
                >
                    {({ errors, touched }) => (
                        <Form layout="vertical" style={{ margin: 100 }}>
                             <h2>Add product</h2>
                            <Field name="name">
                                {({ field }) => (
                                    <AntForm.Item label="Name" validateStatus={errors.name && touched.name ? 'error' : ''} help={errors.name && touched.name ? errors.name : ''}>
                                        <Input {...field} />
                                    </AntForm.Item>
                                )}
                            </Field>
                            <Field name="description">
                                {({ field }) => (
                                    <AntForm.Item label="Description" validateStatus={errors.description && touched.description ? 'error' : ''} help={errors.description && touched.description ? errors.description : ''}>
                                        <Input {...field} />
                                    </AntForm.Item>
                                )}
                            </Field>
                            <Field name="price">
                                {({ field }) => (
                                    <AntForm.Item label="Price" validateStatus={errors.price && touched.price ? 'error' : ''} help={errors.price && touched.price ? errors.price : ''}>
                                        <Input {...field} />
                                    </AntForm.Item>
                                )}
                            </Field>
                            <Field name="category">
                                {({ field }) => (
                                    <AntForm.Item label="Category">
                                        <Select {...field} placeholder="Select category">
                                            {categories.map(c => (
                                                <Select.Option key={c}>{c}</Select.Option>
                                            ))}
                                        </Select>
                                    </AntForm.Item>
                                )}
                            </Field>
                            <Field name="imageUrl">
                                {({ field }) => (
                                    <AntForm.Item label="Image">
                                        <Upload {...field} name="image" listType="picture">
                                            <Button>Upload Image</Button>
                                        </Upload>
                                    </AntForm.Item>
                                )}
                            </Field>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form>
                    )}
                </Formik>
            </Modal>
        </div>
    );
}
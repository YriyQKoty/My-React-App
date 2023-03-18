import React, { useState } from 'react';
import { Upload, Modal, Input, Button, Table, Form, List, Avatar, Select } from 'antd';
import { TableOutlined, UnorderedListOutlined } from '@ant-design/icons';

export default function AdminPanel() {
    const [products, setProducts] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [viewType, setViewType] = useState('table');

    const [form] = Form.useForm();

    const handleOk = () => {
        form
            .validateFields()
            .then((values) => {
                const product = {
                    name: values.name,
                    description: values.description,
                    price: values.price,
                    category: values.category,
                    image: values.image
                };
                setProducts([...products, product]);
                form.resetFields();
                setModalVisible(false);
            });
    };

    const handleCancel = () => {
        form.resetFields();
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
                title="Create Product"
                open={modalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <Form form={form} layout="vertical">
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: 'Please enter product name!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Description"
                        name="description"
                        rules={[{ required: true, message: 'Please enter product desc!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Price"
                        name="price"
                        rules={[{ required: true, min: 0.1, message: 'Please enter product Price!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Category"
                        name="category"
                    >
                        <Select placeholder="Select category">
                            {categories.map(c => <Select.Option key={c}>{c}</Select.Option>)}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Image"
                        name="imageUrl"

                    >
                        <Upload
                            name="image"
                            listType="picture"
                        >
                            <Button>Upload Image</Button>
                        </Upload>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
}
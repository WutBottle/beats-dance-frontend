import { Card, Button, Space, Table, Modal, Form, Input } from 'antd'
import { useState } from 'react'

export default () => {
  const [form] = Form.useForm()
  const [dataSource, setDataSource] = useState([])
  const [open, setOpen] = useState(false)
  const columns = [
    {
      title: '机构名称',
      dataIndex: 'organ',
      render: (text) => <a>{text}</a>,
    },
    {
      title: '创始人',
      dataIndex: 'owner',
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>修改</a>
          <a>删除</a>
        </Space>
      ),
    },
  ]
  return (
    <div>
      <Card
        title="我的机构"
        extra={
          <Button type="link" onClick={() => setOpen(true)}>
            创建机构
          </Button>
        }
      >
        <Table columns={columns} dataSource={dataSource} />
      </Card>
      <Modal
        title="创建机构"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={600}
        okText="确定"
        cancelText="取消"
      >
        <Form
          form={form}
          name="organization"
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 20,
          }}
        >
          <Form.Item
            label="机构名称"
            name="name"
            rules={[
              {
                required: true,
                message: '请输入机构名称!',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

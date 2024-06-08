import { Card, Button, Space, Table, Modal, Form } from 'antd'
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
      >
        <Form
        form={}
          name="organization"
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 20,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[
              {
                required: true,
                message: '请输入用户名!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[
              {
                required: true,
                message: '请输入密码!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 4,
              span: 20,
            }}
          >
            <Button type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

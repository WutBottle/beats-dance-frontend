import { Card, Button, Space, Table, Modal, Form, Input, message } from 'antd'
import { useState } from 'react'
import dayjs from 'dayjs'

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
      render: (time) => dayjs(time).format('YYYY-MM-DD HH-mm-ss'),
    },
    {
      title: '操作',
      key: 'action',
      width: 120,
      render: (_, record) => (
        <Space size="middle">
          <a>修改</a>
          <a
            onClick={() => {
              const { id } = record || {}
              const findIndex = dataSource.findIndex((item) => item.id === id)
              setDataSource((pre) => {
                pre.splice(findIndex, 1)
                return pre
              })
              message.success('删除成功')
            }}
          >
            删除
          </a>
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
        <Table rowKey="id" columns={columns} dataSource={dataSource} />
      </Card>
      <Modal
        title="创建机构"
        centered
        open={open}
        onOk={() => {
          form.validateFields().then((values) => {
            const { name } = values || {}
            setDataSource((pre) => {
              return [
                ...pre,
                {
                  organ: name,
                  owner: '张鹏',
                  createTime: dayjs().valueOf(),
                  id: dayjs().valueOf(),
                },
              ]
            })
            message.success('创建成功')
            setOpen(false)
            form.resetFields()
          })
        }}
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

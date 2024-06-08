import { Card, Button, Space, Table, Modal} from 'antd'
import { useState } from 'react'

export default () => {
  const [dataSource, setDataSource] = useState([])
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
      <Card title="我的机构" extra={<Button type="link">创建机构</Button>}>
        <Table columns={columns} dataSource={dataSource} />
      </Card>
      <Modal></>
    </div>
  )
}

import { Card, Button, Empty, Space, Table, Tag } from 'antd'
import { useState } from 'react'
const gridStyle = {
  width: '25%',
}
export default () => {
  const [list, setList] = useState([
    {
      name: '尚梦舞蹈',
      id: 1,
      owner: 'zhangpeng',
    },
  ])
  return (
    <div>
      <Card title="我的组织" extra={<Button type="link">创建组织</Button>}>
        {list.length === 0 ? (
          <Empty />
        ) : (
          list.map((item) => <Card.Grid style={gridStyle}>{item.name}</Card.Grid>)
        )}
      </Card>
    </div>
  )
}

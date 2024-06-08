import { Card, Button, Empty } from 'antd'
import { useState } from 'react'
const gridStyle = {
  width: '25%',
  textAlign: 'center',
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
          list.map((item) => <Card.Grid style={gridStyle}>Content</Card.Grid>)
        )}
      </Card>
    </div>
  )
}

import { Card, Button, Empty } from 'antd'

const gridStyle = {
  width: '25%',
  textAlign: 'center',
}
export default () => {
  const 
  return (
    <div>
      <Card title="我的组织" extra={<Button type="link">创建组织</Button>}>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid hoverable={false} style={gridStyle}>
          Content
        </Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
      </Card>
    </div>
  )
}

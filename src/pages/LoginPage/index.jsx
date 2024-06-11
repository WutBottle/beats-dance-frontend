import styles from './index.module.less'
import { useNavigate } from 'react-router'
import { Button, Form, Input, message } from 'antd'
import { login } from '@api/login'

export default () => {
  const navigate = useNavigate()
  const onFinish = (values) => {
    login(values).then((res) => {
      console.log(res)
      const { username } = res.data || {}
      message.success(`你好，${username}！`)
      navigate('/home/user')
    })
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div className={styles.loginWrapper}>
      <Form
        name="login"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 20,
        }}
        style={{
          width: 500,
          margin: '0 auto',
        }}
        initialValues={{
          remember: true,
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
    </div>
  )
}

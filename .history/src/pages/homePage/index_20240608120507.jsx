import React, { useState } from 'react'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  AppstoreOutlined,
} from '@ant-design/icons'
import { Button, Layout, Menu, theme } from 'antd'
import { Outlet, Link, useLocation } from 'react-router-dom'
import styles from './index.module.less'
const { Header, Sider, Content } = Layout
export default () => {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()
  const { pathname } = useLocation()
  return (
    <Layout className={styles.homeWrapper}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[pathname]}
          items={[
            {
              key: '/home/user',
              icon: <UserOutlined />,
              label: <Link to="/home/user">用户中心</Link>,
            },
            {
              key: '/home/organization',
              icon: <AppstoreOutlined />,
              label: <Link to="/home/organization">机构列表</Link>,
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

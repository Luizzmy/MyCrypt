import React, {useEffect} from 'react'
import { Layout, Menu, Row, Col } from 'antd'
import { Link } from 'react-router-dom'
import { useContextData } from '../hooks/context'
import { logoutFn } from '../services/auth'


const { Header, Content, Footer } = Layout
function LayoutApp({ children }) {
  const { user, logout } = useContextData()
  async function handleLogout() {
    await logoutFn()
    logout()
  }


  return (
    <div>
      <Layout className="layout">
        <Header style={{ textAlign: "center" }}>
          <div className="logo" />
          <Row>
            <Col span={12}>
              <Menu theme="dark" mode="horizontal" >
                <Menu.Item key="1">
                  <Link to='/btc'>BTC</Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to='/eth'>ETH</Link>
                </Menu.Item>
                <Menu.Item key="3">
                  <Link to='/ltc'>LTC</Link>
                </Menu.Item>
              </Menu>
            </Col>
            <Col span={12}>
              <Menu theme="dark" mode="horizontal" style={{ textAlign: "right" }}>
                {/* react fragments <> */}
                {!user ?
                  <>
                    <Menu.Item key="1">
                      <Link to='/login'>Login</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                      <Link to='/signup'>Signup</Link>
                    </Menu.Item>
                  </> : null}

                {/* react fragments   <> */}
                {user ?
                  <>
                    <Menu.Item key="3">
                      <Link to='/profile'>Profile</Link>
                    </Menu.Item>
                    {/* <Menu.Item key="4">
                      <Link to='/logout'>Logout</Link>
                    </Menu.Item> */}
                    <Menu.Item key="5" onClick={handleLogout}>Logout </Menu.Item>
                  </> : null}

              </Menu>
            </Col>
          </Row>
        </Header>
        <Content style={{ padding: '10px 20px' }}>
          <div className="site-layout-content">{children}</div>
        </Content>
        {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
      </Layout>
    </div>
  )
}

export default LayoutApp

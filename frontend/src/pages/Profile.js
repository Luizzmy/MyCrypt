import React, {useState, useEffect} from 'react';
import {useContextData} from '../hooks/context';
import {getPost} from '../services/post';

import { Layout, Menu, Row, Col, Card, Avatar } from 'antd'
const { Header, Footer, Sider, Content } = Layout;

function Profile() {
  // crud
const {user} =useContextData()
const [posts,setPost]= useState([])

useEffect(() => {
  async function getPosts(){
    const{data}=await getPost()
    setPost(data)
  }
  
}, [])


  return (
    <div>
      <h1>profile test</h1>
      <Layout>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={12} lg={12} >
            <Card title="User profile">
            Lorem ipsum, dolor sit amet consectepe,a officii
            m excepturi illum natus voluptas voluptatibus. 
            Incidunt rerum optio numquam distinctio,dsd

            </Card>
            
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} >
            <Card title="Post">

            </Card>
            
          </Col>

        </Row>

      





      </Layout>


    </div>
  );
}

export default Profile;
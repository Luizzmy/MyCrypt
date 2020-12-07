import React, { useState, useEffect } from 'react';
import { useContextData } from '../hooks/context';
import { getUserPost } from '../services/post';
import { Layout, Menu, Row, Col, Card, Avatar } from 'antd'
import PostCard from '../components/PostCard'
import CreatePostForm from '../components/createPostForm'
import UserUpdateProf from '../components/userForm'

const { Header, Footer, Sider, Content } = Layout;

const Profile = () => {
  // crud
  const { user } = useContextData()

  const [posts, setPost] = useState([])

  useEffect(() => {
    async function getPosts() {
      const { data } = await getUserPost()
      setPost(data)
    }
    getPosts()

  }, [])



  const postsFiltered = {
    'POSTES': [],
  }



  posts.forEach(post => {
    postsFiltered[post.status] = [...postsFiltered[post.status], post]
  })
  return (
    <div>
      <h1>profile test</h1>
      <Layout>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={12} lg={12} >
            <Card title="User profile">
              {/* {postsFiltered.Post.map(post => <PostCard {...post}/>)} */}
            m excepturi illum natus voluptas voluptatibus.
            Incidunt rerum optio numquam distinctio,dsd

            </Card>
            <Card title="Update your data">


            </Card>

          </Col>
          <Col xs={24} sm={24} md={12} lg={12} >
            <Card title="Make a post">
              <CreatePostForm />
              <br />
              <hr />
            </Card>

          </Col>

           


        </Row>







      </Layout>


    </div>
  );
}

export default Profile;
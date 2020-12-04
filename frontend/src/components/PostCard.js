import React from 'react'
import { Card, Avatar, Typography } from 'antd'
import { Link } from 'react-router-dom'

const { Title } = Typography


function PostCard({ title, comment, image, _id,}) {
  return (
    <Card
      type="inner"
      title={title}
      extra={<Link to={`/post/${_id}`}>Details</Link>}
      style={{ marginBottom: '8px' }}
      hoverable
    >
      <center>
        <Avatar src={image} style={{ backgroundColor: 'white' }} />
      </center>
      {comment}
    </Card>
  )
}

export default PostCard


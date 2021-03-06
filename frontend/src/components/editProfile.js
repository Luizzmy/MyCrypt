import React, {useState, useEffect} from 'react'
import {Form, Button, Input, InputNumber, Select, Upload} from "antd"
import {LoadingOutlined, PlusOutlined} from '@ant-design/icons'
import { updateUserFn} from '../services/auth'
import {useHistory}  from 'react-router-dom'
import { useContextData } from '../hooks/context'
import axios from 'axios'

const cloudinaryAPI= 'https://api.cloudinary.com/v1_1/devykcsdg/image/upload'


function EditProfile() {

    const user=useContextData()
    const [img, setImg]=useState(null)
    const [loading, setLoading]=useState(null)

    const [form]=Form.useForm()

    async function handleSubmit(values){
        const userUpdated={
            ...values,
            image:img
        }
        const {data:newUser}= await updateUserFn(userUpdated)
        setImg(null)
        refreshPage()
    }

    async function handleUploadFile(file) {
        // console.log(info);
        setLoading(true)
        const data = new FormData()
    
        data.append('file', file)
        data.append('upload_preset','uploadcrypto')
        
    
        const { data: { secure_url } } = await axios.post(cloudinaryAPI, data)
    
        setImg(secure_url);
        setLoading(false)
      }

    const refreshPage = ()=>{
      window.location.reload();
   }

   const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

    return (
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Form.Item name="name" label="First Name:" initialValue={user.user.name}>
          <Input />
        </Form.Item>
        <Form.Item name="lastname" label="Last Name:" initialValue={user.user.lastname}>
          <Input />
        </Form.Item>
        <Form.Item name="email" label="Email:" initialValue={user.user.email}>
          <Input />
        </Form.Item>
        <Form.Item name="image" label="Image:">
        <Upload
          name="image"
          showUploadList={false}
          beforeUpload={handleUploadFile}
        >
          {img ? <img src={img} style={{ width: '100%' }} /> : uploadButton}
        </Upload>
      </Form.Item>
        <Button type="primary" block size="middle" htmlType="submit">Edit Recomendation</Button>
      </Form>
    )
}

export default EditProfile

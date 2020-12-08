import React, {useState} from 'react'
import axios from 'axios'
import {useContextData} from '../hooks/context'

function UploadProfilePic() {
const [image,setImage]= useState(null)
const [status,setStatus]=useState('select a file')
const {addProfilePic}= useContextData()

const handleSubmit= e=>{
    e.preventDefault()
    addProfilePic(image)
}

const handleUploadPhoto = async ({target: {files}}) =>{
    setStatus('loading...')

    const cloudinaryAPI= 'https://api.cloudinary.com/v1_1/devykcsdg/image/crypto'

    const data=new FormData()
    data.append('file', files[0])
    data.append('ipload_preset', 'uploadcrypto')

    const {data:{secure_url}}= await axios.post(cloudinaryAPI, data)
    setImage(secure_url)
    setStatus('add img...')
}

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input type="file" name="profile-pic" id="profile-pic" onChange={handleUploadPhoto}/>
            <button type="submit" disabled={!image}>{status}</button>
        </form>
            
        </div>
    )
}

export default UploadProfilePic

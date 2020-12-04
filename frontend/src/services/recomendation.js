import axios from 'axios'

const prefix = '/recoms'

const baseURL = process.env.NODE_ENV === 'development' ?
  `http://localhost:3000${prefix}` :
  prefix

const recomnService = axios.create({
  baseURL,
  withCredentials: true
})
// export service-functions to target page

// get 
export const getReco = () => recomnService.get('/allRecomendations')

// details
export const recoDetails = id => recomnService.get(`/${id}`)

// create
export const recoCreate = recomendation => recomnService.post('', recomendation)

// edit-update
export const recoUpdate = (id, recomendation) => recomnService.put(`/${id}`, recomendation)

//delete
export const recoDelete = id => recomnService.delete(`/${id}`)
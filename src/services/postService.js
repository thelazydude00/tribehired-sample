import axios from 'axios'
import { baseUrl } from '../config'

export const getPost = async (postId) => {
    const response = await axios.get(`${baseUrl}/posts/${postId}`)

    return response.data
}

export const getPosts = async () => {
    const response = await axios.get(`${baseUrl}/posts`)

    return response.data
}

export default {
    getPost,
    getPosts,
}
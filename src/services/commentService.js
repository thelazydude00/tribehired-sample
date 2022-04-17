import axios from 'axios'
import { baseUrl } from '../config'

export const getComments = async () => {
    const response = await axios.get(`${baseUrl}/comments`)

    return response.data
}

export default {
    getComments
}
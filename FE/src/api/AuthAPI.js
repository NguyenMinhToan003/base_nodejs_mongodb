import axios from 'axios'
const API_URL = 'http://localhost:4040'
export const getDataUser = async (account, password) => {
  const res = await axios.post(`${API_URL}/v1/auth/login`, { account, password })
  return res.data
}
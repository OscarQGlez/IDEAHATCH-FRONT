import { api } from './api'

export const getAllUsers = async () => {
  try {
    const { data } = await api.get('/user', {
        headers: {
        token: localStorage.getItem('token'),
      },
    })
    return data
  } catch (err) {
    console.error('Cannot get users', err)
  }
}
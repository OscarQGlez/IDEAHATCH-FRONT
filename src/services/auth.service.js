import { api } from "./api";

export const login = async (email, password) => {
  try {
    console.log(email, password)
    const { data } = await api.post('/auth/login', { email, password })
    console.log(data)
    localStorage.setItem('token', data.token)

  } catch (error) {
    console.error('Cannot log in')
  }
}


export const signup = async (name, email, password) => {
  try {
    const { data } = await api.post('/auth/signup', { firstName: name, email, password })
    localStorage.setItem('token', data.token)
  } catch (error) {
    console.error('Something goes wrong', error)
  }
}
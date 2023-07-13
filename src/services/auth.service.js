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

export const signup = async (name, email, password, lastName, mobilePhone,  dateBirth, country) => {
  try {
    const { data } = await api.post('/auth/signup', { name, email, password, lastname:lastName , mobile_Phone:mobilePhone, date_of_Birth: dateBirth, country })
    localStorage.setItem('token', data.token)
  } catch (error) {
    console.error('Something goes wrong', error)
  }
}
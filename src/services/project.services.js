import { api } from "./api";

export const createProject = async (body) => {
    try {
        const {data} = await api.post('/project/newproject',body, {headers: {token: localStorage.getItem( 'token' ) } } )
        return data
    } catch (error) {
        console.error('Error al crear un Proyecto ', error)
    }   
}

export const getAllProjectEager = async () => {
    try {
        const { data } = await api.get('/project/eager', {headers: {token: localStorage.getItem( 'token' ) } } )
        return data
    } catch (error) {
        console.error('error al ver todos los Proyectos', error)
    }
}


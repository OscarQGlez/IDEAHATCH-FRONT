import { api } from "./api";

 export const getAllCategories = async () => {
    try {
      const { data } = await api.get(`/categories/`, {
        headers: { token: localStorage.getItem("token") },
      });
      return data;
    } catch (error) {
      console.error("error al traer destino", error);
    }
  };
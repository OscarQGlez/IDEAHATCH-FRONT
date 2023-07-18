import { useState, useEffect } from 'react';
import {getAllCategories} from  '../../services/categories.service'

function CategoriesSelect(){
    const [selectcategories, setSelectCategories] = useState([]);

    useEffect(() => {
        async function fetchCategories() {
            try {
            const selectcategories = await getAllCategories() 
            console.log(selectcategories)
            setSelectCategories(selectcategories)
            } catch (error) {
            console.error('Error al obtener las Categories:', error);
            }
        }

        fetchCategories();
    }, []);
}

const handleCategoriesChange = (event) => {
    // Manejar el cambio de la localización seleccionada
    const selectedCategories = event.target.value;
    console.log('Categoria seleccionada:', selectedCategories);
  };
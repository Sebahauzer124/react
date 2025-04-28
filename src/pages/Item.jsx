import React from 'react';
import {ItemDetailContainer, ItemListContainer, Loader} from "../components"
import { useProductsById } from '../hooks';
import { useParams } from 'react-router-dom';



export const Item = ()=>{
    const {id} =useParams()
    const {product,loading} = useProductsById(id) 
    return loading ? <Loader/>: <ItemDetailContainer product = {product} />
}
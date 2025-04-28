import React from "react";
import { ItemListContainer } from "../components";
import { useProductsByCategory } from "../hooks";
import { useParams } from "react-router-dom";

export const Category = () => {
    const {categoryId}=useParams();
    const {products}=useProductsByCategory(categoryId);
    return (
        
        <ItemListContainer products={products}/>
    );
};

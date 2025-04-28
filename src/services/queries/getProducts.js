import axios from "axios";
import { BASE_URL } from "../config/api";

export async function getProducts() {
  return await axios.get(`${BASE_URL}/products`);
}

export async function getProductsByCategory(id) {
  return await axios.get(`${BASE_URL}/products/category/${id}`)
}

export async function getProductsById(id){
  return await axios.get(`${BASE_URL}/products/${id}`)
}

  


import axios from 'axios';
// import {getFilter} from './filters.js';
const BASE_URL = 'https://food-boutique.b.goit.study/api/products';

export async function getCategories() {
  const response = await axios.get(
    `https://food-boutique.b.goit.study/api/products/categories`
  );
  return response.data;
}
import axios from 'axios';
import {getFilter} from './filters.js';
const BASE_URL = 'https://food-boutique.b.goit.study/api/products';

export async function getCategories() {
	const response = await axios.get(`https://food-boutique.b.goit.study/api/products/categories`);
	return response.data;
}
// import { getFilter } from './filters.js';
const BASE_URL = 'https://food-boutique.b.goit.study/api/products';

export const fetchPopularProducts = () => {
  const params = {
    limit: 5,
  };
  return axios(`${BASE_URL}/popular`, { params });
};

export const fetchDiscountProducts = () => {
  return axios(`${BASE_URL}/discount`);
};

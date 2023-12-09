import axios from 'axios';
<<<<<<< HEAD
import {getFilter} from './filters.js';
const BASE_URL = 'https://food-boutique.b.goit.study/api/products';

export async function getCategories() {
	const response = await axios.get(`https://food-boutique.b.goit.study/api/products/categories`);
	return response.data;
}
=======
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
>>>>>>> 5a9bcaa803892034f3227ed681c212a6366cefff

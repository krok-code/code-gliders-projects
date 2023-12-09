import axios from 'axios';
// import { getFilter } from './filters.js';
const BASE_URL = 'https://food-boutique.b.goit.study/api/products';

export const fetchPopularProducts = () => {
  const params = {
    limit: 5,
  };
  return axios(`${BASE_URL}/popular`, { params });
};

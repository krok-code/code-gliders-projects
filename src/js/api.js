import axios from 'axios';
// import {getFilter} from './filters.js';
const BASE_URL = 'https://food-boutique.b.goit.study/api/products';

export async function getCategories() {
  const response = await axios.get(
    `https://food-boutique.b.goit.study/api/products/categories`
  );
  return response.data;
}

export const fetchPopularProducts = () => {
  const params = {
    limit: 5,
  };
  return axios(`${BASE_URL}/popular`, { params });
};

export const fetchDiscountProducts = () => {
  return axios(`${BASE_URL}/discount`);
};

//**Products list */
export async function fetchProductsFromApi(page, limit) {
  try {
    const response = await axios.get(apiUrl, {
      params: {
        byABC: true,
        byPrice: true,
        byPopularity: true,
        page,
        limit,
      },
    });

    const { results, page: currentPage, totalPages } = response.data;

    if (Array.isArray(results)) {
      return { products: results, currentPage, totalPages };
    } else {
      console.error(
        'Received data does not contain an array of products:',
        response.data
      );
      return null;
    }
  } catch (error) {
    console.error('Error fetching products:', error);
    return null;
  }
}
//**Products list END */

import axios from 'axios';
// import {getFilter} from './filters.js';
const BASE_URL = 'https://food-boutique.b.goit.study/api/products';

export async function getCategories() {
  const response = await axios.get(
    `https://food-boutique.b.goit.study/api/products/categories`
  );
  return response.data;
}

export async function getAllProducts(queryParams) {
  let { keyword, category, page, limit, filterSearch } = queryParams
  
  const screenWidth = window.innerWidth;

  if (screenWidth < 768) {
    limit = 6;
  } else if (screenWidth >= 768 && screenWidth < 1440) {
    limit = 8;
  } else {
    limit = 9;
  }

  const params = new URLSearchParams({
    page,
    limit,
  })
  if (keyword !== '') {
    params.append('keyword', keyword);
  }

  if ((category !== '') && (category !== 'Show_all') && (category !== 'Categories')) {
    params.append('category', category);
  }

  const response = await axios.get(`${BASE_URL}?${params}&${getFilter(filterSearch)}`);
  return response.data;
}

export async function getDiscountProducts() {
  const response = await axios.get(
    `https://food-boutique.b.goit.study/api/products/discount`
  );
  return response.data;
}

export async function getPopularProducts() {
  const response = await axios.get(
    `https://food-boutique.b.goit.study/api/products/popular`
  );
  return response.data;
}

export async function getProductsByQuery(queryParams) {
  let response;
  let { keyword, category, page = 1, limit, filterSearch } = queryParams;

  const screenWidth = window.innerWidth;

  if (screenWidth < 768) {
    limit = 6;
  } else if (screenWidth >= 768 && screenWidth < 1440) {
    limit = 8;
  } else {
    limit = 9;
  }

  const params = new URLSearchParams({
    limit,
    page,
  });

  if (keyword !== '') {
    params.append('keyword', keyword);
  }

  if ((category !== '') && (category !== 'Show_all') && (category !== 'Categories')) {
    params.append('category', category);
  }

  response = await axios.get(`${BASE_URL}?${params}&${getFilter(filterSearhc)}`);
  return response.data;
}

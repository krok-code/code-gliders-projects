import axios from 'axios';
import {getFilter} from './filters.js';
const BASE_URL = 'https://food-boutique.b.goit.study/api/products';

// get
export async function getProducttById(id) {
    const response = await axios.get(
      `https://food-boutique.b.goit.study/api/products/${id}`
    );
    return response.data;
  }
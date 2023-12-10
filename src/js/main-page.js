import iconsPath from '../img/icons.svg';
import pathToSvg from '../img/icons.svg';
import { getLength } from './header.js';
import {
openDropDown,
  rotateButton,
  changeCategoriesValue,
  changeTypesValue,
  collectQueryParameters,
  renderCategoryList,
} from './filters.js';
import {
  getProductsByQuery,
  getAllProducts,
  getDiscountProducts,
  getPopularProducts,
  getProducttById,
  getCategories,
} from './api.js';
import { renderMarkup } from './model/cards.js';
import { openProductModal } from './button-cart.js';
import { saveToLocalStorage } from './add-to-the-cart.js';
import localStorageAPI from './local-storage.js';
import { renderSorryMessage } from './model/sorry.js';

const searchForm = document.querySelector('.filters-form');
const categoriesInput = document.querySelector('.filters-categories');
const allSearchInput = document.querySelector('.filters-allTypes');
const downBtn = document.querySelectorAll('.filters-down-svg');
const allTypesItem = document.querySelectorAll('.filters-allTypes-item');
const productsListGeneral = document.querySelector('.products-list-general');
const productListDiscount = document.querySelector('.products-list-discount');
const productListPopular = document.querySelector('.products-list-popular');

export let arrProducts = [];

const fillarrProducts = () => {
  const dataFromLS = localStorageAPI.load('product');

  if (dataFromLS === undefined) {
    document.querySelector('#header-length').innerHTML = '0';
    return;
  }
  document.querySelector('#header-length').innerHTML = dataFromLS.length;
  arrProducts = dataFromLS;
};
fillarrProducts();

function loadQueryParamsFromLS() {
  const paramsFromLS = localStorageAPI.load('queryParams');
  if (!paramsFromLS) {
    localStorageAPI.save('queryParams', {
      keyword: '',
      category: '',
      page: 1,
      limit: 9,
    });
  }
}
loadQueryParamsFromLS();
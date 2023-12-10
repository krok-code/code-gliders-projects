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

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const listOfCategories = await getCategories();
    renderCategoryList(listOfCategories);
    document.querySelectorAll('.filters-categories-item').forEach(item => {
      item.addEventListener('click', changeCategoriesValue);
    });

    const paramsFromLS = localStorageAPI.load('queryParams');
    const allProduct = await getAllProducts(paramsFromLS);
    const arrOfAllProducts = allProduct.results;
    renderMarkup(arrOfAllProducts, 'general', productsListGeneral);

    let cards = document.querySelectorAll('.product-card-general');
    cards.forEach(card => {
      card.addEventListener('click', openProductModal);
    });

    const arrOfDiscountProducts = await getDiscountProducts();
    renderMarkup(arrOfDiscountProducts, 'discount', productListDiscount);
    let cardsDisc = document.querySelectorAll('.discount-product-card');
    cardsDisc.forEach(card => {
      card.addEventListener('click', openProductModal);
    });

    const arrOfPopularProducts = await getPopularProducts();
    renderMarkup(arrOfPopularProducts, 'popular', productListPopular);
    let cardsPop = document.querySelectorAll('.popular-product-card');
    cardsPop.forEach(card => {
      card.addEventListener('click', openProductModal);

      const addToCartBtn = document.querySelectorAll('.js-addToCart-btn');
      addToCartBtn.forEach(btn => {
        btn.addEventListener('click', saveToLocalStorage);
      });
    });
  } catch (error) {
    console.log(error);
  }
});

categoriesInput.addEventListener('click', openDropDown);
allSearchInput.addEventListener('click', openDropDown);
downBtn.forEach(btn => {
  btn.addEventListener('click', rotateButton);
});

allTypesItem.forEach(item => {
  item.addEventListener('click', changeTypesValue);
});


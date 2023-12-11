import {
  openDropDown,
  rotateButton,
  changeCategoriesValue,
  changeTypesValue,
  collectQueryParameters,
  renderCategoryList,
} from './drop-down.js';
import { getProductsByQuery, getCategories } from './api.js';
import localStorageAPI from './local-storage.js';

export let arrProducts = [];

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
    // Отримання списку категорій
    const listOfCategories = await getCategories();

    // Відображення списку категорій у дропдауні
    renderCategoryList(listOfCategories);

    document.querySelectorAll('.filters-categories-item').forEach(item => {
      item.addEventListener('click', changeCategoriesValue);
    });
  } catch (error) {
    console.log(error);
  }
});

// Робота дроп-даунів + інпут

categoriesInput.addEventListener('click', openDropDown);
allSearchInput.addEventListener('click', openDropDown);
downBtn.forEach(btn => {
  btn.addEventListener('click', rotateButton);
});

allTypesItem.forEach(item => {
  item.addEventListener('click', changeTypesValue);
});

// Фільтрація товарів

searchForm.addEventListener('submit', async event => {
  event.preventDefault();
  try {
    const queryParameters = collectQueryParameters();
    const response = await getProductsByQuery(queryParameters);
    const productForRender = response.results;
    productsListGeneral.innerHTML = '';
    if (productForRender.length === 0) {
      const sorryMessage = renderSorryMessage();
      productsListGeneral.insertAdjacentHTML('beforeend', sorryMessage);
    } else {
      renderMarkup(productForRender, 'general', productsListGeneral);
    }
    let cardsDisc = document.querySelectorAll('.product-card-general');
    cardsDisc.forEach(card => {
      card.addEventListener('click', openProductModal);
    });

    const addToCartBtn = document.querySelectorAll('.js-addToCart-btn');
    addToCartBtn.forEach(btn => {
      btn.addEventListener('click', saveToLocalStorage);
    });
  } catch (error) {
    console.log(error);
  }
});

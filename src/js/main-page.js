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
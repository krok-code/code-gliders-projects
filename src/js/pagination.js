import Pagination from 'tui-pagination';
import { getProductsByQuery } from './api.js';
import { renderMarkup } from './templates/cards.js';
import { collectQueryParameters } from './drop-downs.js';
import { renderSorryMessage } from './templates/renderSorryMessage.js';
import { openProductModal } from './card-button.js';
import { saveToLocalStorage } from './addToCart.js';



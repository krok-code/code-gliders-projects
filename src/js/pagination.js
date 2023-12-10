import Pagination from 'tui-pagination';
import { getProductsByQuery } from './api.js';
import { renderMarkup } from './templates/cards.js';
import { collectQueryParameters } from './drop-downs.js';
import { renderSorryMessage } from './templates/renderSorryMessage.js';
import { openProductModal } from './card-button.js';
import { saveToLocalStorage } from './addToCart.js';


const productsListGeneral = document.querySelector('.products-list-general');
const container = document.querySelector('#tui-pagination-container');




const options = {
  itemsPerPage: 1,
  visiblePages: 4,
  page: 1,
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton: `<a href="#" class="icon tui-page-btn tui-{{type}}">
      <span class="tui-ico-{{type}}">{{type}}>
      </span>
      </a>`,
    disabledMoveButton: `<span class="tui-page-btn tui-is-disabled tui-{{type}}">
      <span class="tui-ico-{{type}}">{{type}}>
      </span>
      </span>`,
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};

const pagination = new Pagination(container, options);
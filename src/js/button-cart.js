import { getProducttById } from './api.js';
import { onRenderModalProduct, onClickCloseModal, onClickOutModalProduct, onEscapeCloseModal, closeModal, addToCartTheProduct } from './templates/modal-products.js';
import { addToCardFromModal } from './main-page.js';

export async function openProductModal(event) {

	if (event.target.closest('.js-addToCart-btn')) {
		return;
	}
}

const ParentElement = event.target.closest('li');
const cardButton = ParentElement.querySelector('.js-addToCart-btn');
const productId = cardButton.getAttribute('data-id');
const productInfo = await getProducttById(productId);
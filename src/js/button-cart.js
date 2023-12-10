import { getProducttById } from './api.js';
import { onRenderModalProduct, onClickCloseModal, onClickOutModalProduct, onEscapeCloseModal, closeModal, addToCartTheProduct } from './templates/modal-products.js';
import { addToCardFromModal } from './main-page.js';

export async function openProductModal(event) {

	if (event.target.closest('.js-addToCart-btn')) {
		return;
	}

import localStorageAPI from "./local-storage.js";
import iconsPath from '../img/icons.svg';
import emptyCart from '../img/yellow-shopping-basket.webp';
import emptyCartRet from '../img/yellow-shopping-basket@2x.webp';
import emptyCartMob from '../img/yellow-shopping-basket_mob.webp';
import emptyCartMobRet from '../img/yellow-shopping-basket_mob@2x.webp';
import emptyCartBase from '../img/yellow-shopping-basket.png';

import { getLength } from "./header.js";
import { order } from "./api.js";

export function addNumberProd() {
	const arrFromLS = localStorageAPI.load('product');
	document.querySelector('.cart-number-purchases').innerHTML = `${arrFromLS ? arrFromLS.length : '0'
  } `;
}

addNumberProd();

const cartProducts = localStorageAPI.load('product');
document.addEventListener('DOMContentLoaded', event => {
	if (cartProducts.length === 0) {
		document.querySelector('.section-cart').innerHTML = renderCartEmpty();
	}
	addScroll();
});
import localStorageAPI from "./local-storage.js";
import iconsPath from '../img/icons.svg';
import emptyCart from '../images/yellow-shopping-basket.webp';
import emptyCartRet from '../images/yellow-shopping-basket@2x.webp';
import emptyCartMob from '../images/yellow-shopping-basket_mob.webp';
import emptyCartMobRet from '../images/yellow-shopping-basket_mob@2x.webp';
import emptyCartBase from '../images/yellow-shopping-basket.png';

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
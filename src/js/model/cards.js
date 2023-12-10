import iconsPath from '../../img/icons.svg';
import { arrProducts } from '../main-page';

export function createProductCard(product) {
	let { img, name, category, size, popularity, price, _id, is10PercentOff } = product;
	const isInCart = arrProducts.some(product => product.id === _id);

	return `
      <li class="product-card-general">
          <div class="img-wrapper">
            <img
              class="card-img"
              src="${img}"
              alt="${name}"
              loading="lazy"
            />
          </div>
  
              <div class="general-card-container" >
                  <h3 class="general-card-title">${name}</h3>
                  <div class="general-span-container">
                  <span class="general-span-info">Category:<span class="span-info-value">${category}</span></span>

                  <span class="general-span-info">Size:<span class="span-info-value">${size}</span></span>

                  <span class="general-span-info">Popularity:<span class="span-info-value">${popularity}</span></span>
                  </div>
              </div>
    
              <div class="general-card-price">
                  <span class="general-span-price">&#36;${price}</span>
                  <button data-id=${_id} type="submit" class="addToCart-btn js-addToCart-btn" ${isInCart ? 'disabled': ''}>
                      <svg class="cart-svg " width="18" height="18">
                          <use href="${iconsPath}${isInCart ? '#icon-checkmark' : '#icon-shopping-cart'}"></use>
                         
                      </svg>  
                  </button>
              </div>
              <svg class="general-discount-svg ${is10PercentOff ? "discount-label" : ""}" width="60" height="60">
                <use href="${iconsPath}#icon-discount"></use>
              </svg>
      </li>
      `;
}

export function createPopularCard(product) {
  const { img, name, category, size, popularity, _id } = product;
  const isInCart = arrProducts.some(product => product.id === _id);

  return `
        <li class="popular-product-card">
            <div class="poppular-img-wrapper">
              <img
                class="popular-card-img"
                src="${img}"
                alt="${name}"
                loading="lazy"
              />
            </div>
    
                <div class="popular-card-info" >
                    <h3 class="popular-card-title">${name}</h3>
                    <div class="popular-span-container">
                    <span class="popular-span-info">Category: <span class="span-info-value">${category}</span></span>
                    <span class="popular-span-info">Size: <span class="span-info-value">${size}</span></span>
                    <span class="popular-span-info">Popularity: <span class="span-info-value">${popularity}</span></span>
                    </div>
                </div>
                    
                <button data-id=${_id} type="submit" class="popular-card-btn js-addToCart-btn" ${isInCart ? 'disabled': ''}>
                    <svg class="popular-cart-svg" width="12" height="12">
                        <use href="${iconsPath}${isInCart ? '#icon-checkmark' : '#icon-shopping-cart'}"></use>
                    </svg>
                </button>
            
        </li>
        `;
}
import { fetchDiscountProducts, fetchPopularProducts } from './api';

const refs = {
  popular: document.querySelector('.popular_list'),
  discount: document.querySelector('.discount_list'),
};

document.addEventListener('DOMContentLoaded', fetchPopular);
document.addEventListener('DOMContentLoaded', fetchDiscount);

async function fetchPopular() {
  try {
    const { data } = await fetchPopularProducts();
    refs.popular.insertAdjacentHTML('beforeend', createPopularList(data));

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

function createPopularList(array) {
  return array
    .map(
      card => ` <li class="card_item">
      <div class="card_img">
        <img
          src=${card.img}
          width="56"
          height="56"
          alt=${card.name}
        />
      </div>
      <div class="card_elements">
        <h3 class="card_title">${card.name}</h3>
        <p class="card_text card_text--margin_b">
          <span class="card_el">Category:</span>&nbsp;<span>${card.category}</span>
        </p>
        <p class="card_text">
          <span class="card_el">Size:</span>&nbsp;<span>${card.size}</span
          ><span class="card_el card_el--margin_l">Popularity:</span>&nbsp;<span
            >${card.popularity}</span
          >
        </p>
      </div>
      <button type="button" class="card_btn">
        <svg class="order_btn" width="12" height="12">
          <use href="../svg/icons.svg#icon-cart-hover"></use>
        </svg>
      </button>
    </li>`
    )
    .join('');
}

async function fetchDiscount() {
  try {
    const { data } = await fetchDiscountProducts();
    refs.discount.insertAdjacentHTML(
      'beforeend',
      createDiscountList(data.slice(0, 2))
    );
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

function createDiscountList(array) {
  return array
    .map(
      card => `
    <li class="discount_card_item">
      <div class="discount_card_img">
        <img
          src=${card.img}
          width="114"
          height="114"
          alt=${card.name}
        />
        </div>
        <div class="svg_box">
          <svg></svg>
        </div>

      <div class="discount_card_elements">
        <h3 class="card_title--discount card_title">${card.name}</h3>
        <span class="card_title--price card_title ">${card.price}</span>

        <button type="button" class="discount_card_btn">
          <svg class="discount_order_btn" width="12" height="12">
          <use href="../svg/icons.svg#icon-cart-hover"></use>
          </svg>
        </button>
          
      </div>  
    </li> `
    )
    .join('');
}

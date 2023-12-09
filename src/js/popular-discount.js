import { fetchPopularProducts } from './api';

const refs = {
  popular: document.querySelector('.popular_list'),
  discount: document.querySelector('.discount_list'),
};

document.addEventListener('DOMContentLoaded', fetchPopular);

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

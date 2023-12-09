import { addToCart, checkIfInCart } from './actions-cards';

import { fetchProductsFromApi, apiUrl } from './api';

document.addEventListener('DOMContentLoaded', async () => {
  const productListElement = document.getElementById('productList');

  if (!productListElement) {
    console.error("Element with id 'productList' not found.");
    return;
  }

  const defaultPage = 1;
  const defaultLimit = 9;

  async function fetchProducts(page = defaultPage, limit = defaultLimit) {
    try {
      const { products, currentPage, totalPages } = await fetchProductsFromApi(
        page,
        limit
      );

      if (products) {
        await renderProductList(products);
        updatePagination(currentPage, totalPages);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  // Функція для створення розмітки HTML
  function createProductCard(product) {
    // Визначаємо текст кнопки "Add to Cart" або порожній рядок в залежності від наявності продукту в корзині
    const cartButtonText = checkIfInCart(product._id) ? '' : 'Add to Cart';

    // Створюємо рядок HTML для карточки продукту
    return `
    <li class="product-card">
      <div class="ooverlay">
          <img width="140px" height="140px" class="product-image" ${
            product.img ? `src="${product.img}"` : 'src="./default-image.jpg"'
          } alt="${product.name}">
      </div>
      <h3 class="product-name">${product.name}</h3>
      <p class="product-category">
        <span class="label-category">Category:</span> ${product.category} 
      </p>
      <p class="product-size">
        <span class="label-size">Size:</span> ${product.size}
      </p>
      <p class="product-popularity">
        <span class="label-popularity">Popularity:</span> ${product.popularity}
      </p>
      <p class="product-price">$${product.price.toFixed(2)}</p>
      <button class="cart-button" data-product-id="${
        product._id
      }">${cartButtonText}</button>
    </li>`;
  }

  // Все все що вище вже запущено////

  // Функція для відображення списку продуктів
  async function renderProductList(products) {
    // Очищаємо вміст елементу з id="productList"
    productListElement.innerHTML = '';

    // Проходимося по кожному продукту в отриманому масиві
    for (const product of products) {
      // Створюємо HTML-представлення карточки продукту
      const productCard = createProductCard(product);

      // Додаємо HTML-представлення продукту в кінець списку продуктів
      productListElement.insertAdjacentHTML('beforeend', productCard);
    }
  }

  /////////////////

  productListElement.addEventListener('click', async event => {
    // Перевіряємо, чи клікнуто по елементу з класом "cart-button"
    if (event.target.classList.contains('cart-button')) {
      // Отримуємо ідентифікатор товару з атрибуту "data-product-id"
      const productId = event.target.dataset.productId;
      // Викликаємо функцію для додавання товару в кошик та очікуємо завершення операції
      await addToCart(productId);
    }
  });

  // Виклик функції для отримання першої сторінки товарів
  fetchProducts();
});

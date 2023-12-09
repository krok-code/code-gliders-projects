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
           <div class="card-img-wrp">
             <img class="product-image" ${
               product.img
                 ? `src="${product.img}"`
                 : 'src="./default-image.jpg"'
             } alt="${product.name}">
           </div>
                 
                 <div class="general-card-container">
                   <h3 class="product-name">${product.name}</h3>
                   <p class="product-category">
                     <span class="label-category">Category:</span> ${
                       product.category
                     }
                   </p>
                   <p class="product-size">
                     <span class="label-size">Size:</span> ${product.size}
                   </p>
                   <p class="product-popularity">
                     <span class="label-popularity">Popularity:</span> ${
                       product.popularity
                     }
                   </p>
                 </div>
                 <p class="product-price">$${product.price.toFixed(2)}</p>
                 <button class="cart-button" data-product-id="${product._id}">
           
              <svg class="cart-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M2.70005 0.900024C2.46135 0.900024 2.23244 0.994846 2.06365 1.16363C1.89487 1.33241 1.80005 1.56133 1.80005 1.80002C1.80005 2.03872 1.89487 2.26764 2.06365 2.43642C2.23244 2.60520 2.46135 2.70002 2.70005 2.70002H3.79805L4.07255 3.79982C4.07528 3.81249 4.07828 3.82509 4.08155 3.83762L5.30375 8.72462L4.50005 9.52742C3.36605 10.6614 4.16885 12.6 5.77265 12.6H13.5C13.7387 12.6 13.9677 12.5052 14.1364 12.3364C14.3052 12.1676 14.4 11.9387 14.4 11.7C14.4 11.4613 14.3052 11.2324 14.1364 11.0636C13.9677 10.8948 13.7387 10.8 13.5 10.8H5.77265L6.67265 9.90002H12.6C12.7671 9.89993 12.9309 9.85333 13.073 9.76543C13.2151 9.67752 13.33 9.5518 13.4046 9.40232L16.1046 4.00232C16.1732 3.86515 16.2056 3.71273 16.1987 3.55953C16.1918 3.40633 16.1458 3.25744 16.0652 3.12698C15.9846 2.99652 15.872 2.88882 15.7381 2.81409C15.6042 2.73937 15.4534 2.70011 15.3 2.70002H5.65205L5.37305 1.58132C5.32429 1.3867 5.21191 1.21395 5.05374 1.09051C4.89557 0.967076 4.70068 0.90003 4.50005 0.900024H2.70005ZM14.4 14.85C14.4 15.2081 14.2578 15.5514 14.0046 15.8046C13.7515 16.0578 13.4081 16.2 13.05 16.2C12.692 16.2 12.3486 16.0578 12.0955 15.8046C11.8423 15.5514 11.7 15.2081 11.7 14.85C11.7 14.492 11.8423 14.1486 12.0955 13.8954C12.3486 13.6423 12.692 13.5 13.05 13.5C13.4081 13.5 13.7515 13.6423 14.0046 13.8954C14.2578 14.1486 14.4 14.492 14.4 14.85ZM5.85005 16.2C6.20809 16.2 6.55147 16.0578 6.80464 15.8046C7.05782 15.5514 7.20005 15.2081 7.20005 14.85C7.20005 14.492 7.05782 14.1486 6.80464 13.8954C6.55147 13.6423 6.20809 13.5 5.85005 13.5C5.49201 13.5 5.14863 13.6423 4.89545 13.8954C4.64228 14.1486 4.50005 14.492 4.50005 14.85C4.50005 15.2081 4.64228 15.5514 4.89545 15.8046C5.14863 16.0578 5.49201 16.2 5.85005 16.2Z" fill="#E8E8E2"/>
              </svg>
           
            ${cartButtonText}
                   </button>
         </li>
   `;
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

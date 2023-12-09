import { addToCart, checkIfInCart } from './actions-cards';

document.addEventListener('DOMContentLoaded', async () => {
  // Отримуємо посилання на елементи DOM з відповідними ідентифікаторами
  const productListElement = document.getElementById('productList');

  // Перевіряємо, чи були успішно знайдені обидва елементи
  if (!productListElement) {
    // Якщо хоча б один елемент не знайдено, виводимо повідомлення про помилку та припиняємо виконання коду
    console.error("Element with id 'productList' or 'pagination' not found.");
    return;
  }

  // Задаємо значення за замовчуванням для номера сторінки
  const defaultPage = 1;
  // Задаємо значення за замовчуванням для ліміту товарів на сторінці
  const defaultLimit = 9;
  // URL API для отримання інформації про товари
  const apiUrl = 'https://food-boutique.b.goit.study/api/products';

  // Функція для отримання та відображення списку продуктів
  async function fetchProducts(page = defaultPage, limit = defaultLimit) {
    try {
      // Виконуємо HTTP-запит за допомогою fetch
      const response = await fetch(
        `${apiUrl}?byABC=true&byPrice=true&byPopularity=true&page=${page}&limit=${limit}`
      );

      // Перевіряємо, чи запит був успішним
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      // Розпаковуємо відповідь сервера у форматі JSON
      const { results, page: currentPage, totalPages } = await response.json();

      // Перевіряємо, чи дані є масивом продуктів
      if (Array.isArray(results)) {
        // Викликаємо функцію для відображення продуктів
        await renderProductList(results);

        // Оновлюємо пагінацію на сторінці
        updatePagination(currentPage, totalPages);
      } else {
        // Якщо дані не є масивом, виводимо помилку у консоль
        console.error(
          'Received data does not contain an array of products:',
          response.data
        );
      }
    } catch (error) {
      // Виводимо помилку у консоль, якщо її вдалося перехопити
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

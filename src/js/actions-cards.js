import Swal from 'sweetalert2';

// Функція, яка викликається при додаванні продукту до кошика
export async function addToCart(productId) {
  // Знаходимо кнопку, яка відповідає за додавання продукту
  console.log('hello');
  const button = document.querySelector(
    `.cart-button[data-product-id="${productId}"]`
  );

  // Перевіряємо, чи кнопка існує та чи її клас не містить "added"
  if (button && !button.classList.contains('added')) {
    // Додаємо клас "added" до кнопки
    button.classList.add('added');

    // Змінюємо вміст кнопки, додаючи піктограму галочки
    button.innerHTML = `
      <span class="icon-container">
        <svg class="check-icon" 
          width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="none">
          <path d="M15 4.5L6.75 12.75L3 9" stroke="#E8E8E2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
    `;

    // Функція для відображення сповіщення
    function showNotification(message) {
      // Викликаємо метод Swal.fire() з параметрами сповіщення

      Swal.fire({
        text: message,
        icon: 'success',
        timer: 2000,
        showConfirmButton: false, // Приховати кнопку OK
        customClass: {
          container: 'custom-swal2-container',
        },
      });
    }
    // Викликаємо функцію для відображення сповіщення
    showNotification('Product added to the cart');
  }
}

// Функція для перевірки наявності товару в кошику та використання localStorage
export async function checkIfInCart(productId) {
  try {
    // Отримуємо дані з localStorage
    const cartData = JSON.parse(localStorage.getItem('cart')) || [];

    // Перевіряємо, чи є товар в кошику
    const isInCart = cartData.some(item => item.productId === productId);

    return isInCart;
  } catch (error) {
    console.error('Error checking if product is in cart:', error);
    return false;
  }
}

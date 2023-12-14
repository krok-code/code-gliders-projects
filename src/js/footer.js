import axios from 'axios';
import { Notify } from 'notiflix';

const form = document.querySelector('.footer-form');
form.addEventListener('submit', subscribeMailNewProduct);

const emailInput = document.querySelector('#user-email');

export function subscribeMailNewProduct(event) {
  event.preventDefault();

  const email = emailInput.value;

  axios
    .post('https://food-boutique.b.goit.study/api/subscription', {
      email,
    })
    .then(response => {
      if (response.status === 201) {
        Notify.success(
          'Email saved'
        );
      } else {
        Notify.failure('Oops, something went wrong...');
      }
    })
    .catch(error => {
      Notify.warning('Subscription already exists!');
    });
  
  emailInput.value = '';
}
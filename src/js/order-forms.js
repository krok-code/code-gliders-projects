import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { order } from './api.js';
import localStorageAPI from './local-storage.js';

const input = document.querySelector('.datatime');

const options = {
	enableTime: true,
	time_24hr: true,
	defaultDate: new Date(),
	minuteIncrement: 1,
}

flatpickr(input, options);

document.addEventListener('DOMContentLoaded', function () {
	const orderButton = document.querySelector('.cart-order-info-btn');

	orderButton.addEventListener('submit', function (event) {
		event.preventDefault();

		const name = document.getElementById('name').value;
		const phone = document.getElementById('phone').value;
		const address = document.getElementById('address').value;
		const datetime = document.getElementById('datetime').value;

		const order = {
			name,
			phone,
			address,
			datetime,
		};

		console.log(error);
		localStorageAPI.save('lastOrder', order);
	});

});
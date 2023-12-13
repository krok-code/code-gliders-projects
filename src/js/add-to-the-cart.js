import { getProducttById } from "./api.js";
import iconsPath from "../img/icons.svg"
import {getLength} from './header.js'
import { arrProducts } from './homePage.js';

export async function saveToLocalStorage(event) {
  const id = event.currentTarget.getAttribute('data-id');
  const buttons = document.querySelectorAll(`button[data-id='${id}']`);
  buttons.forEach(button => {
    const passSvg = button.querySelector('use');
    passSvg.setAttribute('href', `${iconsPath}#checkmark`);
    button.setAttribute('disabled', 'true');
  });
  console.log(buttons);
  const productData = {};

   try {
    const product = await getProducttById(id);
   console.log(product);
    const { category,  size, _id, name, price, img  } = product;
    productData.category = category;
    productData.size = size;
    productData.id = _id;
    productData.name = name;
    productData.price = price;
    productData.img = img;
   } catch (error) {
    console.log(error);
   }
    const localStorage = window.localStorage;

    arrProducts.push(productData);
   

    localStorage.setItem("product", JSON.stringify(arrProducts));

    getLength();
  }

 
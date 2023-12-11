import { getProducttById } from "./api.js";
import iconsPath from '/@/img/icons.svg';
import { getLength } from "./header.js";
import { arrProducts } from "./main-page.js";
import localStorageAPI from './local-storage.js';

export async function saveToLocalStorage(event) {
  const id = event.currentTarget.getAttribute('data-id');
  const passSvg = event.currentTarget.querySelector('use');
  passSvg.setAttribute('href', `${iconsPath}#checkmark`);
  event.currentTarget.setAttribute('disabled', 'true');
  const productData = {};

  try {
    const product = await getProducttById(id);
    console.log(product);
    const { category, size, _id, name, price, img } = product;
    productData.category = category;
    productData.size = size;
    productData.id = _id;
    productData.name = name;
    productData.price = price;
    productData.img = img;
  } catch (error) {
    console.log(error);
  }

  localStorageAPI.save("product", JSON.stringify(arrProducts));
  getLength();
}

import localStorageAPI from './local-storage.js';

export function getLength() {
    const arrFromLS = local-storageAPI.load('product');
    document.querySelector('#header-length').innerHTML = `${arrFromLS ? arrFromLS.length : '0'}`;
}
getLength();
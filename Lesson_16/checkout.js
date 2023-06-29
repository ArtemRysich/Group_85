const elements = {
    container: document.querySelector('.js-list'),
    totalPrice: document.querySelector('.js-total-price'),
    clear: document.querySelector('.js-clear')
}

const PRODUCT_LS_KEY = 'checkout';
const products = JSON.parse(localStorage.getItem(PRODUCT_LS_KEY)) || [];
const totalCost = products.reduce((acc, { qty, price }) => acc += qty * price, 0);

elements.totalPrice.textContent = `Total cost ${totalCost}`;
elements.container.insertAdjacentHTML('beforeend', createMarkup(products))
elements.clear.addEventListener('click', handlerClearBasket)

function createMarkup(arr) {
    return arr.map(({ img, name, price, qty }) => `
    <li>
    <img src="${img}" alt="${name}" width="300"/>
    <h2>${name}</h2>
    <p>Quontity: ${qty}</p>
    <p>Total price: ${qty * price}</p>
  </li>`).join('')
}

function handlerClearBasket(){
    localStorage.removeItem(PRODUCT_LS_KEY);
    window.location.href = './index.html';
}

// const container = document.querySelector('.js-container')
// console.log(container.children);

// [...container.children].forEach(elem => {
//     elem.addEventListener('click', handlerColorClick)
// })

// function handlerColorClick(evt) {
//     console.log(evt.currentTarget);
// }



// container.addEventListener('click', handlerColorClick)

// function handlerColorClick(evt) {
//     // if (!evt.target.classList.contains('js-box')) {
//     //     return;
//     // }
//     if (evt.target === evt.currentTarget) {
//         return;
//     }
//     // console.log('target', evt.target);
//     // console.log('currentTarget', evt.currentTarget);
//     const { color } = evt.target.dataset;
//     console.log(color);
// }
















// const cars = [
//     {
//         id: 1,
//         car: "Honda",
//         type: "Civic",
//         price: 12000,
//         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
//     },
//     {
//         id: 2,
//         car: "Audi",
//         type: "Q7",
//         price: 40000,
//         img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
//     },
//     {
//         id: 3,
//         car: "BMW",
//         type: "5 siries",
//         price: 9000,
//         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
//     },
//     {
//         id: 4,
//         car: "Honda",
//         type: "Accord",
//         price: 20000,
//         number: "+380000000000",
//         img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
//     },
//     {
//         id: 5,
//         car: "Volvo",
//         type: "XC60",
//         price: 7000,
//         img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
//     },
// ];

// const list = document.querySelector('.js-list')

// list.insertAdjacentHTML('beforeend', createMarkupItems(cars));
// list.addEventListener('click', handlerClickCar);

// function handlerClickCar(evt) {
//     const cardItem = evt.target.closest('.js-item');
//     if (evt.target.classList.contains('js-add')) {
//         const obj = findCarItem(cardItem);
//         const instance = basicLightbox.create(createAddToCartMarkup(obj));
//         instance.show();
//     } else if (cardItem) { //evt.target !== evt.currentTarget
//         const obj = findCarItem(cardItem);
//         const instance = basicLightbox.create(createDetailInfoMarkup(obj));
//         instance.show();
//     }
// }

// function findCarItem(item) {
//     const { id } = item.dataset;
//     const currentCar = cars.find(({ id: carId }) => carId === Number(id));
//     return currentCar
// }

// function createAddToCartMarkup({ car, type, price } = {}) {
//     return `<div class="modal">
//     <h2>Add to cart item</h2>
//     <h3>${car} ${type}</h3>
//     <span>${price}</span>
//   </div>`
// }

// function createDetailInfoMarkup({ id, car, type, price, img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png' } = {}) {
//     return `<div data-id="${id}" class="modal">
//     <img src="${img}" alt="${car}" class="item-img"/>
//     <h2>${car}</h2>
//     <h3>${type}</h3>
//     <p>${price}</p>
//     <button>Add</button>
//   </div>`
// }

// function createMarkupItems(arr) {
//     return arr.map(({ id, img, car }) => `
// <li data-id="${id}" class="item js-item">
//     <img src="${img}" alt="${car}" class="item-img"/>
//     <h2>${car}</h2>
//     <button type="button" class="js-add">Add</button>
// </li>`)
//         .join('')
// }

// let counterValue = 0
// const elements = {
//     span: document.querySelector('#value'),
//     increment: document.querySelector('#increment'),
//     decrement: document.querySelector('#decrement')
// }


// elements.increment.addEventListener('click', handlerCounter);
// elements.decrement.addEventListener('click', handlerCounter);

// function handlerCounter(evt){
//     elements.span.textContent = counterValue += evt.currentTarget.dataset.action === 'increment' ? 1 : -1
// }


// const refs = {
//     buttonDecrement: document.querySelector('button[data-action= "decrement"]'),
//     buttonIncrement: document.querySelector('button[data-action= "increment"]'),
//     counter: document.querySelector('#value'),
//   };
//   let counterValue = 0;
//   const { buttonDecrement, buttonIncrement, counter } = refs;

//   buttonDecrement.addEventListener('click', onClick('decrement'));
//   buttonIncrement.addEventListener('click', onClick('increment'));

//   function onClick(direction) {
//     return () => {
//       if (direction === 'decrement')
//         counter.textContent = `${(counterValue -= 1)}`;
//       if (direction === 'increment')
//         counter.textContent = `${(counterValue += 1)}`;
//     };
//   }

const cars = [
    {
        id: 1,
        car: "Honda",
        type: "Civic",
        price: 12000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
    },
    {
        id: 2,
        car: "Audi",
        type: "Q7",
        price: 40000,
        img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
    },
    {
        id: 3,
        car: "BMW",
        type: "5 siries",
        price: 9000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
    },
    {
        id: 4,
        car: "Honda",
        type: "Accord",
        price: 20000,
        number: "+380000000000",
        img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
    },
    {
        id: 5,
        car: "Volvo",
        type: "XC60",
        price: 7000,
        img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
    },
];

const list = document.querySelector('.js-list')


// list.insertAdjacentHTML('beforeend', createMarkupItems(cars));
// [...document.querySelectorAll('.js-add')].forEach(item => item.addEventListener('click', handlerClickCarBTN))
// list.addEventListener('click', handlerClickCar);

list.insertAdjacentHTML('beforeend', createMarkupItems(cars));
list.addEventListener('click', handlerClickCarBTN);
list.addEventListener('click', handlerClickCar);


function handlerClickCarBTN(evt) {
    const cardItem = evt.target.closest('.js-item');
    if (evt.target.classList.contains('js-add')) {
        const obj = findCarItem(cardItem);
        const instance = basicLightbox.create(createAddToCartMarkup(obj));
        evt.stopImmediatePropagation()
        // evt.stopPropagation()
        instance.show();
    }
}

function handlerClickCar(evt) {
    const cardItem = evt.target.closest('.js-item');
    if (cardItem) { //evt.target !== evt.currentTarget
        const obj = findCarItem(cardItem);
        const instance = basicLightbox.create(createDetailInfoMarkup(obj));
        instance.show();
    }
}

function findCarItem(item) {
    const { id } = item.dataset;
    const currentCar = cars.find(({ id: carId }) => carId === Number(id));
    return currentCar
}

function createAddToCartMarkup({ car, type, price } = {}) {
    return `<div class="modal">
    <h2>Add to cart item</h2>
    <h3>${car} ${type}</h3>
    <span>${price}</span>
  </div>`
}

function createDetailInfoMarkup({ id, car, type, price, img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png' } = {}) {
    return `<div data-id="${id}" class="modal">
    <img src="${img}" alt="${car}" class="item-img"/>
    <h2>${car}</h2>
    <h3>${type}</h3>
    <p>${price}</p>
    <button>Add</button>
  </div>`
}

function createMarkupItems(arr) {
    return arr.map(({ id, img, car }) => `
<li data-id="${id}" class="item js-item">
    <img src="${img}" alt="${car}" class="item-img"/>
    <h2>${car}</h2>
    <div><button type="button" class="js-add">Add</button></div>
</li>`)
        .join('')
}
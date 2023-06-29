


// localStorage.setItem(LS_KEYS.FIRST_KEY, JSON.stringify([1, 2, 3, 4]))
// console.log(JSON.parse(localStorage.getItem(LS_KEYS.FIRST_KEY)));

// const user = {
//     name: "Test name",
//     getName(){
//         console.log(this.name);
//     }
// }

// localStorage.setItem(LS_KEYS.KEY_USER, JSON.stringify(user));

// console.log(JSON.parse(localStorage.getItem(LS_KEYS.KEY_USER)));
// localStorage.removeItem(LS_KEYS.FIRST_KEY);
// localStorage.clear();


// const LS_KEYS = {
//     FIRST_KEY: 'first-key',
//     KEY_USER: 'user key',
//     LS_KEY: 'local storage',
//     SS_KEY: 'session storage'
// }

// const selectors = {
//     addLS: document.querySelector('.js-add-local-storage'),
//     addSS: document.querySelector('.js-add-session-storage'),
//     getLS: document.querySelector('.js-get-local-storage'),
//     getSS: document.querySelector('.js-get-session-storage')
// }

// selectors.addLS.addEventListener('click', handlerAddLS)
// selectors.addSS.addEventListener('click', handlerAddSS)
// selectors.getLS.addEventListener('click', handlerGetLS)
// selectors.getSS.addEventListener('click', handlerGetSS)

// const user = {
//     name: "Test name",
//     getName() {
//         console.log(this.name);
//     }
// }


// function handlerAddLS() {
//     localStorage.setItem(LS_KEYS.LS_KEY, JSON.stringify(user))
// }

// function handlerAddSS() {
//     sessionStorage.setItem(LS_KEYS.SS_KEY, JSON.stringify(user))
// }

// function handlerGetLS() {
//     const response = localStorage.getItem(LS_KEYS.LS_KEY);
//     const data = JSON.parse(response);
//     console.log(data);
// }

// function handlerGetSS() {
//     try {
//         const response = sessionStorage.getItem(LS_KEYS.SS_KEY);
//         const data = JSON.parse(response);
//         console.log(data.name);
//     } catch (err) {
//         console.error(err);
//     } finally {
//         console.log('After ERROR');
//     }

//     // const response = sessionStorage.getItem(LS_KEYS.SS_KEY);
//     // const data = JSON.parse(response);
//     // console.log(data.name);

// }






// Перерва до 20.50






const instruments = [
    {
        id: 1,
        img: "https://static.dnipro-m.ua/cache/products/4878/catalog_origin_269592.jpg",
        name: "Шуруповерт",
        price: 150,
        description:
            "Мережевий дриль-шуруповерт TD-30 — надійний помічник для робіт по дому та в невеликій майстерні, якщо необхідно виконувати роботу переважно з закручування кріпильних елементів. Муфта регулювання крутного моменту робить інструмент універсальним вибором як для свердління, так і для роботи з кріпленнями.",
    },
    {
        id: 3,
        img: "https://static.dnipro-m.ua/cache/products/1248/catalog_origin_257336.jpg",
        name: "Шліфмашина",
        price: 1299,
        description:
            "Кутова шліфувальна машина Dnipro-M GS-98 – модель, яка поєднує в собі оптимальне співвідношення потужності, ваги та мобільності. Конструкція шліфмашини сприяє зручній та надійній роботі, навіть однією рукою. Інструмент ідеально підходить для виконання різу на висоті та використання у важкодоступних місцях. Низький рівень шуму та вібрації, двопозиційне розташування додаткової рукоятки під кутом 100 градусів, мінімізує втому під час шліфування.",
    },
    {
        id: 4,
        img: "https://static.dnipro-m.ua/cache/products/5596/catalog_origin_191105.jpg",
        name: "Пила",
        price: 11049,
        description:
            "Мобільна акумуляторна ланцюгова пила DCS-200BC DUAL призначена для обрізання зайвих гілок, спилювання дерев та чагарника, заготівлі дров, покрою будматеріалів та демонтажних робіт. Її просто використовувати у будь-яких місцях: на висоті, на виїзних роботах, у лісі або саду. При цьому Вам не потрібно буде турбуватися про підключення до мережі.",
    },
    {
        id: 5,
        img: "https://static.dnipro-m.ua/cache/products/2300/catalog_origin_261037.jpg",
        name: "Рівень",
        price: 897,
        description:
            "Рівень серії ProVision виробництва DNIPRO-M має не тільки високу точність вимірювань і чудові захисні властивості, а й надає максимальний комфорт користувачеві в процесі експлуатації.",
    },
    {
        id: 6,
        img: "https://static.dnipro-m.ua/cache/products/6566/catalog_origin_270253.jpg",
        name: "Тример",
        price: 3699,
        description:
            "Тример електричний Dnipro-M 110 призначений для покосу густої трави, а також кущів з діаметром стовбура до 10 мм.",
    },
    {
        id: 7,
        img: "https://static.dnipro-m.ua/cache/products/6483/catalog_origin_270227.jpg",
        name: "Мотокоса",
        price: 11049,
        description:
            "Мотокоса Dnipro-M 43 призначена для покосу трави, чагарників, бур'янів, газонів, а також для заготівлі сіна в невеликих масштабах.    Використовується для польових робіт на садовій ділянці площею до 2000 м2.",
    },
    {
        id: 8,
        img: "https://static.dnipro-m.ua/cache/products/2741/catalog_origin_271775.jpg",
        name: "Генератор",
        price: 10890,
        description:
            "Бензиновий генератор GX-25 номінальною потужністю 2,5 кВт забезпечить автономність побутових приладів на дачі або у приватному будинку. Ви зможете одночасно підключити до нього освітлення, холодильник, зарядку телефону, ноутбук та водяний насос.",
    },
];

const container = document.querySelector('.js-list');
const PRODUCT_LS_KEY = 'checkout';

container.insertAdjacentHTML('beforeend', createMarkup(instruments));
container.addEventListener('click', handlerAdd);

function createMarkup(arr) {
    return arr.map(({ id, img, name, price, description }) => `
    <li data-id="${id}" class="js-product">
        <img src="${img}" alt="${name}" width="300"/>
        <h2>${name}</h2>
        <p>${price}</p>
        <p>${description}</p>
        <button class="js-add" type="button">Add</button>
  </li>`).join('')
}

function handlerAdd(evt) {
    if (!evt.target.classList.contains('js-add')) {
        return;
    }
    // || => 0 '' null undefined NaN false
    // ?? => null undefined
    // null ?? []
    const products = JSON.parse(localStorage.getItem(PRODUCT_LS_KEY)) ?? [];
    const product = evt.target.closest('.js-product');
    const productId = Number(product.dataset.id);
    const currentProduct = instruments.find(({ id }) => id === productId);
    const idx = products.findIndex(({ id }) => id === productId);

    // -1 // true
    // 0 > ... // false

    // -(0 + 1) //0+1 =>-1 // true
    // -(-1 + 1)// -0 // false
    if (idx !== -1) { // !!~idx
        products[idx].qty += 1;
    } else {
        currentProduct.qty = 1;
        products.push(currentProduct);
    }
    localStorage.setItem(PRODUCT_LS_KEY, JSON.stringify(products))
}
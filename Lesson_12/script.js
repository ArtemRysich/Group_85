

const selectors = {
    box: document.querySelector('.js-item'),
    left: document.querySelector('.js-step-left'),
    down: document.querySelector('.js-step-down'),
    input: document.querySelector('.js-input'),
    title: document.querySelector('.js-title'),
    list: document.querySelector('.js-list'),
    form: document.querySelector('.js-form')
}
// console.log(selectors.input.value);

// selectors.box.addEventListener('click', handlerClick)
// let step = 0

// function handlerClick(evt) {
//     step += 50;
//     // console.log(evt.currentTarget.style.marginLeft);
//     evt.currentTarget.style.marginLeft = `${step}px`;
//     evt.currentTarget.style.marginTop = `${step}px`
// }




// selectors.left.addEventListener('click', handlerStepLeft)
// selectors.down.addEventListener('click', handlerStepDown)


// let stepLeft = 0
// let stepDown = 0
// function handlerStepLeft() {
//     stepLeft += 50;
//     selectors.box.style.marginLeft = `${stepLeft}px`
// }

// function handlerStepDown() {
//     stepDown += 50;
//     selectors.box.style.marginTop = `${stepDown}px`;
// }

// selectors.input.addEventListener('input', handlerQuery)

// function handlerQuery(evt){
//     // console.log(evt.currentTarget.value);
//     selectors.title.textContent = evt.currentTarget.value
// }



// selectors.form.addEventListener('submit', handlerSubmit);


// function handlerSubmit(evt) {
//     evt.preventDefault();
//     // console.log(evt.currentTarget.elements);
//     // const { title, message } = evt.currentTarget.elements;

//     // const data = {
//     //     name: title.value,
//     //     text: message.value
//     // }
//     // console.log('data', data);

//     // console.log(Object.keys(evt.currentTarget.elements));

//     // const data = Object.keys(evt.currentTarget.elements).reduce((acc, item) => {
//     //     if (isNaN(item)) {
//     //         acc[item] = evt.currentTarget.elements[item].value;
//     //     }

//     //     return acc
//     // }, {})


//     // console.log(data);
//     // https://developer.mozilla.org/ru/docs/Web/API/FormData
//     const formData = new FormData(evt.currentTarget);

//     formData.forEach((value, key) => {
//         data[key] = value;
//     })
//     console.log(data);

//     // console.log('title', title);
//     // console.log('message', message);
// }



// Перерва до 21.25




// document.addEventListener('keypress', handlerKeyPress);
// function handlerKeyPress(evt) {
//     console.log('keypress', evt);
// }

// document.addEventListener('keydown', handlerKey);

// function handlerKey(evt) {
//     // console.log(evt);
//     // if (evt.ctrlKey && evt.code === 'KeyC') {
//     //     console.log('try copy');
//     //     evt.preventDefault()
//     // }
//     // if (evt.code === "Escape") {
//     //     console.log('keydown', evt);
//     //     selectors.down.hidden = true;
//     //     document.removeEventListener('keydown', handlerKey)
//     // }
// }




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
        id: 33,
        car: "BMW",
        type: "5 siries",
        price: 9000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
    },
    {
        id: 3,
        car: "Honda",
        type: "Accord",
        price: 20000,
        number: "+380000000000",
        img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
    },
    {
        id: 4,
        car: "Volvo",
        type: "XC60",
        price: 7000,
        img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
    },
];


selectors.form.addEventListener('submit', handlerSearchCar);
selectors.form.addEventListener('input', handlerClearSearch);

// '' => false + ! => true
// 'a' => true + ! => false
function handlerClearSearch(evt) {
    const { query } = evt.currentTarget.elements;
    if (!query.value) { // query.value.length === 0
        selectors.list.innerHTML = creatMarkup(cars);
    }
}
function handlerSearchCar(evt) {
    evt.preventDefault();

    // const {
    //     select: { value: select },
    //     query: { value: query }
    // } = evt.currentTarget.elements;

    // console.log(select);
    // console.log(query);


    const { select, query } = evt.currentTarget.elements;
    const selectValue = select.value;
    const queryValue = query.value.toLowerCase();

    let result;
    if (selectValue === 'price') {
        result = cars.filter(({ price }) => price === Number(queryValue))
    } else {
        result = cars.filter(item => item[selectValue].toLowerCase().includes(queryValue))
    }

    selectors.list.innerHTML = creatMarkup(result);
    // evt.currentTarget.reset()
}

function creatMarkup(arr) {
    return arr.map(({ id, car, type, price, img }) => `
    <li data-id="${id}">
        <img src="${img}" alt="${type}" width="300"/>
        <h2>${car}</h2>
        <h2>${type}</h2>
        <h3>${price}</h3>
    </li>`).join('')
}

selectors.list.insertAdjacentHTML('beforeend', creatMarkup(cars))
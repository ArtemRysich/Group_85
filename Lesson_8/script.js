// Додаткова практика // 
// Example 9 - Метод sort
// Створити функцію яка повертає кількість автомобілів(amount) які не знаходяться на розпродажі (Властивість onSale)


// -------------------------------------------
// map
//
// const arr = [1, 2, 3, 4, 5, 6, 7]

//  item*  idx arr
// const result = arr.map((item, idx, arr) => {
//     console.log('item', item);
//     console.log('idx', idx);
//     console.log('arr', arr);
// })

// console.log(result);

// const result = arr.map((item, idx, arr) => {
// return item * 2
// })

// const result = arr.map((_, idx) => console.log(idx));
// console.log(result);

// const users = [{
//     name: 'User1',
//     skills: ['html', 'css']
// }, {
//     name: 'User2',
//     skills: ['js', 'react']
// }, {
//     name: 'User3',
//     skills: ['node.js', 'express']
// }]


// const skills = [];
// for (const user of users) {
//     skills.push(...user.skills)
//     // console.log(user);
// }

// const names = users.map(({name}) => name)

// console.log(names);

// const skills = users.flatMap(({skills}) => skills);



// console.log(skills);
// const names = users.flatMap(({name}) => name)

// console.log(names);






// const users = [{
//     name: 'User1',
//     skills: ['html', 'css']
// }, {
//     name: 'User2',
//     skills: ['js', 'react']
// }, {
//     name: 'User3',
//     skills: ['node.js', 'js']
// }]

// const user = users.find(({skills}) => skills.includes('next.js'));

// console.log(user);

// const names = users
// .filter(({skills})=> skills.includes('js'))
// .map(({name}) => name)
// console.log(names);



// const arr = [1, 2, 3, 4, 5, 6, 7]
// console.log(arr.indexOf(4));



// const users = [{
//     name: 'User1',
//     skills: ['html', 'css']
// }, {
//     name: 'User2',
//     skills: ['js', 'react']
// }, {
//     name: 'User3',
//     skills: ['node.js', 'js']
// }]


// const idx = users.findIndex(({ skills }) => skills.includes('next.js'));
// console.log(idx);

// every

// const result = users.every(({ skills }) => skills.includes('js'))

// console.log(result);

// some

// const result = users.some(({ skills }) => skills.includes('qwerty'))
// console.log(result);



// sort numbers

// const numbers = [11, 4, 9, 3, 54, 23, 12];
// numbers.sort()
// console.log(numbers);
//current,next
// const result = numbers.sort((a, b) => a - b);
// const result2 = [...numbers].sort((a, b) => b - a);
// console.log(numbers);
// console.log(result2);


// const str = ['s', 'S', 'a', 'f', 'A', 'B'];
// const test = ['acb', 'abc', 'awq']
// const result = test.sort((a, b) => a.localeCompare(b))
// console.log(result);



// const products = [{
//     name: 'banana',
//     price: 20
// }, {
//     name: 'apple',
//     price: 25
// }, {
//     name: 'carrot',
//     price: 22
// }]

// products.sort((a, b) => a.name.localeCompare(b.name))
// products.sort(({ name: a }, { name: b }) => a.localeCompare(b))
// console.log(products);

// products.sort((a, b) => a.price - b.price)
// products.sort(({ price: a }, { price: b }) => a - b)
// products.sort(({ price: a }, { price: b }) => b - a)
// console.log(products);


// const products = [{
//     name: 'banana',
//     price: 20
// }, {
//     name: 'apple',
//     price: 25
// }, {
//     name: 'carrot',
//     price: 22
// }]
// acc => initialValue
// const result = products.reduce((acc, { name }, idx, arr) =>  `${acc} ${name}`, '')


// const result = products.reduce((acc, { name }) => {
//     acc.push(name)
//     return acc
// }, []).join(' ')
// console.log(result);

// const result = products.reduce((acc, { name }, idx) => acc + `${idx + 1}. ${name}\n`, 'Список продуктів: \n');

// const products = [{
//     name: 'banana',
//     price: 20
// }, {
//     name: 'apple',
//     price: 25
// }, {
//     name: 'carrot',
//     price: 22
// }]
// const products = []
// let result;
// if (!products.length) { //products.length === 0
//     result = 'Список продуктів відсутній'
// } else {
//     result = products.reduce((acc, { name }, idx) => acc + `${idx + 1}. ${name}\n`, 'Список продуктів: \n');
// }
// const result = products.reduce((acc, { name }, idx) => acc + `${idx + 1}. ${name}\n`,
//     !products.length ? 'Список продуктів відсутній' : `Список продуктів складається з ${products.length} елементів: \n`);
// console.log(result);



// const numbers = [11, 4, 9, 3, 54, 23, 12];

// const result = numbers.reduce((acc, number) => acc + number, 0)

// console.log(result);




// Перерва до 21.40






// Колекція об'єктів для всіх прикладів з автомобілями
const cars = [
    { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
    { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
    { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
    { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
    { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
    { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
    { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
    { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
    { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
    { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false }
];
// Example 1 - Метод map
// Нехай функція getModels повертає масив моделей (поле model) всіх автомобілів.

// const getModels = cars => cars.map(({ model }) => model);

// console.log(getModels(cars));



// const test = {
//     make: 'Honda',
//     model: 'CR-V',
//     type: 'suv',
//     amount: 14,
//     price: 24045,
//     onSale: true,
// }
// Example 2 - Метод map
// Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із змінним значенням властивості price залежно від переданої знижки.

// const makeCarsWithDiscount = (cars, discount) => {
//     return cars.filter(({ onSale }) => onSale).map((car) => {
//         car = { ...car }
//         car.price = car.price * (1 - discount)
//         return car
//     })
// };



// const makeCarsWithDiscount = (cars, discount) => {
//     return cars.map((car) => {
//         car = {...car}
//         car.price = car.price * (1 - discount)
//         return car
//     })
// };

// console.log(makeCarsWithDiscount(cars, 0.2));
// console.log(makeCarsWithDiscount(cars, 0.4));
// console.log(cars);

// { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true }
// Example 3 - Метод filter
// Нехай функція filterByPrice повертає масив автомобілів ціна яких менша ніж значення параметра threshold.

// const filterByPrice = (cars, threshold) => cars.filter(({price}) => price < threshold);

// console.log(filterByPrice(cars, 30000));
// console.log(filterByPrice(cars, 25000));

// Example 4 - Метод filter
// { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true }
// Нехай функція getCarsWithDiscount повертає масив автомобілів властивість onSale яких true.

// const getCarsWithDiscount = cars => cars.filter(({onSale}) => onSale);
// const getCarsWithDiscount = cars => cars.filter(({onSale}) => !onSale);
// console.log(getCarsWithDiscount(cars));


// Example 5 - Метод filter
// { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true }
// Нехай функція getCarsWithType повертає масив автомобілів тип яких збігається зі значенням параметра type.

// const getCarsWithType = (cars, type) => cars.filter(({ type: carType }) => carType === type);

// console.log(getCarsWithType(cars, 'suv'));
// console.log(getCarsWithType(cars, 'sedan'));

// { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true }
// Example 6 - Метод find
// const getCarByModel = (cars, model) => cars.find(({model: modelToFind}) => model === modelToFind);

// console.log(getCarByModel(cars, 'F-150'));
// console.log(getCarByModel(cars, 'CX-9'));


// { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true }

// Example 7 - Метод sort
// Нехай функція sortByAscendingAmount повертає новий масив автомобілів відсортований за зростанням значення параметру amount.

// const sortByAscendingAmount = cars => [...cars].sort((a, b) => a.amount - b.amount);

// console.log(sortByAscendingAmount(cars));
// console.log('cars',cars);



// { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true }
// Example 8 - Метод sort
// Нехай функція sortByDescendingPrice повертає новий масив автомобілів відсортований за зменшенням значення властивості price.

// const sortByDescendingPrice = cars => [...cars].sort(({ price: a }, { price: b }) => b - a);

// console.log(sortByDescendingPrice(cars));
// console.log('cars',cars);

// Example 9 - Метод sort
// Нехай функція sortByModel повертає новий масив автомобілів відсортований за назвою моделі в алфавітному та зворотному алфавітному порядку, в залежності від значення параметра order.

// const sortByModel = (cars, order) => {};
// Спробувати робити умову в самому методі сорт
// console.table(sortByModel(cars, 'asc'));
// console.table(sortByModel(cars, 'desc'));



// Example 10 - Метод reduce
// { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true }
// Нехай функція getTotalAmount повертає загальну кількість автомобілів (значення властивостей amount).

// const getTotalAmount = cars => cars.reduce((acc, { amount }) => acc + amount, 0);

// console.log(getTotalAmount(cars));

// Example 11 - Ланцюжки методів
// { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true }
// Нехай функція getAvailableCarNames повертає масив моделей автомобілів, але тільки тих, які зараз на розпродажі.

// const getModelsOnSale = cars => cars.filter(({ onSale }) => onSale).map(({ model }) => model).sort((a, b) => a.localeCompare(b));

// console.log(getModelsOnSale(cars));
// console.log(cars);



// Example 12 - Ланцюжки методів
// { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true }
// Нехай функція getSortedCarsOnSale повертає масив автомобілів на розпродажі (Властивість onSale), відсортованих за зростанням ціни.

// const getSortedCarsOnSale = cars => cars.filter(({ onSale }) => onSale).sort((a, b) => a.price - b.price);

// console.log(getSortedCarsOnSale(cars));
// console.log(cars);




const getPriceCarsOnSale = cars => {
    const filterred = cars.filter(({ onSale }) => onSale);
    const price = filterred.reduce((acc, { price, amount }) => acc + price * amount, 0)
    const count = filterred.reduce((acc, { amount }) => acc + amount, 0)
    return `Кількість ${count} атомобілів - загальна ціна ${price}`
}

console.log(getPriceCarsOnSale(cars));


// Створити функцію яка повертає кількість автомобілів(amount) які не знаходяться на розпродажі (Властивість onSale)





// задача з минулого заняття. я правильно розумію, що при запису в один рядок (тут 2 останніх) для кожного елемента буде виконуватися спліт для names i phones?
// і на великих масивах буде якась втрата швидкості?

// Example 8 - Метод forEach
// Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.

// function printContactsInfo({ names, phones }) {
//     const nameList = names.split(',');
//     const phoneList = phones.split(',');
//     for (let i = 0; i < nameList.length; i += 1) {
//         console.log(`${nameList[i]}: ${phoneList[i]}`);
//     }
// }

// const printContactsInfo = ({ names, phones }) => {
//     const nameList = names.split(',');
//     const phoneList = phones.split(',');
//     nameList.forEach((elem, idx) => console.log(`${elem}: ${phoneList[idx]}`))
// }

// const printContactsInfo = ({ names, phones }) => names.split(',')
//     .forEach((elem, idx) => console.log(`${elem}: ${phones.split(',')[idx]}`))
// const arrow = a => {console.log(a)};

// arrow('Hello world')



// const add = (a, b) => a + b


// console.log(add(5,5));

// const numbers = [1, 2, 3, 4, 5, 6, 7];

// const changeElem = (arr, oldValue, newValue) => arr.splice(arr.indexOf(oldValue), 1, newValue);


// console.log(changeElem(numbers, 5, 55));

// console.log(numbers);


// const user = {
//     name: 'Test user',
//     // sayHello(){
//     //     console.log(this.name);
//     // }
//     // sayHello: function(){
//     //     console.log(this.name);
//     // }
//     // sayHello: () => {
//     //     console.log(this.name);
//     // }
// }
// user.sayHello()


// const arrow = (...args) => {
//     console.log(args);
// }
// arrow(1, 2, 3, 4, 5)




const basket = [
    {
        name: 'apple',
        price: 20
    },
    {
        name: 'milk',
        price: 30
    }
]

// function add(arr) {
//     let total = 0;
//     const products = [];

//     for (const { name, price } of arr) {
//         products.push(name)
//         total += price;
//     }
//     return { total, products }
// }

// function logger(callback, arr) {
//     const result = callback(arr);
//     return `${result.products.join(', ')} total sum ${result.total}`
// }

// console.log(logger(add, basket));

function callback(elem, idx, array) {
    console.log('elem', elem);
    console.log('idx', idx);
    console.log('array', array);

}


// const names = ["Artem", "Maks", "David", "Olga", "Kate"];
// const numbers = [2, 44, 56, 2, 34, 2]

// let sum = 0
// for (let i = 0; i < numbers.length; i += 1) {
//     sum += numbers[i]
// }
// console.log(sum);
// names.forEach(callback)
// let total = 0
// numbers.forEach(elem => total += elem)
// console.log(total);
// console.log(result);

// function foreach(arr) {
//     for (let i = 0; i < arr.length; i += 1) {
//         callback(arr[i], i, arr)
//     }
// }
// foreach(names)
// function callback(elem, idx, array) {
//     console.log('elem', elem);
//     console.log('idx', idx);
//     console.log('array', array);

// }

// let total = 0
// const sum = elem => total += elem
// console.log(sum);
// function summ(elem) {
//     total += elem
// }
// numbers.forEach(summ)
// numbers.forEach(elem => total += elem)
// console.log(total);




// ПЕРЕРВА ДО 21.15








// Example 1 - Коллбек функції
// Напишіть наступні функції:

// createProduct(obj, callback) - приймає об'єкт товару без id, а також коллбек. Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор у властивість id та викликає коллбек передаючи йому створений об'єкт.
// logProduct(product) - колббек приймаючий об'єкт продукту і логуючий його в консоль
// logTotalPrice(product) - колббек, що приймає об'єкт продукту і логіює загальну вартість товару в консоль
// // Рішення
// function createProduct(partialProduct, callback) {
//     const product = {
//         id: Date.now(),
//         ...partialProduct
//     }
//     console.log(callback);
//     callback(product)
// }

// function logProduct(product) {
//     console.log(product);
// }

// function logTotalPrice(product) {
//     console.log(product.price * product.quantity);
// }

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);
//-----------------------------------------------------------------------------
// function createProduct(partialProduct, callback1, callback2) {
//     const product = {
//         id: Date.now(),
//         ...partialProduct
//     }
//     callback1(product)
//     callback2(product)
// }

// function logProduct(product) {
//     console.log(product);
// }

// function logTotalPrice(product) {
//     console.log(product.price * product.quantity);
// }

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct, logTotalPrice);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logProduct, logTotalPrice);



// Example 2 - Коллбек функції
// Додайте об'єкт account методи withdraw(amount, onSuccess, onError) та deposit(amount, onSuccess, onError), де перший параметр це сума операції, а другий та третій - коллбеки.

// Метод withdraw викликає onError якщо amount більше TRANSACTION_LIMIT або this.balance, і onSuccess в іншому випадку.

// Метод deposit викликає onError якщо amount більше TRANSACTION_LIMIT або менше або дорівнює нулю, і onSuccess в іншому випадку.

// // Рішення
// const TRANSACTION_LIMIT = 1000;

// const account = {
//     username: 'Jacob',
//     balance: 400,
//     withdraw(amount, onSuccess, onError) {
//         if (amount > TRANSACTION_LIMIT) {
//             onError('Перевищено ліміт транзакції');
//         } else if (amount > this.balance) {
//             onError('Недостатньо коштів на рахунку');
//         } else {
//             this.balance -= amount;
//             onSuccess(`Ви зняли ${amount}`)
//         }
//     },
//     deposit(amount, onSuccess, onError) {
//         if (amount > TRANSACTION_LIMIT) {
//             onError('Перевищено ліміт транзакції');
//         } else if (amount <= 0) {
//             onError('Значення має бути більше за 0')
//         } else {
//             this.balance += amount;
//             onSuccess(`Рахунок поповнено на суму ${amount}`)
//         }
//     },
// };

// function handleSuccess(message) {
//     console.log(`✅ Success! ${message}`);
// }
// function handleError(message) {
//     console.log(`❌ Error! ${message}`);
// }

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);



// Example 3 - Коллбек функції
// Напишіть функцію each(array, callback), яка першим параметром очікує масив, а другим - функцію, яка застосовується до кожного елемента масиву. Функція each повинна повернути новий масив, елементами якого будуть результати виклику коллбека.

// // Рішення
// function each(array, callback) {
//     const result = [];
//     for (const item of array) {
//         result.push(callback(item));
//     }
//     return result;
// }

// console.log(
//     each([64, 49, 36, 25, 16], function (value) {
//         return value * 2;
//     }),
// );
// console.log(
//     each([64, 49, 36, 25, 16], function (value) {
//         return value - 10;
//     }),
// );
// console.log(
//     each([64, 49, 36, 25, 16], function (value) {
//         return Math.sqrt(value);
//     }),
// );
// console.log(
//     each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//         return Math.ceil(value);
//     }),
// );
// console.log(
//     each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//         return Math.floor(value);
//     }),
// );



// Example 4 - Стрілочні функції
// Виконайте рефакторинг коду за допомогою стрілочних функцій.

// function createProduct(partialProduct, callback) {
//     const product = { id: Date.now(), ...partialProduct };
//     callback(product);
// }

// // function logProduct(product) {
// //     console.log(product);
// // }
// const logProduct = product => console.log(product)
// // function logTotalPrice(product) {
// //     console.log(product.price * product.quantity);
// // }
// const logTotalPrice = product => console.log(product.price * product.quantity);

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct); //  product => console.log(product)
// createProduct({ name: '🍎', price: 30, quantity: 3 }, product => console.log(product));
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, product => console.log(product.price * product.quantity));


// Example 5 - Стрілочні функції
// Виконайте рефакторинг коду за допомогою стрілочних функцій.

// const TRANSACTION_LIMIT = 1000;

// const account = {
//     username: 'Jacob',
//     balance: 400,
//     withdraw(amount, onSuccess, onError) {
//         if (amount > TRANSACTION_LIMIT) {
//             onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//         } else if (amount > this.balance) {
//             onError(`Amount can't exceed account balance of ${this.balance} credits`);
//         } else {
//             this.balance -= amount;
//             onSuccess(`Account balance: ${this.balance}`);
//         }
//     },
//     deposit(amount, onSuccess, onError) {
//         if (amount > TRANSACTION_LIMIT) {
//             onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//         } else if (amount <= 0) {
//             onError(`Amount must be more than 0 credits`);
//         } else {
//             this.balance += amount;
//             onSuccess(`Account balance: ${this.balance}`);
//         }
//     },
// };

// function handleSuccess(message) {
//   console.log(`✅ Success! ${message}`);
// }

// const handleSuccess = message => console.log(`✅ Success! ${message}`);
// // function handleError(message) {
// //   console.log(`❌ Error! ${message}`);
// // }
// const handleError = message => console.log(`❌ Error! ${message}`);

// account.withdraw(2000, handleSuccess, handleError);
// // account.withdraw(600, handleSuccess, handleError);
// // account.withdraw(300, handleSuccess, handleError);
// // account.deposit(1700, handleSuccess, handleError);
// // account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);


// Example 6 - Інлайн стрілочні функції
// Виконайте рефакторинг коду за допомогою стрілочних функцій.


// const each = (array, callback) => array.map(el => callback(el));
// function each(array, callback) {
//     const newArr = [];
//     for (const el of array) {
//         newArr.push(callback(el));
//     }
//     return newArr;
// }
// const each = (array, callback) => {
//     const newArr = [];
//     array.forEach(el => newArr.push(callback(el)));
//     return newArr;
// }



// console.log(
//     each([64, 49, 36, 25, 16], value => value * 2)
// );
// // console.log(
// //     each([64, 49, 36, 25, 16], function (value) {
// //         return value - 10;
// //     }),
// // );
// console.log(
//     each([64, 49, 36, 25, 16], value => value - 10),
// );
// // console.log(
// //     each([64, 49, 36, 25, 16], function (value) {
// //         return Math.sqrt(value);
// //     }),
// // );
// console.log(
//     each([64, 49, 36, 25, 16], value => Math.sqrt(value))
// );
// // console.log(
// //     each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
// //         return Math.ceil(value);
// //     }),
// // );
// console.log(
//     each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.ceil(value)),
// );
// console.log(
//     each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.floor(value)),
// );


// Example 7 - Метод forEach
// Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.

// function logItems(items) {
//     console.log(items);
//     for (let i = 0; i < items.length; i += 1) {
//         console.log(`${i + 1} - ${items[i]}`);
//     }
// }
///   ['Mango', 'Poly', 'Ajax']
// const logItems = items => items.forEach((item, idx) => console.log(`${idx + 1} - ${item}`))

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);




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




// printContactsInfo({
//     names: 'Jacob,William,Solomon,Artem',
//     phones: '89001234567,89001112233,890055566377,890055566300',
// });



// Example 9 - Метод forEach
// Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.

// function calсulateAverage(...args) {
//   let total = 0;
//   for (let i = 0; i < args.length; i++) {
//     total += args[i];
//   }
//   return total / args.length;
// }

// const calсulateAverage = (...args) => {
//     let total = 0;
//     args.forEach((num) => total += num);

//     return total / args.length;
// }


// console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
// console.log(calсulateAverage(14, 8, 2)); // 8
// console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const result = numbers.filter(item => !(item % 2)).map(item => item * 2);

// console.log(result);


// //Створити функцію яка буде рахувати за скільки днів равлик зможе виповзти з колодязя, функція приймає 1 параметр.
// //1 глибина колодязя (depth)

// //Функція повертає кількість днів

// // Умови:
// // вдень Равлик проповзає на 7 м вгору, а за ніч опускається на 2 м вниз
// // використовувати цикл while()

// function calcDays(depth) {
//     const daySpeed = 7;
//     const nightSpeed = 2;
//     let days = 0;
//     let total = 0;

//     while (depth > total) {
//         total += daySpeed;
//         days += 1;
//         if (depth > total) {
//             total -= nightSpeed;
//         }
//     }
//     console.log(days);
// }
// calcDays(42)//виповзе за 8 днів
// calcDays(17)//виповзе за 3 дні
// calcDays(18)//виповзе за 4 дні
// function calcDays(depth) {
//     let days = 0;
//     while (depth > 0) {
//         days += 1;
//         depth -= 7;
//         if (depth === 0) {
//             return days;
//         }
//         depth += 2;
//     }
//     return days;
// }


// function calcDays(depth) {
//     let hours = 0;
//     while (depth > 0) {
//         depth -= (7 / 12 - 2 / 12) / 2;
//         hours += 1;
//     }
// console.log(Math.round(hours / 24));
//     return Math.round(hours / 24);
// }


const products = [{
    id: 'sku1',
    qty: 1,
}, {
    id: 'sku2',
    qty: 2,
}, {
    id: 'sku3',
    qty: 3,
}, {
    id: 'sku1',
    qty: 6,
}, {
    id: 'sku1',
    qty: 8,
}, {
    id: 'sku2',
    qty: 19,
}, {
    id: 'sku4',
    qty: 1,
}]


// for (let i = 0; i < products.length; i += 1) {
//     for (let j = i + 1; j < products.length; j += 1) {
//         if (products[i].id === products[j].id) {
//             products[i].qty += products[j].qty;
//             products.splice(j, 1)
//             j -= 1;
//         }
//     }
// }
// console.log(products);
function newProducts(arr) {
    const productsList = {};
    for (let i = 0; i < arr.length; i += 1) {
        const { id, qty } = arr[i];
        if (productsList[id]) {
            productsList[id].qty += qty;
            arr.splice(i, 1);
            i -= 1;
        } else {
            productsList[id] = { id, qty };
        }
    }
    arr.length = 0;
    arr.push(...Object.values(productsList));
    console.log(arr);
}
newProducts(products)
console.log(products);

// for (let i = 0; i < products.length; i += 1) {
//     for (let j = products.length - 1; i < j; j -= 1) {
//         if (products[i].id === products[j].id) {
//             products[i].qty += products[j].qty;
//             products.splice(j, 1)
//         }
//     }
// }
// console.log(products);
//  new Date()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
// https://developer.mozilla.org/en-US/docs/Glossary/IIFE?retiredLocale=uk
// https://uk.javascript.info/garbage-collection
// const arr = [1, 2, 3];
// const [, _, third] = arr;

// console.log(_);
// console.log(third);


// const user = {
//     name: 'Test',
//     age: 11,
//     skills: {
//         html: true,
//         css: true,
//         js: false
//     }
// };

// const user = {
//     name: 'Test',
//     age: 11,
// }

// const update = {
//     name: 'Artem',
//     city: 'VN'
// }

// const resolve = {
//     ...update,
//     ...user,
// }


// name: 'Test',
// city: 'VN'
// age: 11,

// const arr = [1, 2, 3];

// // const copy = [...arr] // [1, 2, 3] // spread

// // console.log(copy === arr);

// function foo(a, b, c) {
// console.log('a',a);
// console.log('b',b);
// console.log('c',c);
// }
// foo(...arr)//1, 2, 3 //spread



// const user = {
//     name: 'Test',
//     age: 11,
//     skills: {
//         html: true,
//         css: true,
//         js: false
//     }
// };
// [name :'Test', age : 11 , skills : {}]
// const copy = { ...user }
// console.log(copy);
// console.log(copy === user);

// function foo(a, b,...args) { // rest
//     console.log(args);
//     console.log(arguments);
// }
// foo(1, 2, 3)
// foo(1, 2, 3, 4)
// foo(1, 2, 3, 4, 5, 6, 7, 8, 9)

// const arr = [1, 2, 3, 4];
// const [first, second, ...args] = arr;//rest


// const user = {
//     name: 'Test',
//     age: 11,
// }
// const arr = [1, 2, 3, 4];
// const [first, , ,third] = arr;
// console.log(first);
// console.log(third);


// function foo([first, ,third]) {
// console.log(first);
// // console.log(second);
// console.log(third);
// }

// foo(arr)
// const age = 22;
// const user = {
//     name: 'Test',
//     age: 11,
//     skills: {
//         html: true,
//         css: true,
//         js: false
//     }
// };
// const user = {
//     name: 'Test',
//     use_age_blA: 11,
//     skills: {
//         html: true,
//         css: true,
//         js: false
//     }
// };

// const {age} = user; // age = user.age
// const {age : userAge } = user; // age = user.age
// console.log(user.age);
// console.log(userAge);
// console.log(age);
// const {use_age_blA : age} = user// age = user.use_age_blA
// console.log(use_age_blA);



// const user = {
//     name: 'Test',
//     age: 11,
//     skills: {
//         html: true,
//         css: true,
//         js: false
//     }
// };

// const { skills, skills: { js : language, css, html } } = user;
// console.log(js);
// console.log(css);
// console.log(html);
// console.log(skills);

// const arr = [{
//     name: 'Artem',
//     age: 11,
//     skills: {
//         html: true,
//         css: true,
//         js: false
//     }
// }, {
//     name: 'Alex',
//     age: 12,
//     skills: {
//         html: true,
//         css: true,
//         js: false
//     }
// }, {
//     name: 'Den',
//     age: 13,
//     skills: {
//         html: true,
//         css: true,
//         js: false
//     }
// }, {
//     name: 'David',
//     age: 15,
//     skills: {
//         html: true,
//         css: true,
//         js: false
//     }
// }];
// let names = [];
// let total = [];
// for (const { name, age } of arr) {
//     total += age
//     names.push(name)
// }



// const user = {
//     name: 'Test',
//     age: 11,
//     skills: {
//         html: true,
//         css: true,
//         js: false
//     }
// };


// function foo({ name, age } = {}) {
// console.log(name, age);
// }

// foo(user)

// foo()

// Перерва до 21.15






// Example 1 - Деструктуризація
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.


/**
 *
 * @param {Object} {weight, height} weight height
 * @returns
 */
// function calcBMI({weight, height} = {}) {
//   const numericWeight = Number(weight.replace(',', '.'));
//   const numericHeight = Number(height.replace(',', '.'));
//   return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }

// // Очікується
// console.log(
//   calcBMI({
//     weight: '88,3',
//     height: '1.75',
//   }),
// );
// console.log(
//   calcBMI({
//     weight: '68,3',
//     height: '1.65',
//   }),
// );
// console.log(
//   calcBMI({
//     weight: '118,3',
//     height: '1.95',
//   }),
// );

// Example 2 - Глибока деструктуризація
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

// function getBotReport({ companyName, bots: { repair: repairBots, defence: defenceBots } } = {}) {
//     return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }

// // Було
// console.log(getBotReport('Cyberdyne Systems', 150, 50));

// // Очікується
// console.log(
//     getBotReport({
//         companyName: 'Cyberdyne Systems',
//         bots: {
//             repair: 150,
//             defence: 50,
//         },
//     }),
// ); // "Cyberdyne Systems has 200 bots in stock"

// Example 3 - Деструктуризація
// Перепиши функцію так, щоб вона приймала об'єкт параметрів із властивостями companyName та stock та виводила репорт про кількість товарів на складі будь-якої компанії.


// function getStockReport({ companyName, stock } = {}) {
//     const values = Object.values(stock);
//     let total = 0;
//     for (const value of values) {
//         total += value;
//     }
//     return `${companyName} has ${total} items in stock`

// }

// console.log(
//     getStockReport({
//         companyName: 'Cyberdyne Systems',
//         stock: {
//             repairBots: 150,
//             defenceBots: 50,
//         },
//     }),
// ); // "Cyberdyne Systems has 200 items in stock"

// console.log(
//     getStockReport({
//         companyName: 'Belacci',
//         stock: {
//             shoes: 20,
//             skirts: 10,
//             hats: 5,
//         },
//     }),
// ); // "Belacci has 35 item in stock"

// Example 4 - Операція spread
// Доповни функцію createContact(partialContact) так, щоб вона повертала новий об'єкт контакту з доданими властивостями id та createdAt, а також list зі значенням "default" якщо в partialContact немає такої властивості.


// function createContact(partialContact) {
//     return {
//         id: generateId(),
//         createdAt: new Date(),
//         list: 'default',
//         ...partialContact,
//     }
// }

// console.log(
//     createContact({
//         name: 'Mango',
//         email: 'mango@mail.com',
//         list: 'friends',
//     }),
// );
// console.log(
//     createContact({
//         name: 'Poly',
//         email: 'poly@hotmail.com',
//     }),
// );

// function generateId() {
//     return '_' + Math.random().toString(36).substr(2, 9);
// }
// Example 7 - Операція rest
// Напиши функцію transformUsername(user) так, щоб вона повертала новий об'єкт із властивістю fullName, замість firstName та lastName.


// function transformUsername({ firstName, lastName, ...props }) {
//     return {
//         fullName: `${firstName} ${lastName}`,
//         ...props
//     }
// }

// function transformUsername(obj) {
//     // const copy = JSON.parse(JSON.stringify(obj));
//     // const fullName = obj.firstName + ' ' + obj.lastName;

//     // delete copy.firstName;
//     // delete copy.lastName;

//     // console.log(copy);

//     // copy.fullName = fullName;
//     // return copy;

//     const fullName = obj.firstName + ' ' + obj.lastName;
//     const formatedUser = { fullName };
//     const keys = Object.keys(obj);
//     for (const key of keys) {
//         // if (key === 'firstName' || key === 'lastName') {
//         //     continue;
//         // }
//         // formatedUser[key] = obj[key]

//         if (key !== 'firstName' && key !== 'lastName') {
//             formatedUser[key] = obj[key]
//         }
//     }
//     return formatedUser
// }

// console.log(
//     transformUsername({
//         id: 1,
//         firstName: 'Jacob',
//         lastName: 'Mercer',
//         email: 'j.mercer@mail.com',
//         friendCount: 40,
//     }),
// );

// console.log(
//     transformUsername({
//         id: 2,
//         firstName: 'Adrian',
//         lastName: 'Cross',
//         email: 'a.cross@hotmail.com',
//         friendCount: 20,
//     }),
// );




// const arr = [1, 2, 3, 4, 5]
// const [a, , b, ...props] = arr;
// console.log(props);

// const result = (function (x) {
//     console.log(x);
//     return x + 5;
// })(1)
// console.log(result);

// const result = (function (x) {
//     delete x;
//     // console.log(x);
//     return x;
// })(1)
// console.log(result);


// const user = {
//     name: 'Name',
//     tags: {
//         a: 1,
//         b: 2,
//         c: 3
//     }
// }


// const { name, tags: { a, b, c = 0 } } = user;

// console.log('a', a);
// console.log('b', b);
// console.log('c', c);














// ---------------------------------------------------------------------//
// Створити функцію яка приймає 1 параметр масив продуктів і повертає мутований масив
// Потрібно перебрати масив і якщо він має об'єкти в яких дублюються айді то квонтіті цих елементів потрібно сплюсувати
// а ті обє'кти в яких айді співпадають видалити з масиву.
// (Потрібно мутувати масив, створювати новий не потрібно)

// const products = [{
//     id: 'sku1',
//     qty: 1,
// }, {
//     id: 'sku2',
//     qty: 2,
// }, {
//     id: 'sku3',
//     qty: 3,
// }, {
//     id: 'sku1',
//     qty: 6,
// }, {
//     id: 'sku1',
//     qty: 8,
// }, {
//     id: 'sku2',
//     qty: 19,
// }, {
//     id: 'sku4',
//     qty: 1,
// }]








// //Створити функцію яка буде рахувати за скільки днів равлик зможе виповзти з колодязя, функція приймає 1 параметр.
// //1 глибина колодязя (depth)

// //Функція повертає кількість днів

// // Умови:
// // вдень Равлик проповзає на 7 м вгору, а за ніч опускається на 2 м вниз
// // використовувати цикл while()

// function calcDays(depth) {

// }
// calcDays(42)//виповзе за 8 днів
// calcDays(17)//виповзе за 3 дні
// calcDays(18)//виповзе за 4 дні

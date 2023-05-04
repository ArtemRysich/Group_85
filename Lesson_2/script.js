// Example 9 & 12 additioanl task
// https://www.linkedin.com/in/artemrysich/


// const str = 'abc'
// for (let i = 0; i < str.length; i += 1) {
//     if (str[i] === 'b') {
//         continue
//     }

//     console.log(str[i]);
// }

// for (let i = 0; i < str.length; i += 1) {
//     if (str[i] === 'b') {
//         break;
//     }

//     console.log(str[i]);
// }


// if


// if (4 === '4') {
//     console.log('TRUE');
// }

// console.log('AFTER IF');

// if (4 === 4) {
//     console.log('TRUE');
// }

// console.log('AFTER IF');


// if (2 % 2 === 0) {
//     console.log('ПАРНЕ');
// } else {
//     console.log("НЕ ПАРНЕ");
// }

// 4 % 2  => 0
// 0 === 0 => true



// if (4 % 2 === 0) {
//     console.log('ПАРНЕ');
// } else {
//     console.log("НЕ ПАРНЕ");
// }
// console.log(!(4%2));
// console.log(!(5%2));// => 1 => true + ! => false
// if (!(5%2)) {
//     console.log('ПАРНЕ');
// } else {
//     console.log("НЕ ПАРНЕ");
// }


// if (3 % 2 === 0) {
//     console.log('ПАРНЕ');
// }
//     console.log("НЕ ПАРНЕ");


// if (4 < 3) {
//     console.log('YES');
//     // if(1){

//     // }else{

//     // }
// } else if (4 < 6) {
//     console.log('YES 1');
// } else if (4 < 7) {
//     console.log('YES 2');
// } else if (4 < 8) {
//     console.log('YES 3');
// }else{
//     console.log('NO');
// }





// const result = 5 % 2 === 0 ? 'Парне' : 'Не парне';
// console.log(result);


// https://medium.com/trabe/using-switch-true-in-javascript-986e8ad8ae4f


// const points = 100;
// let partner;
// switch (points) {
//     case 50:
//         partner = 'Base';
//         break;
//     case 75:
//         partner = 'Bronze';
//         break;
//     case 100:
//         partner = 'GOLD';
//         break;
//     default:
//         console.log('Another value');
// }


// const points = 60;
// let partner;
// switch (true) {
//     case 50 >= points:
//         partner = 'Base';
//         break;
//     case 75 >= points:
//         partner = 'Bronze';
//         break;
//     case 100 >= points:
//         partner = 'GOLD';
//         break;
//     default:
//         console.log('Another value');
// }

// console.log(partner);



//-------------------------------------------------


// Глобальна
// Блочна    => const let
// Функціональна => var

// const num = 10;

// if (true) {
//     // const str = 'Hello'
//     // const num = 15;
//     // console.log(str);
//     // console.log(num);
// }
// console.log(num);
// function foo() {

// }

// console.log(str);



// let a = 10;

// if (true) {
//     a = 15;
//     if (true) {
//         a = 5;
//     }
// }

// console.log(a);



// let a = 10;

// if (true) {
//     a = 15;
//     if (true) {
//         a = 5;
//         let a = 22;
//     }
// }

// console.log(a);

// const num = 10;

// for (let i = 0; i < num; i += 1) {
//     if (i % 2 === 0) {
//         console.log(i, 'Парне');
//     } else {
//         console.log(i, 'Не парне');
//     }
// }

// let num = 10
// while (num !== 0) {
//     num -= 1;
//     if (num % 2 === 0) {
//         console.log(num, 'Парне');
//     } else {
//         console.log(num, 'Не парне');
//     }
// }

// let num = 10
// do {
//     num -= 1
//     if (num % 2 === 0) {
//         console.log(num, 'Парне');
//     } else {
//         console.log(num, 'Не парне');
//     }
// } while (num !== 0)









// ПЕРЕРВА ДО 22.30


// Example 1 - Введення користувача та розгалуження
// Використовуючи конструкцію if..else та prompt, напиши код, який питатиме: "Яка офіційна назва JavaScript?". Якщо користувач вводить ECMAScript, то показуй alert з рядком "Правильно!", в іншому випадку - "Не знаєте? ECMAScript!"

// const resp = prompt("Яка офіційна назва JavaScript?")
// let message;
// if(resp !== null){
//     if (resp === 'ECMAScript') {
//         message = "Правильно!";
//     } else {
//         message = "Не знаєте? ECMAScript!";
//     }
// }else{
//     message = 'Не хочеш говорити не потрібно'
// }

// alert(message)


// Example 2 - Відображення часу (if...else)
// Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді рядка формату "14 г. 26 хв.". Якщо значення змінної minutes дорівнює 0, то виводь рядок "14 г.", без хвилин.

// const hours = 15;
// const minutes = 1;
// let timestring;

// if (!minutes) {  //0 => false + ! => true    minutes === 0
//     timestring = `${hours} г.`
// } else {
//     timestring = `${hours} г. ${minutes} хв.`
// }

// console.log(timestring);


// Example 3 - Розгалуження
// Напиши скрипт, який виводить у консоль рядок "Це позитивне число", якщо у prompt користувач ввів число більше нуля. Якщо було введено нуль, виводь в консоль рядок "Це нуль". Якщо передали від'ємне число, у консолі повинен бути рядок "Це негативне число".

// 6 значень які приводяться до FALSE
// 1 ''
// 2 0
// 3 null
// 4 NaN
// 5 undefined
// 6 false

// !false => true


// const userInput = prompt('Введіть число');
// const toNum = Number(userInput);

// if (!isNaN(toNum) && userInput) {
//     if (!toNum) { // toNum === 0
//         console.log("Це нуль");
//     } else if (toNum > 0) {
//         console.log("Це позитивне число");
//     } else {
//         console.log("Це негативне число");
//     }
// } else {
//     alert('Я просив число')
// }



// Example 4 - Вкладені розгалуження
// Напиши скрипт, який порівнює числа у змінних a та b. Якщо обидва значення більше 100, то виведи в консоль максимальне з них. В протилежному випадку у консолі повинна бути сума значення b та числа 512.

// const a = 130;
// const b = 120;


// if (a > 100 && b > 100) {
//     if (a > b) {
//         console.log('a', a);
//     } else if (b > a) {
//         console.log('b', b);
//     } else {
//         console.log('Вони рівні');
//     }
// } else {
//     console.log(b + 512);
// }


// Example 5 - Форматування посилання (endsWith)
// Напиши скрипт який перевіряє чи закінчується значення змінної link символом /. Якщо ні, додай до кінця значення link цей символ. Використовуй конструкцію if...else.

// let link = 'https://my-site.com/about';
// if (!link.endsWith('/')) {
//     link += '/';
// }
// console.log(link);

// Example 6 - Форматування посилання (includes та логічне «І»)
// Напиши скрипт який перевіряє чи закінчується значення змінної link символом /. Якщо ні, додай до кінця значення link цей символ, але тільки в тому випадку, якщо в link є підрядок "my-site". Використовуй конструкцію if...else.

// let link = 'https://somesite.com/about';
// let link = 'https://my-site.com/about';
// // // Пиши код нижче за цей рядок
// if (!link.endsWith('/') && link.includes('my-site')) {
//     link += '/';
// }
// // // Пиши код вище за цей рядок
// console.log(link);

// Example 7 - Форматування посилання (тернарний оператор)
// Виконай рефакторинг коду задачі номер 6, використовуючи тернарний оператор.

// let link = 'https://my-site.com/about';
// // if (link.includes('my-site') && !link.endsWith('/')) {
// //     link += '/';
// // }
// // link = +'/' // Number('/')
// link = link.includes('my-site') && !link.endsWith('/') ?  link + '/' : link

// console.log(link);


// Example 8 - if...else та логічні оператори
// Напиши скрипт який виводитиме в консоль браузера рядок залежно від значення змінної hours.

// Якщо значення змінної hours:

// менше 17, виводь рядок "Pending"
// більше або дорівнює 17 і менше або дорівнює 24, виводь рядок "Expires"
// більше 24 , виводь рядок "Overdue"
// const hours = 10;

// if (hours < 17) {
//     console.log("Pending");
// } else if (hours >= 17 && hours <= 24) {
//     console.log("Expires");
// } else {
//     console.log("Overdue");
// }




// Example 9 - Дедлайн здачі проекту (if...else)
// Напиши скрипт для відображення часу дедлайну здачі проекту. Використовуй конструкцію if...else.

// Якщо до дедлайну 0 днів - виведи рядок "Сьогодні"
// Якщо до дедлайну 1 день - виведи рядок "Завтра"
// Якщо до дедлайну 2 дні - виведи рядок "Післязавтра"
// Якщо до дедлайну 3+ днів - виведи рядок "Дата у майбутньому"
// const daysUntilDeadline = 5;
//  Пиши код нижче за цей рядок





// Example 10 - Дедлайн здачі проекту (switch)
//// Якщо до дедлайну 0 днів - виведи рядок "Сьогодні"
// Якщо до дедлайну 1 день - виведи рядок "Завтра"
// Якщо до дедлайну 2 дні - виведи рядок "Післязавтра"
// Якщо до дедлайну 3+ днів - виведи рядок "Дата у майбутньому"

// const daysUntilDeadline = 1;
// let result;
// switch (daysUntilDeadline) {
//     case 0:
//         result = "Сьогодні";
//         break;
//     case 1:
//         result = "Завтра";
//         break;
//     case 2:
//         result = "Післязавтра";
//         break;
//     default:
//         result = "Дата у майбутньому";
// }

// console.log(result);


// Example 11 - Цикл for
// Напиши цикл for, який виводить у консоль браузера числа за зростанням від min до max, але тільки якщо число кратне 5.

// const max = 100;
// const min = 20;

// for (let i = min; i <= max; i += 1) {
//     if (i % 5 === 0) { // !(i%5)
//         console.log(i);
//     }
// }


// Example 12 - Введення користувача та розгалуження
// Напиши скрипт, який питатиме логін за допомогою prompt та логувати результат у консоль браузера.

// Якщо відвідувач вводить "Адмін", то prompt запитує пароль
// Якщо нічого не введено або натиснуто клавішу Esc - вивести рядок "Скасовано"
// В іншому випадку вивести рядок "Я вас не знаю"
// Пароль перевіряти так:

// Якщо введено пароль "Я адмін", то вивести рядок "Здрастуйте!"
// Інакше виводити рядок "Невірний пароль"












// Поясніть , будь ласка


// 1) В прикладах про області видимості ,чому blockA , block B не доступна
// const global = "global";
// if (true) {
//     const blockC = "block C";

//     // Бачимо глобальну + локальну C
//     console.log(global); // global
//     console.log(blockC); // block C

//     // Змінні blockA і blockB не знайдені в доступних областях видимості.
//     // Буде помилка звернення до змінної.
//     console.log(blockA); // ReferenceError: blockA is not defined
//     console.log(blockB); // ReferenceError: blockB is not defined
// }

// if (true) {
//     const blockB = "block B";

//     // Бачимо глобальну + зовнішню A + локальну B
//     console.log(global); // global
//     console.log(blockA); // block A
//     console.log(blockB); // block B

//     // Змінна blockC не знайдена в доступних областях видимості.
//     // Буде помилка звернення до змінної.
//     console.log(blockC); // ReferenceError: blockC is not defined
// }

// const productName = 'Banana';
// const productPrice = 100;
// const message = `You picked ${productName}, price per item is ${productPrice} credits`;
// console.log(message);





// 5 .. 1
// 11 % 2 = 0
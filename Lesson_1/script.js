// https://developer.mozilla.org/en-US/
// https://uk.javascript.info/


// const maxCoun;
// const maxCount = 100;
// const MAX_COUNT = 100;
// maxCount = 120;


// let totalPrice; //undefined
// totalPrice = 10;
// console.log(totalPrice);
// console.log(totalPrice);

// var totalPrice  = 12;
// console.log(totalPrice);
// totalPrice = 11;



// Примітивні типи даних
// 1 Number
// 2 String
// 3 Boolean //true // false
// 4 null
// 5 undefined

// Значення які приводяться до false
// '' - пустий рядок
// 0
// false
// null
// undefined
// NaN


//Number
// console.log(typeof '0');
// console.log(typeof NaN);
// const result = Number("10px");
// console.log(10 === 10);
// console.log(NaN === NaN);
// console.log(isNaN(NaN));
// console.log(result);
// console.log(typeof result);
// console.log(result);

// console.log(isNaN(result)); // 1 конвертує до числа 2 Перевіряє на NaN
// console.log(Number.isNaN(result)); // 1 Перевіряє на NaN



// const product1 = 100;
// const product2 = undefined;

// console.log(product1 * 2 + product2 * 3);
// console.log();


// const price = 100;
// const qty = 4;
// const total = price * qty;


// let total = 90;
// // total = total + price;
// // console.log(total);
// // total += price;
// total -= 10
// total **= 2
// console.log(total);



// String
// const price = 100; 
// const str = `value ${price * 12}`;
// console.log(str);
//  0123456789
// const str = 'test value';
// // // console.log(str.includes('x'));
// console.log(str.indexOf('t'));
// console.log(str.indexOf('t',1));
// console.log(str[3]);
// console.log(str.indexOf('t',4));

// const value = "Hello"
// const result = value + " " + 'world';
// const result2 = `${value} world`
// console.log(result);
// console.log(result2);


// const value = 10;
// // const result = 10 + '15'
// const result = value + 10 + '15';
// const result2 = "1" + value + 10 + '15';
// console.log(result2);

// const result = '15px' - 10;
// const result = 10 / '15';
// const result = NaN - NaN;
// const result = 'a' - 'b';
// console.log(result);


// const arr = [1, 2, 3];
// arr.splice(0,1)
// console.log(arr);
// let str = 'Hello world';
// console.log(str.slice(1, 5));

// console.log(str);





// Перерва до 21.40













// Example 1 - Математичні оператори
// Виведи на екран загальну кількість яблук та винограду. Різницю яблук та винограду.

// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total)
// const diff = grapes - apples;
// console.log(diff)




// Example 2 - Комбіновані оператори
// Заміни вираз перевизначення комбінованим оператором +=.

// let students = 100;
// // students = students + 50;
// students +=  50;
// console.log(students);


// Example 3 - Пріоритет операторів
// Розбери пріоритет операторів в інструкції привласнення значення змінної result.

// const result = 108 + 223 - 2 * 5;
// console.log(result);


// Example 4 - Клас Math
// Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д. значення змінної value. Використовуй методи Math.floor(), Math.ceil() та Math.round(). Перевір що буде в консолі при значеннях 27.3 та 27.9.

// const value = 27.599;
// console.log(value.toFixed(1));
// console.log(Math.round(value));
// console.log(Math.floor(value));
// console.log(Math.ceil(value));




// Example 5 - Шаблонні рядки
// Склади речення за допомогою шаблонних рядків A has B bots in stock, де A, B - змінні вставлені в рядок.

// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"



// Example 6 - Методи рядків та чейнінг
// Напиши скрипт, який розраховує індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини у метрах.

// Вага та висота зберігаються у змінних weight та height, але не як числа, а в вигляді рядків (спеціально для завдання). Не цілі числа можуть бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;

// let weight = '88,3';
// let height = '1.75';

// weight = Number(weight.replace(',', '.'));
// height = Number(height.replace(',', '.'));
// console.log(height);

// const bmi = Number((weight / Math.pow(height, 2)).toFixed(1))
// console.log(bmi); // 28.8


// Яким буде результат виразів?

// console.log(5 > 4); //true

// console.log(10 >= '7');
// // https://unicode-table.com/en/#0031
// console.log('2' >= '2');
// console.log("A" > 'a');

// console.log('2' < '12');

// console.log('6' == 6);

// console.log('6' === 6);

// console.log('false' === false);

// true => 1
// false => 0
// console.log(1 == true);//true

// console.log(1 === true); // false
//  0       0
// console.log('0' == false); // true

// console.log('0' === false); // false

// console.log('paPaya' < 'papaya'); // true "P" < 'p' 50 < 70

// console.log('Papaya' === 'paPaya'); //50 === 70


// Значення які приводяться до false
// '' - пустий рядок
// 0
// false
// null
// undefined
// NaN
// Яким буде результат виразів?
// && І
// Повертає перший false або останій true
// console.log(true && 3); // 3

// console.log(false && 3); // false

// console.log(true && 4 && 'kiwi');//kiwi
// true   true   true
// console.log(true && 0 && 'kiwi'); // 0


// || АБО
// Або повертає перше значення яке приведеться до true або останій false

// console.log(true || 3); //true

// console.log( 3 || true || 4); 3

// console.log('sdafgh' || false || 7); //'sdafgh'

// console.log(null || 2 || undefined); //2




// -----------------------------------------------------------------

// const str ='hello world';
// console.log(str.length);
// console.log(str.slice(0,6));
// alert('hello'); 
// console.log('world');



// const value = '';
// const message = `${value}` || 'Empty string';
// console.log(message);


function foo(a, b) {
    const result = a + b;
    if (result < 10) {
        return 'Error';
    }
    return result;
}
console.log(foo(2, 3));
console.log(foo(4, 6));
console.log(foo(2, 1));
console.log(foo(5, 8));
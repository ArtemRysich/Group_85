// https://developer.mozilla.org/en-US/docs/Glossary/Hoisting
// Example 9  самостійно + JS Docs

// const a = [1, 2, 3];
// const b = a;

// function foo() {
// console.log(arguments);
// }

// foo(1, 2, 3);
// foo(1, 2, 3, 4, 5);
// foo(1);



// function foo(a) {

// }

// foo(1)



// expression


// const foo = function (a, b, c) {
//     console.log('1', a);
//     console.log('2', b);
//     console.log('3', c);
// }
// console.log(foo(3, 2, 1));


//declaration

// function foo(a, b, c) {
//     console.log('1', a);
//     console.log('2', b);
//     console.log('3', c);
// }

// console.log(foo(3, 2, 1));





/** */

/**  - виклик JS DOCK comment - обов'язково перед функцією (прописужться лише після створення функції)

/**
 * Add value
 * @param {Number} a
 * @param {Number} b
 * @param {Number} c
 * @returns {Number} Summ
 */
function add(a, b, c) {
    const maxValue = 10;
    const summ = a + b + c;
    let message;

    if (summ > maxValue) {
        message = 'Більше'
    } else {
        message = 'Меньше'
    }

    return message;
}

// console.log('3, 2, 1', add(3, 2, 1));
// console.log('32, 1, 5', add(32, 1, 5));

// Патерн повернення
// function add(a, b, c) {
//     const maxValue = 10;
//     const summ = a + b + c;

//     if (summ > maxValue) {
//         return 'Більше'
//     }

//     return 'Меньше';
// }
// console.log(add(3, 2, 1));
// console.log('3, 2, 1', add(3, 2, 1));
// console.log('32, 1, 5', add(32, 1, 5));





// function foo() {
// for (let i = 0; i < arguments.length; i += 1) {
//     console.log(arguments[i]);
// }
// console.log(arguments);
// for(const arg of arguments){
//     console.log(arg);
// }
// console.log(arguments);
// for (let i = 0; i < arguments.length; i += 1) {
//     console.log(arguments[i]);
// }
// const arr = Array.from(arguments);
// console.log(arr);
// const arr = [...arguments]
// console.log(typeof arguments);
// console.log(Array.isArray(arguments));
// console.log(typeof arr);
// console.log(Array.isArray(arr));
// }

// foo(1, 2, 3);
// foo(1, 2, 3, 4, 5);
// foo(false);


// function add(a = 0, b = 0, c = 0) {
//     console.log('c', c);
//     console.log('b', b);
//     console.log('a', a);
//     return a + b + c
// }

// console.log(add(1, 2, 3));
// console.log(add(1, 2));
// console.log(add(1));
// console.log(add());


// Перерва до 21.15





// if (true) {
//     var example = 1;
// }
// v


// function foo(){
//     var example = 1;
// }
// foo()
// console.log(example);



// const example = 1;

// let b = 3;
// function foo(a) {
//     console.log('a', a);
//     a = 99;
//     console.log('a', a);
//     // a = 12
//     // const example = 2;
//     // console.log(example);
//     // console.log(a);
// }
// foo(b)
// console.log('b',b);
// console.log(a);
// console.log(example);


// const b = [1, 2, 3];
// function foo(a) {
//     // a = Array.from(a)
//     // a = [...a];
//     console.log('a', a);
//     a.splice(1, 1)
//     // 

//     console.log('a', a);
//     console.log(a === b);
// }
// foo(b)
// console.log('b', b);


// function showResult(a, b, c) {
//     const maxValue = 10;


//     if (add(a, b, c) > maxValue) {
//         return 'Більше'
//     }

//     return 'Менше';
// }


// function add(a, b, c) {
//     return a + b + c;
// }


// console.log(showResult(11, 3, 4));





// Example 1 - Індекс маси тіла
// Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс маси тіла людини.Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини в метрах.

// Вага та висота будуть спеціально передані як рядки.Не цілі числа можуть бути задані у вигляді 24.7 або 24, 7, тобто як роздільник дробової частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;


/**
 * Розраховує та повертає індекс маси тіла людини
 * @param {String} weight вага особи
 * @param {String} height зріст особи
 * @returns {Number} індекс маси тіла людини
 */
function calcBMI(weight, height) {
    weight = Number(weight.replace(',', '.'))
    height = Number(height.replace(',', '.'))

    return Number((weight / height ** 2).toFixed(1));
}

// const bmi = calcBMI('88,3', '1.75');
// const bmi2 = calcBMI('88.3', '1,75');
// console.log(bmi); // 28.8












// Example 2 - Найменше з чисел
// Напиши функцію min(a, b), яка повертає найменше з чисел a та b.


// function min(a, b) {
//     let minValue;

//     if (a > b) {
//         minValue = b;
//     } else {
//         minValue = a;
//     }

//     return minValue
// }


/**
 * повертає найменше з чисел
 * @param {Number} a
 * @param {Number} b
 * @returns {Number || String} найменше з число || повідомлення про помилку
 */
function min(a, b) {
    if (a > b) {
        return b;
    }

    return a
}


// function min(a, b) {
//     return a > b ? b : a;
// }

// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1




// Example 3 - Площа прямокутника
// Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами, значення яких будуть передані до параметра dimensions у вигляді рядка.Значення гарантовано розділені пробілом.



/**
 * Oбчислення площі прямокутника
 * @param {String} dimensions
 * @returns {Number}
 */
function getPerimeter(dimensions) {
    dimensions = dimensions.split(' ')
    return 2 * (Number(dimensions[0]) + Number(dimensions[1]))
}
// console.log(getPerimeter('8 11'));


/**
 * Oбчислення площі прямокутника
 * @param {String} dimensions
 * @returns {Number}
 */
function getRectArea(dimensions) {
    dimensions = dimensions.split(' ')
    console.log(dimensions);
    return Number(dimensions[0]) * Number(dimensions[1]);
}

// console.log(getRectArea('8 11'));













// Example 4 - Логування елементів
// Напиши функцію logItems(items), яка отримує масив та використовує цикл for, який для кожного елемента масиву буде виводити в консоль повідомлення у форматі < номер елемента > - <значення елемента>. Нумерація елементів повинна починатися з 1.

//     Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено 1 - Mango, а для індексу 2 виведе 3 - Ajax.



/**
 * виводити в консоль повідомлення
 * @param {Array} items
 */
function logItems(items) {
    // Якщо двічі та більше компенсуємо значення порядкового номера
    // for (let i = 0, j = 1; i < items.length; i += 1, j += 1) {
    //     console.log(`${j} - ${items[i]}`);
    // }

    // Якщо 1 раз компенсуємо значення порядкового номера
    for (let i = 0; i < items.length; i += 1) {
        console.log(`${i + 1} - ${items[i]}`);
    }
}

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);


//     Example 6 - Пошук найбільшого елемента
//     Напиши функцію findLargestNumber(numbers)яка шукає найбільше число в масиві.

//     function findLargestNumber(numbers) { }

//     console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
//     console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83













//     Example 7 - Середнє значення
//     Напишіть функцію calAverage() яка приймає довільну кількість аргументів і повертає їхнє середнє значення. Усі аргументи будуть лише числами.

// function calAverage() {
//     let total = 0;

//     for (const num of arguments) {
//         total += num;
//     }

//     return total / arguments.length
// }

// function calAverage() {
//     const arr = Array.from(arguments);
//     let total = 0;

//     for (const num of arr) {
//         total += num;
//     }

//     return total / arr.length
// }


// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2











//     Example 8 - Форматування часу
//     Напиши функцію formatTime(minutes) яка переведе значення minutes (кількість хвилин) у рядок у форматі годин та хвилин HH:MM.


// function formatTime(minutes) {
// const hours =  Math.floor(minutes / 60);
// const min = minutes % 60;
// return `${hours.toString().padStart(2,'0')} : ${min.toString().padStart(2,'0')}`
// }

// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"












//     Example 9 - Колекція курсів (includes, indexOf, push і т. д.)
//     Напишіть функції для роботи з колекцією навчальних курсів courses:

//     addCourse(name) - додає курс до кінця колекції
//     removeCourse(name) - видаляє курс із колекції
//     updateCourse(oldName, newName) - змінює ім'я на нове
//     const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

//     addCourse('Express');
//     console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
//     addCourse('CSS'); // 'Ви вже маєте такий курс'

//     removeCourse('React');
//     console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
//     removeCourse('Vue'); // 'Курс із таким ім'ям не знайдено'

//     updateCourse('Express', 'NestJS');
//     console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']





// const langs = ["python", "javascript", "c++", "haskel", "php", "ruby"];

// const result = [];

// for (let i = 0; i < langs.length; i += 1) {
//     let max = langs[i];

//     if (result.includes(langs[i])) {
//         continue;
//     }

//     // let max = result.includes(langs[i]) ? 'z' : langs[i];
//     for (let j = 0; j < langs.length; j += 1) {
//         if (max > langs[j] && !result.includes(langs[j])) {
//             max = langs[j];
//             i = -1
//         }
//     }
//     result.push(max)
// }
// console.log('Result: ', result);



// for (let i = 0; i < langs.length; i += 1) {
//     let max = langs[i];
//     for (let j = i; j < langs.length; j += 1) {
//         if (max > langs[j]) {
//             max = langs[j];
//         }
//     }
//     i = -1;
//     langs.splice(langs.indexOf(max), 1);
//     result.push(max);
// }
// console.log('result:', result);

// (із збереженням початкового масиву langs):

// const result = [];

// console.log('start', langs);
// let total = 0
// for (let i = 0; i < langs.length; i += 1) {
//     let max = langs[i];
//     for (let j = 0; j < langs.length; j += 1) {
//         if (max > langs[j] && !result.includes(langs[j])) {
//             max = langs[j];
//             i = -1;
//         }
//         total += 1
//     }
//     if (!result.includes(max)) {
//         result.push(max);
//     }
// }
// console.log('start', langs);
// console.log('result', result);
// console.log(total);

const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// let total = 0;
// for (let i = 0; i < langs.length - 1; i += 1) {
//     for (let j = i + 1; j < langs.length; j += 1) {
//         if (langs[i] > langs[j]) {
//             let temp = langs[i];
//             langs[i] = langs[j];
//             langs[j] = temp;
//         }
//         total += 1
//     }
// }
// console.log(total);
// console.log(langs);
// const result = []
// let total = 0
// for (let i = 0; i < langs.length; i++) {
//     let addResult = false;

//     for (let j = 0; j < result.length; j++) {
//         if (langs[i] < result[j]) {
//             result.splice(j, 0, langs[i]);
//             addResult = true;
//             total += 1
//             break;
//         }
//         total += 1
//     }
//     if (!addResult) {
//         result.push(langs[i]);
//     }
// }
// console.log(result);
// console.log(total);

// for (let i = 0; i < langs.length; i += 1) {
//     let max = langs[i];
//     let indexToDelete = i;
//     for (let j = i; j < langs.length; j += 1) {
//         if (langs[j] > max) {
//             max = langs[j];
//             indexToDelete = j;
//         }
//         total += 1;
//     }
//     langs.splice(indexToDelete, 1);
//     langs.unshift(max);
// }


// function indexOf(arr, ele) {
//     for (let i = 0; i < arr.length; i += 1) {
//         if (arr[i] === ele) {
//             return i
//         }
//     }
//     return -1
// }





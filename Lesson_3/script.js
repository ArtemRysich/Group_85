// Example 7 - ДОДАТКОВО 


const arr = [true, 1, 'str', null, undefined, [4, 5], {}];
console.log(arr);

function foo() {
    console.log(arguments);
}


foo(1, 2, 3, 4, 56, 7)
// const result = [true, 1, 'str', [4, 5], {}, 55, 'hello'];


// console.log(result[0]);
// console.log(result[result.length - 1]);



// for(const item of result){
//     console.log(item);
// }

// for(let i = 0; i < result.length; i+=1){
//     console.log(`index - ${i}`,result[i]);
// }



// let num = 5;
// num = 2;



// const arr = ['start', 1, 2, 3, 'end'];
// const idx = arr.indexOf(2);
// console.log(idx);
// // arr[idx] = 44;
// // arr.splice(idx, 1, 55, 66)
// // arr.splice(idx + 1, 0, 55, 66)
// // arr.splice(idx)

// const test = arr.splice(1, 2, 0)
// console.log(arr);
// console.log(test);


// console.log(arr);
// console.log(arr.length);

// push
// const len = arr.push(5, 6, 7);
// console.log(len);

// unshift
// const len = arr.unshift(-2,-1,0)
// console.log(arr);
// console.log(len);


// pop
// const test = arr.pop() * 3;
// console.log(arr)
// console.log(test);;

//shift
// const item = arr.shift();

// console.log(arr);
// console.log(item);




// let a = 1;
// let b = a;

// a = 2

// console.log(a === b);


// const test1 = [1, 2, 3];
// const test2 = [4, 5, 6];
// const test = 1;
// // console.log(a);
// // Array arr
// function foo(qwerty) {
//     qwerty.pop()
// }

// foo(test1)
// foo(test2)

// console.log(test1);
// console.log(test2);
// const b = a;

// a.pop()
// console.log('a',a);
// console.log('b',b);
// // const c = [1, 2, 3]

// console.log(a === b);









// const numbers = [1, 2, 3]
// console.log(numbers.indexOf(2) !== -1);
// console.log(Boolean(1));
// console.log(!!~-1);
//!!~ -(0 + 1)
//!!~ -(-1 + 1)
// console.log(!!~numbers.indexOf(2));
// console.log(numbers.includes(2));



// ДО 21.30









//------------------------------------------------------------------------------------------------------------------------------------//
// Example 1 - Базові операції з масивом
// Створіть масив genres з елементами «Jazz» та «Blues».
// Додайте «Рок-н-рол» до кінця.
// Виведіть у консоль перший елемент масиву.
// Виведіть у консоль останній елемент масиву. Код повинен працювати для масиву довільної довжини.
// Видаліть перший елемент та виведіть його в консоль.
// Вставте «Country» та «Reggae» на початок масиву.
// const genres = ;


// const genres = ['Jazz', 'Blues'];
// genres.push('Рок-н-рол')

// console.log(genres[0]);
// console.log(genres[genres.length - 1]);
// console.log(genres);

// const first = genres.shift();
// console.log(genres);
// console.log(first);
// genres.unshift('Country', 'Reggae')
// console.log(genres);

//splice
// const genres = ['Jazz', 'Blues'];
// genres.splice(genres.length, 0, 'Рок-н-рол')
// console.log(genres.splice(0, 1)[0]);
// genres.splice(0, 0, 'Country', 'Reggae')
// console.log(genres);









// Example 2 - Масиви та рядки
// Напиши скрипт для обчислення площі прямокутника зі сторонами, значення яких зберігаються у змінній values у вигляді рядка. Значення гарантовано розділені пробілом.

// const values = '8 11';
// console.log(values[0]);
// console.log(values[1]);
// // Array -> arr
// const arr = values.split(' ');
// const result = arr[0] * arr[1]
// console.log(result);











// Example 3 - Перебір масиву
// Напиши скрипт для перебору масиву fruits циклом for. Для кожного елемента масиву виведи в консоль рядок у форматі номер_елемента: значення_елемента. Нумерація елементів повинна починатися з 1.

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];
// for (let i = 0; i < fruits.length; i+=1){
//     console.log(`номер елемента: ${i + 1} значення елемента ${fruits[i]}`);
// }
// console.log('-------------------------------');
// for (let i = 0, n = 1; i < fruits.length; i += 1, n += 1) {
//     console.log(`номер елемента: ${n} значення елемента ${fruits[i]}`);
// }








// Example 4 - Масиви та цикли
// Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача. У змінних names та phones зберігаються рядки імен та телефонних номерів, розділені комами. Порядковий номер імен та телефонів у рядках вказують на відповідність. Кількість імен та телефонів гарантовано однакова.

// const names = 'Jacob,William,Solomon,Artem';
// const phones = '89001234567,89001112233,890055566377,890055566300';
// const namesToArr = names.split(',');
// const phonesToArr = phones.split(',');
// console.log(namesToArr);
// console.log(phonesToArr);

// for (let i = 0; i < namesToArr.length; i +=1){
//     console.log(`${namesToArr[i]} - ${phonesToArr[i]}`);
// }

// for (let i = 0; i < namesToArr.length && i < phonesToArr.length; i +=1){
//     console.log(`${namesToArr[i]} - ${phonesToArr[i]}`);
// }




// Example 5 - Масиви та рядки
// Напиши скрипт, який виводить у консоль усі слова рядка крім першого і останнього. Результуючий рядок не повинен починатися або закінчуватися символ пробілу. Скрипт повинен працювати для будь-якого рядка.

// const string = 'Welcome to the future';
// const arr = string.split(' ');
// const first = arr.shift();
// const last = arr.pop();
// const result = arr.join(' ')
// console.log(result);
// console.log('first', first);
// console.log('last', last);


// Example 6 - Масиви та рядки
// Напиши скрипт, який «розгортає» рядок (зворотний порядок літер) і виводить його в консоль.
// const string = 'Welcome to the future';
// const SEPARATOR = '';
// const result = string.split(SEPARATOR).reverse().join(SEPARATOR);
// console.log(result);

// const string = 'Welcome, to the - future';
// const separators = [',', '-'];
// const SEPARATOR = '';
// const result = string.split(SEPARATOR);

// for (let i = 0; i < result.length; i += 1) {
//     if (separators.includes(result[i])) {
//         result.splice(i, 1)
//     }
// }
// const arr = result.join(SEPARATOR).replaceAll('  ', ' ').split(' ');

// for (let i = 0; i < arr.length; i += 1) {
//     const item = arr[i].split(SEPARATOR).reverse().join(SEPARATOR)
//     arr[i] = item
// }
// console.log(arr.join(' '));





// Example 7 - Сортування масиву із циклом
// Напиши скрипт сортування масиву рядків в алфавітному порядку за першою літерою елемента.
// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// const result = [];

// const exm = [...langs].sort((a, b) => a.localeCompare(b))
// console.log('example', exm);

// for (let i = 0; i < langs.length; i += 1) {
//     let max = langs[i];
//     for (let j = i; j < langs.length; j += 1) {
//         if (max > langs[j] && !result.includes(langs[j])) {
//             max = langs[j];
//         }
//     }
//     result.push(max)
// }
// console.log(result);




// Example 8 - Пошук елемента
// Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.

// const numbers = [2, 17, 94, 1, 23, 37];
// let min = numbers[0];

// for (const number of numbers) {
//     if (min > number) {
//         min = number;
//     }
// }


// console.log(min); // 1


// чи можно в case використовувати быльш нiж одну let? наприклад ...... case time:      price=20;    message= "OK". до цього звичайно було прописано let price; let message


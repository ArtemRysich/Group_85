// import {User,add} from './helpers/helper';
// import * as methods from './helpers/helper';
// console.log(methods.add());  
// const newUser = new methods.User('Test name');
// console.log(newUser);
// import qwerty from './helpers/helper';
// console.log(qwerty);
// console.log(add);
// add()
// const newUser = new User('Test name');
// console.log(newUser);





import { User, add as customAdd } from "./helpers/helper";



function add() {
    console.log('some task');
}

console.log(add);
console.log(customAdd);
console.log(User);






// потрібно створити функцію яка буде формувати чергу в магазині
// 1 перший параметр масив, кілікість елементів це кількість покіпців, значення елементу масиву це час який покупець витратить на касі
// 2 параметр це кількість кас
// Повертає обєкт де ключ це номер касси, значення це час черги на касі
// 12 + 2 + 15 = 29
// 3 + 5 + 6 + 7 = 21
// { 1 : 29, 2 : 21}

function fn(arr, count) {
    const obj = {};
    for (let i = 1; i <= count; i += 1) {
        obj[i] = 0;
    }
    console.log(obj);
    // arr.forEach(item => {
    //     const values = Object.values(obj);
    //     const min = Math.min(...values);
    //     const idx = values.indexOf(min) + 1;
    //     obj[idx] += item;
    // });
    // console.log(obj);


    return arr.reduce((acc, item) => {
        acc[Object.values(acc).indexOf(Math.min(...Object.values(acc))) + 1] += item;
        return acc
    }, obj)
}



console.log(fn([12, 3, 5, 6, 2, 15, 7], 2));
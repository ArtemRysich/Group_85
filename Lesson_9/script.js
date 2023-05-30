// 'use strict';
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing

// http://xn--80adth0aefm3i.xn--j1amh/window
// ПРАВИЛА ВИЗНАЧЕННЯ THIS
// 1 Визначити з яким типом функції працюємо
// 2 Маємо умовне поділення на два табори
// 2.1 Перший це Function Declaration & Function Expression
// 2.2 Другий це Arrow Function
// 3 Function Declaration & Function Expression визначають this тим хто їх викликав, перший ліворуч

// const user = {
//     name: 'Test User',
//     getName() {
//         console.log(this.name); //'Test User',
//     }
// }
// user.getName()

// 4 Arrow Function в рамках чого вона була створена

// const deepThis = () => {
//     console.log(this);
// }

// const admin = {
//     name: 'Admin',
//     city: 'Odessa',
//     getThis() {
//         console.log(this);
//         deepThis() //window
//     }
// }
// admin.getThis()









// function foo() {
//     console.log(this);
// }
// foo()
// console.log(this);

// const arrow = () => {
//     console.log(this);
// }

// arrow()


// const user = {
//     name: 'Test User',
//     getName() {
//         console.log(this.name);
//     }
// }
// () {
//     console.log(user.name);
// }

// const admin = {
//     name: 'Test Admin',
//     getName: user.getName
// }
// user.getName()
// admin.getName()



// console.log(this);


// function getName() {
//     console.log(this);
// }


// const user = {
//     name: 'User',
//     city: 'Lviv',
//     getName
// }
// user.getName()
// const admin = {
//     name: 'Admin',
//     city: 'Odessa',
//     getName
// }
// admin.getName()


// const user = {
//     name: 'User',
//     city: 'Lviv',
//     thisUser: this,
//     skills: {
//         js: true,
//         html: true,
//         thisSkills: this,
//         getSkills(){
//             console.log(this);
//         }
//     }
// }

// user.skills.getSkills();
// console.log(user.thisUser);//user
// console.log(user.skills.thisSkills);//skill


// getThis - function declaration/expression
// const user = {
//     name: 'User',
//     city: 'Lviv',
//     getThis(){
//         console.log(this);
//     }
// }
// user.getThis()// user

//getThis - arrow function
// const admin = {
//     name: 'Admin',
//     city: 'Odessa',
//     getThis: () => {
//         console.log(this);
//     }
// }

// admin.getThis()




// const user = {
//     name: 'User',
//     city: 'Lviv',
//     getThis() {
//         console.log(this);
//         const deepThis = () => {
//             console.log(this); // user
//         }
//         deepThis()
//     }
// }
// user.getThis()
//-----------------------------------------------------------
// Arrow function бере тільки батьківський this з місця де вона була оголошена

// const deepThis = () => {
//     console.log(this);
// }

// const admin = {
//     name: 'Admin',
//     city: 'Odessa',
//     getThis() {
//         console.log(this);
//         deepThis() // admin ? window
//     }
// }
// admin.getThis()


// const user = {
//     name: 'User',
//     skills: ['html', 'css'],
//     addSkill(skill) {
//         console.log('Skill has been added', skill);
//         this.skills.push(skill)
//     },
//     removeSkill(skill) {
//         if (this.skills.includes(skill)) {
//             const idx = this.skills.indexOf(skill);
//             this.skills.splice(idx, 1);
//             console.log('Skill has been removed', skill);
//         } else {
//             console.log('Not found');
//         }
//     }
// }

// function process(skill, callback) {
//     console.log('Зачекайте декілька хвилин');
//     callback(skill)
//     // function callback (skill) {
//     //     console.log('Skill has been added', skill);
//     //     this.skills.push(skill)
//     // }
//     // callback(skill)

// }
// console.log(user.addSkill);
// console.log('bind',user.addSkill.bind(user));
// process('js', user.addSkill.bind(user))
// console.log(user.skills);
// process('js', user.removeSkill.bind(user))
// console.log(user.skills);



// user.addSkill('js')
// console.log(user.skills);
// user.removeSkill('js')
// console.log(user.skills);


//call
// const arr = [1, 2]
// const objA = {
//     name: 'objA'
// }
// function foo(a, b) {
//     console.log(this, a, b);
// }
// foo.call(objA, 1, 2)
// foo.call(objA,...arr)
//apply
// const arr = [1, 2]
// const objA = {
//     name: 'objA'
// }
// function foo(a, b) {
//     console.log(this);
//     console.log('a',a);
//     console.log('b',b);
// }
// foo.apply(objA,[1, 2])

//bind

// const objA = {
//     name: 'objA'
// }

// const objB = {
//     name: 'objB'
// }
// function foo(a, b) {
//     console.log(this);
//     console.log('a', a);
//     console.log('b', b);
// }
// const copy = foo.bind(objA);
// copy(1, 3)
// copy.call(objB,2, 4)
// copy(3, 5)
// copy(4, 6)
// console.log(copy);
//------------------------------------
// const objA = {
//     name: 'objA'
// }

// const  foo = (a, b) => {
//     console.log(this);
//     console.log('a', a);
//     console.log('b', b);
// }

// foo.call(objA, 1, 2)
// foo.apply(objA, [1, 2])
// const copy = foo.bind(objA, 1, 2)
// copy()






// Перерва до 21.25











// Example 1 - Майстерня коштовностей
// Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю і розраховує та повертає загальну вартість каменів з таким ім'ям, ціною та кількістю з властивості stones.

// const chopShop = {
//     stones: [
//         { name: 'Emerald', price: 1300, quantity: 4 },
//         { name: 'Diamond', price: 2700, quantity: 3 },
//         { name: 'Sapphire', price: 1400, quantity: 7 },
//         { name: 'Ruby', price: 800, quantity: 2 },
//     ],
//     calcTotalPrice(stoneName) {
//         // const stone = this.stones.find(({ name }) => name === stoneName);
//         // if (stone) {
//         //     return stone.price * stone.quantity
//         // }

//         // return 'Not Found';
//         const { price, quantity } = this.stones.find(({ name }) => name === stoneName);
//         return price * quantity;
//     },
// };

// console.log(chopShop.calcTotalPrice('Emerald')); // 5200
// console.log(chopShop.calcTotalPrice('Diamond')); // 8100
// console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
// console.log(chopShop.calcTotalPrice('Ruby')); // 1600



// Example 2 - Телефонна книга
// Виконайте рефакторинг методів об'єкту phonebook щоб код запрацював.
// function getDate() {
//     return Date.now();
// };
// const phonebook = {
//     contacts: [],
//     add(contact) {
//         const newContact = {
//             list: 'default',
//             ...contact,
//             id: this.generateId(),
//             createdAt: getDate(),
//         };
//         this.contacts.push(newContact);
//     },
//     generateId() {
//         return '_' + Math.random().toString(36).substr(2, 9);
//     },

// };
// // phonebook.generateId()

// phonebook.add({
//     name: 'Mango',
//     email: 'mango@mail.com',
//     list: 'friends',
// });


// phonebook.add({
//     name: 'Poly',
//     email: 'poly@hotmail.com',
// });
// console.log(phonebook.contacts);
// Example 3 - Калькулятор
// Створіть об'єкт calculator з трьома методами:

// read(a, b)- приймає два значення та зберігає їх як властивості об'єкта.
// add() - повертає суму збережених значень.
// mult() - перемножує збережені значення та повертає результат.


// const calculator = {
//     //   4      5
//     read(a = 0, b = 0) {
//         this.a = a;
//         this.b = b;
//     },

//     add() {
//         //    || ?? null undefined
//         // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing

//         return (this.a ?? 0) + (this.b ?? 0);
//         // if (this.a === undefined) {
//         //     this.a = 0;
//         // }
//         // if (this.b === undefined) {
//         //     this.b = 0
//         // }
//         // return this.a + this.b
//     },

//     mult() {
//         return !this.a && !this.b ? 0 : (this.a ?? 1) * (this.b ?? 1);
//     }


// };

// console.log(calculator);
// calculator.read(-2, -3)
// console.log(calculator.mult());
// // console.log(calculator.add())
// console.log(calculator);


// console.log('' || 1); // 1
// console.log(0 || 1);// 1
// console.log(undefined || 1);//1
// console.log(null || 1);//1
// console.log(NaN || 1);//1
// console.log(false || 1);//1



// console.log('' ?? 1);// ''
// console.log(0 ?? 1); // 0
// console.log(NaN ?? 1); //NaN
// console.log(false ?? 1);// false



// console.log(undefined ?? 1); //1
// console.log(null ?? 1); //1


// console.log(0 ?? null ?? true);

// console.log(null ?? true ?? 0);
// console.log(undefined ?? false ?? 0);
// console.log(undefined ?? null ?? 0);



// const arr = [];

// if (!arr.length) {
//     console.log('Array is empty');
// }
const obj = {}
console.log(obj);
const keys = Object.keys(obj);
if (!keys.length) {
    console.log('Object is empty');
}
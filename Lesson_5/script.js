

// const user = {
//     email: 'test@gmail.com',
//     getEmail: function () {
//         console.log(this.email);
//     }
//     // getEmail(){
//     //     console.log(this.email);
//     // }
// }
// user.getEmail()
// const key = 'email';
// console.log(user.key);
// console.log(user[key]); //user['email']
// console.log(user.email);
// console.log(user['email']);






// const user = {
//     name: 'Test',
//     age: 28,
//     skills: ['html', 'css', 'js'],
//     country: {
//         Lviv: 'Адреса з Львову',
//         Odessa: 'Адреса з Одеси',
//         testKEY: {
//             testValue: 'Hello world'
//         }
//     }
// }


// const test = user;
// console.log(test === user);
// const copyUser = { ...user }
// const copyUser1 = JSON.parse(JSON.stringify(user))

// console.log(copyUser === user);
// console.log(copyUser.country === user.country);

// function iterObject(obj) {
//     for (const key in obj) {
//         if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
//             iterObject(obj[key]);
//         }
//         // console.log(user.key);
//         console.log('Ключ', key);
//         console.log('Значення', obj[key]);

//     }
// }

// iterObject(user)





// const user = {
//     name: 'Test',
//     age: 28,
//     skills: ['html', 'css', 'js'],
//     country: {
//         Lviv: 'Адреса з Львову',
//         Odessa: 'Адреса з Одеси',
//         testKEY: {
//             testValue: 'Hello world'
//         }
//     }
// }

// const admin = Object.create(user)
// admin.name = "Admin admin";
// admin.age = 33;
// admin.testKEY = {
//     testValue: 'Hello world'
// }
// console.log(admin.name);
// console.log(admin);
// for (const key in admin) {
//     if (admin.hasOwnProperty(key)) {
//         console.log(admin[key]);
//     }
// }

// const keys = Object.keys(admin);
// for(const key of keys){
//     console.log(admin[key]);
// }
// console.log(keys);

// const values = Object.values(admin);
// console.log(values);
// for(const value of values){
//     console.log(value);
// }

// const entries = Object.entries(admin);
// console.log(entries);
// for (const entry of entries) {
//     console.log(`Ключ ${entry[0]} значення `, entry[1]);
// }











// console.log(user.country.Lviv);
// console.log(user.name);
// console.log(typeof user);

// console.log(user['age']);
// console.log(user['country']['Lviv']);




// const user = {
//     name: 'Test',
//     age: 28,
// }
// console.log(user);

// delete user.age;

// console.log(user);



// const banana = {
//     id: 1,
//     name: 'Banana',
//     qty: 4,
//     price: 75,
//     getTotal() {
//         console.log(`Product ${this.name} total ${this.qty * this.price}`);
//     }
// }
// banana.getTotal()


// const apple = {
//     id: 2,
//     name: 'Apple',
//     qty: 17,
//     price: 35,
//     getTotal: banana.getTotal
// }
// apple.getTotal()





// function sum() {
//     console.log(`Product ${this.name} total ${this.qty * this.price}`);
// }

// const banana = {
//     id: 1,
//     name: 'Banana',
//     qty: 4,
//     price: 75,
//     getTotal: sum
// }
// banana.getTotal()

// const apple = {
//     id: 2,
//     name: 'Apple',
//     qty: 17,
//     price: 35,
//     getTotal: sum
// }
// apple.getTotal()



// Перерва до 21.20











// Example 1 - Основи об'єктів
// Напиши скрипт, який для об'єкта user, послідовно:

// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of
// Код
// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user['premium'] = false;
// const keys = Object.keys(user);
// for(const key of keys){

//     console.log(key + ' :', user[key]);
// }
// console.log(keys);

// const entries = Object.entries(user);

// for(const entry of entries){
// console.log(`${entry[0]} : ${entry[1]}`);
// }

// console.log(entries);



// Example 2 - метод Object.values()
// У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для підсумовування всіх зарплат і збережіть результат у змінній sum. Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.

// Код
// const salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
// };
// let sum = 0;
// const values = Object.values(salaries);
// for (const value of values) {
//     sum += value
// }
// console.log(sum);

// for (const key in salaries) {
//     if (salaries.hasOwnProperty(key)) {
//         sum +=salaries[key]
//     }
// }
// console.log(sum);


// Example 3 - Масив об'єктів
// Напишіть функцію calcTotalPrice(stones, stoneName), яка приймає масив об'єктів та рядок з назвою каменю. Функція рахує і повертає загальну вартість каміння з таким ім'ям, ціною та кількістю з об'єкта

// Код
// const stones = [
//     { name: 'Смарагд', price: 1300, quantity: 4 },
//     { name: 'Діамант', price: 2700, quantity: 3 },
//     { name: 'Сапфір', price: 400, quantity: 7 },
//     { name: 'Щебінь', price: 200, quantity: 2 },
// ];


// function calcTotalPrice(stones, stoneName) {
//     for (const stone of stones) {
//         if (stone.name === stoneName) {
//             return stone.price * stone.quantity
//         }
//     }
//     return 'Not found'
// }

// console.log(calcTotalPrice(stones, 'Діамант'));





// Example 4 - Комплексні завдання
// Напиши скрипт управління особистим кабінетом інтернет банку. Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.

// /*
//  * Типів транзакцій всього два.
//  * Можна покласти чи зняти гроші з рахунку.
//  */
// const Transaction = {
//     DEPOSIT: 'deposit',
//     WITHDRAW: 'withdraw',
// };

// /*
//  * Кожна транзакція це об'єкт із властивостями: id, type та amount
//  */

// const account = {
//     // Поточний баланс рахунку
//     balance: 1500,

//     // Історія транзакцій
//     transactions: [{
//         amount: 1500,
//         id: 1,
//         type: "deposit"
//     }],

//     /*
//      * Метод створює та повертає об'єкт транзакції.
//      * Приймає суму та тип транзакції.
//      */
//     createTransaction(amount, type) {
//         const obj = {
//             id: Date.now(),
//             amount,
//             type
//         };
//         this.transactions.push(obj)
//     },

//     /*
//      * Метод, що відповідає за додавання суми до балансу.
//      * Приймає суму транзакції.
//      * Викликає createTransaction для створення об'єкта транзакції
//      * після чого додає його до історії транзакцій
//      */
//     deposit(amount) {
//         this.balance += amount
//         this.createTransaction(amount, Transaction.DEPOSIT)
//     },

//     /*
//      * Метод, що відповідає за зняття суми з балансу.
//      * Приймає суму транзакції.
//      * Викликає createTransaction для створення об'єкта транзакції
//      * після чого додає його до історії транзакцій.
//      *
//      * Якщо amount більше ніж поточний баланс, виводь повідомлення
//      * про те, що зняття такої суми не можливе, недостатньо коштів.
//      */
//     withdraw(amount) {
//         if (this.balance < amount) {
//             return 'недостатньо коштів';
//         }

//         this.balance -= amount
//         this.createTransaction(amount, Transaction.WITHDRAW)
//     },

//     /*
//      * Метод повертає поточний баланс
//      */
//     getBalance() {
//         return this.balance;
//     },

//     /*
//      * Метод шукає та повертає об'єкт транзакції по id
//      */
//     getTransactionDetails(id) {
//         for (const transaction of this.transactions) {
//             if (transaction.id === id) {
//                 return transaction
//             }
//         }
//         return 'Not found'
//     },

//     /*
//      * Метод повертає кількість коштів
//      * певного типу транзакції з усієї історії транзакцій
//      */
//     getTransactionTotal(type) {
//         let total = 0;
//         for (const transaction of this.transactions) {
//             if (transaction.type === type) {
//                 total += transaction.amount;
//             }
//         }
//         return total
//     },
// };

// account.createTransaction(1000, Transaction.DEPOSIT)
// account.createTransaction(2000, Transaction.DEPOSIT)
// account.deposit(1500)
// account.withdraw(500);
// console.log(account);
// console.log(account.getTransactionTotal("deposit"));





// const Transaction = {
//     DEPOSIT: 'deposit',
//     WITHDRAW: 'withdraw',
//     test: {
//         num: 32
//     }
// };

// Object.freeze(Transaction)
// console.log(Transaction);
// Transaction.test.num = 44
// console.log(Transaction);

// const firstName = 'name'
// const person = {
//     firstName: "John",
//     age: 30,
// };
// const { firstName: personName } = person;
// console.log(personName);





// const arr = [1, 2, 3, 45, 65];
// const arr1 = [1, 2, [1, 2, 44], 65];
// const arr3 = [1, 2, 3, 45, [1, 2, 44, [55, [22, 44, 12, [26, 27]]]], 65];



// function addItems(arr) {
//     let sum = 0;
//     for (const item of arr) {
//         if (Array.isArray(item)) {
//             sum += addItems(item);
//         } else {
//             sum += item;
//         }
//     }
//     return sum
// }
// console.log(addItems(arr3));




// const arr1 = [1, 2, [1, 2, 44], 65];








//     Example 9 - Колекція курсів (includes, indexOf, push і т. д.)
//     Напишіть функції для роботи з колекцією навчальних курсів courses:

// addCourse(name) - додає курс до кінця колекції
// removeCourse(name) - видаляє курс із колекції
// updateCourse(oldName, newName) - змінює ім'я на нове
const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];
function addCourse(name) {
    if (!courses.includes(name)) {
        courses.push(name)
        return;
    }

    return 'Ви вже маєте такий курс';
}
addCourse('Express');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
addCourse('CSS'); // 'Ви вже маєте такий курс'


// function removeCourse(name) {
//     const idx = courses.indexOf(name);
//     if (idx === -1) { //!!~idx
//         return "Курс із таким ім'ям не знайдено"
//     }
//     courses.splice(idx, 1)
// }

removeCourse('React');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
removeCourse('Vue'); // 'Курс із таким ім'ям не знайдено'


// function updateCourse(oldName, newName) {
//     const idx = courses.indexOf(oldName);
//     if (idx === -1) { //!!~idx
//         return "Курс із таким ім'ям не знайдено"
//     }
//     // courses.splice(idx, 1, newName);
//     courses[idx] = newName;
// }

updateCourse('Express', 'NestJS');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
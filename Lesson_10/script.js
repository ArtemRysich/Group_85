// -------------------------------------------------------------------
// Реалізуйте клас Student, який успадковуватиметься від класу User. Цей клас повинен мати такі властивості:
// name приватна властивість (ім'я, успадковується від User),
// surname приватна властивість (прізвище, успадковується від User),
// year (рік вступу до вузу).
// Клас повинен мати метод getFullName() (успадковується від User), за допомогою якого можна вивести одночасно ім'я та прізвище студента.
// Також клас повинен мати метод getCourse(), який виводитиме поточний курс студента (від 1 до 5, якщо значення перевищує 5  курс виводити що студент являєтсья випускником).
// Курс обчислюється так: потрібно від поточного року відняти рік вступу до вузу. Поточний рік отримаєте самостійно (читати документацію!!!).
// Приклад ініціалізації екземпляру класа:
// const student = new Student('Петрик', 'Пяточкин', 2019);

// student.getFullName(); //поверне 'Петрик Пяточкин'
// student.getCourse();   //поверне 3 (третій курс)










// const objA = {
//     name: 'objA',
//     sayHello() {
//         console.log(this.name);
//     }
// }

// const objB = Object.create(objA);
// objB.name = 'objB'
// console.log(objB);
// console.log(objB.name);
// objB.sayHello()
// console.log(objA.go());




const user = {
    name: 'user',
    email: 'test@gmail.com'
}


// const admin = Object.create(user);
// admin.root = true;

// const superAdmin = Object.create(admin)
// superAdmin.secretKey = 'qwerty';
// console.log(superAdmin);
// console.log(superAdmin.name);

// const customer = Object.create(user);
// customer.limit = 10000;



// class User {
//     static counter = 0;
//     static #addUser() {
//         this.counter += 1;
//     }
//     #email;
//     constructor(name, age, email = 'blabla') {
//         this.name = name;
//         this.age = age;
//         this.#email = email;
//         User.#addUser();
//     }

//     #checkAge() {
//         if (this.age >= 18) {
//             return true
//         }

//         return false
//     }

//     buy(product) {
//         if (!this.#checkAge()) {
//             alert('😂')
//         }

//     }
//     get email() {
//         const pass = 'qwerty111';
//         const message = prompt(`${this.name} Enter secret key`)
//         if (pass === message) {
//             return this.#email
//         }
//         alert('GO HOME')
//     }

//     set email(newEmail) {
//         if (newEmail.includes('@gmail.com')) {
//             this.#email = newEmail;
//             return
//         }
//         alert('Must include @gmail.com')
//     }
// }

// class Human extends User {

//     constructor(name, age, email, hp, damage) {
//         super(name, age, email)
//         this.hp = hp;
//         this.damage = damage;
//     }

//     attack() {
//         console.log(`Attack with ${this.damage} damage`);
//     }
// }

// class Elf extends User {

//     constructor(name, age, email, hp, mana) {
//         super(name, age, email)
//         this.hp = hp;
//         this.mana = mana;
//     }

//     spell() {
//         console.log(`Attack with ${this.mana} mana`);
//     }
// }

// const artem = new Human('Artem', 14, 'test@gmail.com', 200, 20);
// artem.qwerty = false


// Перерва до 21.25


















// Example 1 - Блогер
// Напиши клас Blogger для створення об'єкта блогера з наступними властивостями:

// email - пошта, рядок
// age - вік, число
// numberOfPosts - кількість постів, число
// topics - масив тем на яких спеціалізується блогер
// Клас чекає один параметр - об'єкт налаштувань з однойменними властивостями.

// Додай метод getInfo(), який, повертає рядок: User ${пошта} is ${вік} years old and has ${кількість постів} posts.

// Додай метод updatePostCount(value), який у параметрі value приймає кількість постів, які потрібно додати користувачеві.

// class User {
//     constructor({ name, age, numberOfPosts, topics }) {
//         this.name = name;
//         this.age = age;
//         this.numberOfPosts = numberOfPosts;
//         this.topics = topics;
//     }
//     getInfo() {
//         return `User ${this.name} is ${this.age} years old and has ${this.numberOfPosts} posts`
//     }
//     updatePostCount(value) {
//         if (typeof value === 'number' && !isNaN(value)) {
//             this.numberOfPosts += value;
//             return;
//         }

//         alert('Error.')
//     }
// }


// const mango = new User({
//     name: 'mango@mail.com',
//     age: 24,
//     numberOfPosts: 20,
//     topics: ['tech', 'cooking'],
// });
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 20 posts
// mango.updatePostCount(5 + null);
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 25 posts

// const poly = new User({
//   name: 'poly@mail.com',
//   age: 19,
//   numberOfPosts: 17,
//   topics: ['sports', 'gaming', 'health'],
// });
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 17 posts
// poly.updatePostCount(4);
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 21 posts



// Example 2 - Сховище
// Напиши клас Storage який створює об'єкти для керування складом товарів. При виклику отримуватиме один аргумент - початковий масив товарів і записуватиме його властивість items.

// Додай методи класу:

// getItems() - повертає масив товарів.
// addItem(item) - отримує новий товар і додає його до поточних.
// removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних.

// class Storage {
//     constructor(products) {
//         this.items = products;
//     }

//     getItems() {
//         return this.items;
//     }

//     addItem(item) {
//         if (!this.items.includes(item)) {
//             this.items.push(item)
//         }
//     }

//     removeItem(item) {
//         const idx = this.items.indexOf(item);
//         // !! -> Boolean()
//         // ~  -(idx + 1) -1 => 0   - (0 + 1) => - 1
//         if (!!~idx) { //idx !== -1
//             this.items.splice(idx, 1)
//         }
//     }
// }
// const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);

// const items = storage.getItems();
// console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

// storage.addItem('🍌');
// storage.addItem('🍎');
// storage.addItem('🍌');
// console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

// storage.removeItem('🍋');
// console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]



// Example 3 - User
// Напиши клас User який створює об'єкт із властивостями login та email. Оголоси приватні властивості #login та #email, доступ до яких зроби через гетер та сетер login та email.
// class User {
//     #email;

//     constructor({ login, email }) {
//         this.#email = email;
//         this.login = login;
//     }
//     get email() {
//         return this.#email;
//     }
//     set email(newEmail) {
//         // condition
//         this.#email = newEmail;
//     }
//     get userLogin() {
//         return this.login
//     }
//     set userLogin(newLogin) {
//         // condition
//         this.login = newLogin;
//     }
// }
// const mango = new User({
//     login: 'Mango',
//     email: 'mango@dog.woof',
// });

// console.log(mango.userLogin); // Mango
// mango.userLogin = 'Mangodoge';
// console.log(mango.userLogin); // Mangodoge

// const poly = new User({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// console.log(poly.login); // Poly
// poly.login = 'Polycutie';
// console.log(poly.login); // Polycutie



// Example 4 - Нотатки
// Напиши клас Notes який керує колекцією нотаток у властивості items. Замітка це об'єкт із властивостями text та priority. Додай класу статичну властивість Priority, у якому зберігатиметься об'єкт із пріоритетами.

// {
//   LOW: 'low',
//   NORMAL: 'normal',
//   HIGH: 'high'
// }
// Додай методи addNote(note), removeNote(text) та updatePriority(text, newPriority).
// class Notes {
//     static Priority = {
//         LOW: 'low',
//         NORMAL: 'normal',
//         HIGH: 'high'
//     }
//     constructor(arr) {
//         this.items = arr;
//     }
//     addNote(obj) {
//         const inNotes = this.items.some(({ text }) => text === obj.text);

//         if (!inNotes) {
//             this.items.push(obj);
//         }
//     }

//     removeNote(text) {
//         const idx = this.items.findIndex(({ text: noteText }) => text === noteText);

//         if (!!~idx) {
//             this.items.splice(idx, 1)
//         }
//     }

//     updateNote(text, newPriority) {
//         const idx = this.items.findIndex(({ text: noteText }) => text === noteText);

//         if (!!~idx) {
//             this.items[idx].priority = newPriority;
//         }
//     }
// }
// const myNotes = new Notes([]);

// myNotes.addNote({ text: 'Моя перша замітка', priority: Notes.Priority.LOW });
// console.log(myNotes.items);

// myNotes.addNote({
//     text: 'Моя друга замітка',
//     priority: Notes.Priority.NORMAL,
// });
// console.log(myNotes.items);

// myNotes.removeNote('Моя перша замітка');
// // console.log(myNotes.items);

// myNotes.updateNote('Моя друга замітка', Notes.Priority.HIGH);
// console.log(myNotes.items);


// Example 5 - Toggle
// Напишіть клас Toggle який приймає об'єкт налаштувань {isOpen: boolean} і оголошує одну властивість on - стан вкл/викл (true/false). За замовчуванням значення властивості on повинно бути false.
// class Toggle {
//     constructor({ isOpen = false } = {}) {
//         this.on = !isOpen;
//     }
//     toggle() {
//         this.on = !this.on
//     }
// }
// const firstToggle = new Toggle({ isOpen: true });
// console.log(firstToggle);
// console.group('firstToggle');
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// console.groupEnd('firstToggle');

// const secondToggle = new Toggle();
// console.log(secondToggle);
// console.group('secondToggle');
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// console.groupEnd('secondToggle');










// Чи можна було вказати інверсію одразу в конструкторі?







// class User {
//     #password;
//     constructor(pass) {
//         this.#password = pass;
//     }

//     get password() {
//         return this.#password;
//     }
// }

// !! => Boolean() !1 => false + ! => true

// -1 => true
// 0  => false
// ~ -(-1 + 1) => false
// ~ -(0 + 1) => true




































// artem.buy()
// const alex = new User('Alex', 28);
// artem.name = 'qwert'
// console.log(artem.name);
// console.log(artem.email);
// // artem.email = 'artemgmail.com';
// console.log(artem);
// console.log(alex);


//Get
// artem.name
// Set
// artem.email = 'artemgmail.com';

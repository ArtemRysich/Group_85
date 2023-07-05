// https://bool.dev/blog/detail/obyasnenie-event-loop-v-javascript-s-pomoshchyu-vizualizatsii

// https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif


// console.log("start", 1);

setTimeout(() => {
    console.log('setTimeout', 2);
}, 0)

// console.time('for');
// for (let i = 0; i < 99999; i += 1) {
//     console.log(i, 'for');
// }
// console.timeEnd('for');

// console.log('end');

// let counter = 0
// const id = setInterval(() => {
//     counter += 1
//     console.log('hello world', counter);
// }, 1000)
// const id1 = setInterval(() => {
//     counter += 1
//     // console.log('hello world', counter);
// }, 1000)
// const id2 = setInterval(() => {
//     counter += 1
//     // console.log('hello world', counter);
// }, 1000)
// const id3 = setInterval(() => {
//     counter += 1
//     // console.log('hello world', counter);
// }, 1000)
// console.log(id);
// console.log(id1);
// console.log(id2);
// console.log(id3);
// clearInterval(id)


// const content = document.querySelector('.content')
// const text = document.querySelector('.text');
// let counter = 10
// text.textContent = `Залишилось ${counter} секунд`;

// const id = setInterval(() => {
//     counter -= 1;
//     text.textContent = `Залишилось ${counter} секунд`;
// }, 1000)


// const idOut = setTimeout(() => {
//     clearInterval(id);
//     content.style.display = 'none'
// }, 1000 * counter)
// console.log('id', id);
// console.log('idOut', idOut);

// const currentDate = new Date()
// const targetDate = new Date('Jul 05 2023')
// console.log(currentDate);
// console.log(targetDate);

// console.log(targetDate - currentDate);

const selectors = {
    day: document.querySelector('.date-day'),
    date: document.querySelector('.date'),
    month: document.querySelector('.date-month'),
    year: document.querySelector('.date-year'),
    clock: document.querySelector('.digital-clock'),
    seconds: document.querySelector('.clock-seconds__arrow'),
    minutes: document.querySelector('.clock-minutes__arrow'),
    hours: document.querySelector('.clock-hours__arrow')
}




const arrDay = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П`ятниця', 'Субота'];
const namesOfMonth = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];
setInterval(() => {
    const currentDate = new Date();

    const day = currentDate.getDay();
    const date = currentDate.getDate();
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();

    const localTime = currentDate.toLocaleTimeString('uk-UA')

    selectors.day.textContent = arrDay[day];
    selectors.month.textContent = namesOfMonth[month];
    selectors.date.textContent = date;
    selectors.year.textContent = year;
    selectors.clock.textContent = `Поточний час ${localTime}`

    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    const secondDeg = 360 / 60 * seconds;
    const minutesDeg = 360 / 60 * minutes; // 360 / 60 * minutes + 360 / 3600 * seconds
    const hoursDeg = 360 / 12 * hours + (360 / 12 / 60) * minutes;

    selectors.seconds.style.transform = `rotate(${secondDeg}deg)`;
    selectors.minutes.style.transform = `rotate(${minutesDeg}deg)`;
    selectors.hours.style.transform = `rotate(${hoursDeg}deg)`;


}, 1000)


// console.log('month', month);
// console.log(namesOfMonth[month]);
// console.log(currentDate);


// console.log("A");

// setTimeout(() => console.log("B"), 0);

// Promise.resolve("C").then((value) => console.log(value));

// console.log("D");


// Мікро процеси
// Promise
// Observer
// addEventListner


// Макро процеси
// setTimeout
// setInterval
// https://developer.mozilla.org/en-US/docs/Web/API/Window/setImmediate
// setImmediate
// https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
// requestAnimationFrame



// console.log("1");

// setTimeout(() => console.log("2"), 10);
// Promise.resolve("3").then((value) => console.log(value));
// Promise.reject("4").then((value) => console.log(value)).catch(err=>console.log(err));
// Promise.resolve("5").then((value) => console.log(value));
// setTimeout(() => console.log("6"), 0);
// console.log("7");



// const promise = new Promise((res, rej) => {
//     const random = Math.random();
//     setTimeout(() => {
//         if (random > 0.5) {
//             res({ name: 'Test' })
//         } else {
//             rej('😥')
//         }
//     }, 1000)
// })
// // console.log(promise);
// promise
//     .then((resp) => {
//         return resp
//     })
//     .then((data) => {
//         console.log('second then', data);
//     })
//     .catch((err) => { console.log('err', err) })
//     .finally(() => {
//         console.log('finally');
//     })




// const promise = fetch("https://pokeapi.co/api/v2/pokemon/ditto");

// console.log(promise);

// promise
//     .then((response) => {
//         console.log(response);
//         return response.json()
//     })
//     .then((data) => {
//         console.log(data.name)
//     })
//     .catch((err) => console.log(err))



// Перерва до 21.00


const selectors = {
    startBtn: document.querySelector('.js-start'),
    container: document.querySelector('.js-container')
}


selectors.startBtn.addEventListener('click', handlerStart);

function handlerStart() {
    const promises = [...selectors.container.children].map((_) => createPromise())

    Promise.allSettled(promises)
        .then((items) => {
            console.log(items);
            items.forEach((item, i) => {
                selectors.container.children[i].textContent = '';
                setTimeout(() => {
                    selectors.container.children[i].textContent = item.value || item.reason;
                    if (i === items.length - 1) {
                        const instance = basicLightbox.create(`
                        <h1>${isWinner ? 'Winner' : 'Loser'}</h1>
                    `)
                        instance.show()
                    }
                }, 1000 * (i + 1))
            });
            const isWinner = items.every(item => item.status === 'fulfilled') || items.every(item => item.status === 'rejected')
        })
}


function createPromise() {
    return new Promise((res, rej) => {
        const random = Math.random();
        if (random > 0.5) {
            res('🤑')
        } else {
            rej('👿')
        }
    })
}
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication
// const BASE_URL = 'https://the-one-api.dev/v2';
// const END_POINT = '/character';
// const TOKEN = "18aEQHs2_l3sCMmPg1yk";
// https://dev.to/lydiahallie/javascript-visualized-promises-async-await-5gke#syntax
// const options = {
//     headers: {
//         Authorization: `Bearer ${TOKEN}`
//     }
// }

// fetch(`${BASE_URL}${END_POINT}?limit=30&page=2`, options)
//     .then(resp => {
//         if (!resp.ok) {
//             throw new Error(resp.statusText)
//         }

//         return resp.json()
//     })
//     .then(data => console.log(data))
//     .catch(err => console.error(err))

// https://developer.themoviedb.org/docs




// const selectors = {
//     container: document.querySelector('.js-movie-list'),
//     load: document.querySelector('.js-load-more'),
// }
// let page = 498;

// selectors.load.addEventListener('click', onLoadMore);

// function onLoadMore() {
//     page += 1;
//     serviceMovie(page)
//         .then(data => {
//             selectors.container.insertAdjacentHTML('beforeend', createMarkup(data.results))
//             if (data.page >= 500) {
//                 selectors.load.hidden = true;
//             }
//         })
// }

// function serviceMovie(page = 1) {
//     const BASE_URL = 'https://api.themoviedb.org/3';
//     const END_POINT = '/trending/movie/week';
//     const API_KEY = "345007f9ab440e5b86cef51be6397df1";
//     return fetch(`${BASE_URL}${END_POINT}?api_key=${API_KEY}&page=${page}`)
//         .then(resp => {
//             if (!resp.ok) {
//                 throw new Error(resp.statusText);
//             }

//             return resp.json();
//         })
// }


// serviceMovie(498)
//     .then(data => {
//         console.log(data);
//         selectors.container.insertAdjacentHTML('beforeend', createMarkup(data.results))
//         if (data.page < data.total_pages) {
//             selectors.load.hidden = false;
//         }
//     })
//     .catch(err => console.log(err))


// function createMarkup(arr) {
//     return arr.map(({ poster_path, release_date, original_title, vote_average }) => `
//     <li>
//         <img src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${original_title}" />
//         <h2>${original_title}</h2>
//         <p>${release_date}</p>
//         <p>${vote_average}</p>
//     </li>`)
//         .join('')

// }





// Перерва до 21.30


const selectors = {
    container: document.querySelector('.js-movie-list'),
    guard: document.querySelector('.js-guard'),
}

const options = {
    root: null,
    rootMargin: "300px",
    threshold: 0,
};

const observer = new IntersectionObserver(handelerPagination, options);
let page = 1;
// let counterObserv = 0;
function handelerPagination(entries, observer) {
    entries.forEach(entry => {

        // counterObserv += 1;
        // console.log('IntersectionObserver', counterObserv);
        if (entry.isIntersecting) {
            page += 1;
            serviceMovie(page)
                .then(data => {
                    selectors.container.insertAdjacentHTML('beforeend', createMarkup(data.results))
                    if (data.page >= 500) {
                        observer.unobserve(entry.target);
                    }
                })
                .catch(err => console.log(err))
        }
    });
}

// let counterScroll = 0
// document.addEventListener('scroll', () => {
//     counterScroll += 1;
//     console.log('counterScroll', counterScroll);
// })
serviceMovie()
    .then(data => {
        selectors.container.insertAdjacentHTML('beforeend', createMarkup(data.results))
        if (data.page < data.total_pages) {
            observer.observe(selectors.guard);
        }
    })
    .catch(() => location.href = './error.html')



function createMarkup(arr) {
    return arr.map(({ poster_path, release_date, original_title, vote_average }) => `
    <li>
        <img src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${original_title}" />
        <h2>${original_title}</h2>
        <p>${release_date}</p>
        <p>${vote_average}</p>
    </li>`)
        .join('')

}

console.log(history);
function serviceMovie(page = 1) {
    const BASE_URL = 'https://api.themoviedb.org/3';
    const END_POINT = '/trending/movie/week';
    const API_KEY = "345007f9ab440e5b86cef51be6397df1";
    return fetch(`${BASE_URL}${END_POINT}?api_key=${API_KEY}&page=${page}`)
        .then(resp => {
            if (!resp.ok) {
                throw new Error(resp.statusText);
            }

            return resp.json();
        })
}





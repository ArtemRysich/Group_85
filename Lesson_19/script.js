// Free API
// https://www.weatherapi.com/docs/
// https://swapi.dev/documentation
// https://pokeapi.co/
// https://the-one-api.dev/
// https://rickandmortyapi.com/documentation

// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
// https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams?retiredLocale=uk
// https://uk.wikipedia.org/wiki/SOAP

// 14c56bddeab14583a6e164909231107

// const BASE_URL = 'http://api.weatherapi.com/v1';
// const END_POINT = '/forecast.json'
// const API_KEY = '14c56bddeab14583a6e16490923110'

// fetch(`${BASE_URL}${END_POINT}?key=${API_KEY}&q=Lviv&days=3`)
//     .then(response => {
//         // console.log(response)
//         if (!response.ok) {
//             throw new Error(response.statusText)
//         }
//
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => console.log(err))




// fetch('https://xl-catalog-api.rozetka.com.ua/v4/super-portals/getList?country=UA&lang=ru')
// .then(resp => console.log(resp));




// Перерва до 21.15


const elements = {
    form: document.querySelector('.js-weather'),
    container: document.querySelector('.js-weather-list')
}


elements.form.addEventListener('submit', handlerSearch);


navigator.geolocation.getCurrentPosition(({ coords }) => {
    const { longitude, latitude } = coords;
    serviceForecast(`${latitude},${longitude}`, 3)
        .then(data => elements.container.innerHTML = createMarkup(data.forecast.forecastday))
        .catch(err => console.log(err))
})



function handlerSearch(evt) {
    evt.preventDefault();

    const { query, days } = evt.currentTarget.elements;
    serviceForecast(query.value, days.value)
        .then(data => elements.container.innerHTML = createMarkup(data.forecast.forecastday))
        .catch(err => console.log(err))

}



function serviceForecast(city, days) {
    const BASE_URL = 'http://api.weatherapi.com/v1';
    const END_POINT = '/forecast.json';
    const API_KEY = '14c56bddeab14583a6e164909231107';

    const params = new URLSearchParams({
        days: days,
        key: API_KEY,
        lang: 'uk',
        q: city,
    })

    return fetch(`${BASE_URL}${END_POINT}?${params}`)
        .then(response => {
            console.log(response);
            if (!response.ok) {
                throw new Error(response.statusText)
            }

            return response.json();
        })
}



function createMarkup(arr) {
    return arr.map(({ date, day: { avgtemp_c, condition: { icon, text } } }) => `<li>
    <img src="${icon}" alt="${text}">
    <h3>Дата: ${date}</h3>
    <h3>${text}</h3>
    <h3>Температура: ${avgtemp_c}</h3>
</li>`).join('')
}
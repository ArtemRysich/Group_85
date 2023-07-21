

// async function serviceCountry() {
//     const response = await fetch('https://restcountries.com/v3.1/name/Ukraine');
//     // console.log(response);
//     if (!response.ok) {
//         throw new Error(response.statusText)
//     }

//     const data = await response.json();
//     console.log(data);

// }

// serviceCountry()
// console.log('hello');


// async function fn() {

// }
// console.log(fn());
// function fn() {
//     for (let i = 0; i < 20; i += 1) {
//         console.log(i);
//     }
// }
// fn()
// console.log('hello');
// const serviceCountry = async () => {
//     const response = await fetch('https://restcountries.com/v3.1/name/Ukraine');
//     console.log(response);
//     if (!response.ok) {
//         throw new Error(response.statusText)
//     }

//     const data = await response.json();
//     console.log(data);
//     console.log('hello');
// }

// serviceCountry()


// const serviceCountry = async function () {
//     const response = await fetch('https://restcountries.com/v3.1/name/Ukraine');
//     console.log(response);
//     if (!response.ok) {
//         throw new Error(response.statusText)
//     }

//     const data = await response.json();
//     console.log(data);
//     console.log('hello');
// }

// serviceCountry()

// const service = {
//     countryName: 'Ukraine',
//     async serviceCountry() {
//         const response = await fetch(`https://restcountries.com/v3.1/name/${this.countryName}`);
//         console.log(response);
//         if (!response.ok) {
//             throw new Error(response.statusText)
//         }

//         const data = await response.json();
//         console.log(data);
//         console.log('hello');
//     }
// }

// service.serviceCountry()


// async function serviceCountry() {
//     const response = await fetch('https://restcountries.com/v3.1/name/Ukraine');
//     // console.log(response);
//     if (!response.ok) {
//         throw new Error(response.statusText)
//     }

//     const data = await response.json();
//     // console.log(data);
//     // console.log('hello');
//     return data;
// }
// serviceCountry()
// .then(data => console.log(data))
// .catch(err => console.log(err))




// async function serviceCountry() {
//     try {
//         const response = await fetch('https://restcountries.com/v3.1/name/Ukraine');
//         console.log(response);
//         if (!response.ok) {
//             throw new Error(response.statusText)
//         }

//         const data =  await response.json();
//         console.log(data);

//     } catch (e) {
//         console.log(e);
//     }

// }
// serviceCountry()


// async function serviceCountries() {
//     // const resp1 = await fetch('https://restcountries.com/v3.1/name/Ukraine')
//     // const resp2 = await fetch('https://restcountries.com/v3.1/name/France')
//     // const resp3 = await fetch('https://restcountries.com/v3.1/name/Poland')
//     // const countries = ['Ukraine', 'France', 'Poland'];
//     // const responses = countries.map(async country => {
//     //     const resp = await fetch(`https://restcountries.com/v3.1/name/${country}`)
//     //     return resp.json();
//     // })
//     // console.log(responses);
// }
// serviceCountries()








// const API_KEY = '14c56bddeab14583a6e164909231107';


// Перерва до 20.30




// const elements = {
//     form: document.querySelector('.js-search'),
//     formContainer: document.querySelector('.js-form-container'),
//     addField: document.querySelector('.js-add'),
//     list: document.querySelector('.js-list')
// }

// elements.addField.addEventListener('click', handlerAdd);
// elements.form.addEventListener('submit', handlerSearch)

// function handlerAdd() {
//     elements.formContainer.insertAdjacentHTML('beforeend', '<input type="text" name="country" />')
// }

// async function handlerSearch(evt) {
//     evt.preventDefault()

//     const formData = new FormData(evt.currentTarget)
//     const countries = formData.getAll('country').map(item => item.trim()).filter(item => item);

//     try {
//         const capitals = await serviceCountries(countries);
//         const weather = await serviceWeather(capitals);

//         elements.list.innerHTML = createMarkup(weather);
//     } catch (err) {
//         console.log(err);
//     } finally {
//         evt.target.reset()
//     }
// }


// async function serviceCountries(countries) {
//     const BASE_URL = 'https://restcountries.com/v3.1/name/';
//     const responses = await countries.map(async (country) => {
//         const response = await fetch(`${BASE_URL}${country}`);
//         return response.json();
//     })

//     const data = await Promise.allSettled(responses);

//     return data.filter(({ status }) => status === 'fulfilled').map(({ value }) => value[0].capital[0])
// }


// async function serviceWeather(capitals) {
//     const BASE_URL = 'http://api.weatherapi.com/v1';
//     const END_POINT = '/current.json'
//     const API_KEY = '14c56bddeab14583a6e164909231107'

//     const responses = await capitals.map(async capital => {
//         const response = await fetch(`${BASE_URL}${END_POINT}?key=${API_KEY}&q=${capital}&lang=uk`)
//         return response.json()
//     })

//     const data = await Promise.allSettled(responses);

//     // return data.filter(({ status }) => status === 'fulfilled').map(({
//     //     value: {
//     //         current: {
//     // temp_c, condition: {
//     //     text, icon
//     // }
//     //         }, location: { country, name }
//     //     }
//     // }) => ({ country, name, text, icon, temp_c }))



//     return data.filter(({ status }) => status === 'fulfilled').map(({ value: { current, location } }) => {
//         const { temp_c, condition: { icon, text } } = current;
//         const { name, country } = location;

//         return { country, name, text, icon, temp_c }
//     })
// }


// function createMarkup(arr) {
//     //     return arr.map(({ country, name, temp_c, icon, text }) => `<li>
//     //     <img src="${icon}" alt="${text}" />
//     //     <h2>${country}</h2>
//     //     <h2>${name}</h2>
//     //     <p>${text}</p>
//     //     <p>${temp_c}</p>
//     //   </li>`).join('')



//     return arr.reduce((acc, { country, name, temp_c, icon, text }) => acc + `<li>
// <img src="${icon}" alt="${text}" />
// <h2>${country}</h2>
// <h2>${name}</h2>
// <p>${text}</p>
// <p>${temp_c}</p>
// </li>`, '')
// }






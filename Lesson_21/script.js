// CRUD

// Create - POST
// Read   - GET
// Update - PUT PATCH
// DELETE - DELETE

// const options = {
//     method: 'POST',
//     body: JSON.stringify({
//         name: 'Test user',
//         age: 18
//     }),
//     headers: {
//         "Content-type": 'application/json'
//     }
// }
// fetch('https://someURL', options)









// POST - CREATE
// const post = {
//     title: 'Group 85',
//     body: 'First post group 85',
//     userId: 101
// }

// const options = {
//     method: 'POST',
//     body: JSON.stringify(post),
//     headers: {
//         "Content-type": 'application/json'
//     }
// }

// fetch('https://jsonplaceholder.typicode.com/posts', options)
//     .then(resp => {
//         console.log(resp);
//         if (!resp.ok) {
//             throw new Error(resp.statusText);
//         }

//         return resp.json();
//     })
//     .then(data => console.log(data))
//     .catch(err => console.log(err))


// fetch('https://jsonplaceholder.typicode.com/posts/101')
//     .then((response) => response.json())
//     .then((json) => console.log(json));


// PATCH - UPDATE
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then((response) => response.json())
//     .then((json) => console.log(json));



// const options = {
//     method: "PATCH",
//     body: JSON.stringify({
//         title: 'Group 85',
//         userId: 102
//     }),
//     headers: {
//         "Content-type": 'application/json'
//     }
// }


// fetch('https://jsonplaceholder.typicode.com/posts/1', options)
//     .then(resp => {
//         console.log(resp);
//         if (!resp.ok) {
//             throw new Error(resp.statusText)
//         }

//         return resp.json()
//     })
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// const DB = {
//     id: 1,
//     title: 'Some title',
//     body: 'Some body',
//     userId: 101
// }


// const req = {
//     title: 'New value'
// }
// const result = {
//     id: 1,
//     title: 'New value',
//     body: 'Some body',
//     userId: 101
// }






// PUT - UPDATE

// const options = {
//     method: "PUT",
//     body: JSON.stringify({
//         title: 'Group 85',
//         userId: 102
//     }),
//     headers: {
//         "Content-type": 'application/json'
//     }
// }

// fetch('https://jsonplaceholder.typicode.com/posts/1', options)
//     .then(resp => {
//         console.log(resp);
//         if (!resp.ok) {
//             throw new Error(resp.statusText)
//         }

//         return resp.json()
//     })
//     .then(data => console.log(data))
//     .catch(err => console.log(err))






// const DB = {
//     id: 1,
//     title: 'Some title',
//     body: 'Some body',
//     userId: 101
// }


// const req = {
//     title: 'New value'
// }

// const result = {
//     id: 1,
//     title: 'New value'
// }



// DELETE

// function serviceDeletePost(id) {
//     const options = {
//         method: 'DELETE'
//     }

//     fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, options)
//         .then(resp => {
//             console.log(resp);
//             if (!resp.ok) {
//                 throw new Error(resp.statusText)
//             }

//             return resp.json()
//         })
//         .then(data => console.log(data))
//         .catch(err => console.log(err));
// }




// ПЕРЕРВА ДО 20.50


const form = document.querySelector('.js-question');
const getBtn = document.querySelector('.js-get-all')

form.addEventListener('submit', handlerQuestion)
getBtn.addEventListener('click', handlerGetQuestions)

function handlerQuestion(evt) {
    evt.preventDefault();
    const { userName, phone, email, question } = evt.currentTarget.elements;

    const request = {
        name: userName.value,
        phone: phone.value,
        email: email.value,
        comment: question.value
    }

    serviceQuestion(request)
        .then(data => console.log(data))
        .catch(err => console.log(err))
        .finally(() => evt.target.reset())
}


function handlerGetQuestions() {
    serviceGetQuestions()
        .then(data => console.log(data))
        .catch(err => console.log(err))
}

function serviceQuestion(data) {
    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json"
        }
    }

    return fetch('http://127.0.0.1:3000/api/question', options)
        .then(resp => {
            console.log(resp);
            console.log(resp);
            if (!resp.ok) {
                throw new Error(resp.statusText)
            }

            return resp.json();
        })
}


function serviceGetQuestions() {
    return fetch('http://127.0.0.1:3000/api/getAll')
        .then(resp => {
            if (!resp.ok) {
                throw new Error(resp.statusText)
            }

            return resp.json()
        })
}
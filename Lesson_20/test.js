console.log(history);

const back = document.querySelector('.js-back');
back.addEventListener('click', () => { history.back() })
// https://bundlephobia.com/
// https://lodash.com/docs/4.17.15

// const cats = [
//     "https://i.ytimg.com/vi/iKA6ZXpGcGQ/maxresdefault.jpg",
//     "https://i.natgeofe.com/n/46b07b5e-1264-42e1-ae4b-8a021226e2d0/domestic-cat_thumb_square.jpg",
//     "https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg",
//     "https://i.guim.co.uk/img/media/941093798b256e5d1aa6246a08824bc86f62a31f/0_0_5000_3000/master/5000.jpg?width=1300&quality=85&fit=max&s=ea672fb16df8634901283252059baaf8",
//     "https://nypost.com/wp-content/uploads/sites/2/2022/06/reddit-cats-judging-looks-00.jpg?quality=75&strip=all",
//     "https://gdb.voanews.com/09690000-0a00-0242-5408-08da76ebde16_cx0_cy3_cw99_w1200_r1.jpg",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCK8yYjQ6igjrAJyCyXUwV6U7RDkLVc4FVnQ&usqp=CAU",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWEQxVHz2ZzUdIKINgA-LvmuZgoady4hu4hQ&usqp=CAU",
//     "https://e3.365dm.com/22/07/768x432/skynews-cats-pet_5846440.jpg?20220726201324",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4xXPTgr5Lug8qU_akXp2oC_4m5w3FoAvx_Q&usqp=CAU",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnB4if5HpwDvEqkgBShHrRvbwYCya8vzB86g&usqp=CAU",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWEQxVHz2ZzUdIKINgA-LvmuZgoady4hu4hQ&usqp=CAU",
//     "https://e3.365dm.com/22/07/768x432/skynews-cats-pet_5846440.jpg?20220726201324",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4xXPTgr5Lug8qU_akXp2oC_4m5w3FoAvx_Q&usqp=CAU",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnB4if5HpwDvEqkgBShHrRvbwYCya8vzB86g&usqp=CAU",
//     "https://assets.globalwildlife.org/m/3b6039a74fd067ea/webimage-Tigrinia.jpg",
//     "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a_400x400.jpeg",
//     "https://www.nhm.ac.uk/content/dam/nhmwww/discover/wild-cats/margay-two-column.jpg.thumb.768.768.jpg",
//     "https://irs.www.warnerbros.com/gallery-v2-jpeg/cats__dogs_photo_12-14571309.jpg",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIyGk9Ds3bdd4B404EcoMDrVUKnU5u9KABOg&usqp=CAU",
//   ];

// const input = document.querySelector('.js-search');


// input.addEventListener('input', _.throttle(handlerSearch, 3000, {
//     leading: false,
//     trailing: true
// }))

// function handlerSearch(evt) {
//     console.log(evt.target.value);
// }


// const input = document.querySelector('.js-search');


// input.addEventListener('input', _.debounce(handlerSearch, 700, {
//     // leading: true
//     // trailing: false
// }))

// function handlerSearch(evt) {
//     console.log(evt.target.value);
// }



// const cats = [
//     "https://i.ytimg.com/vi/iKA6ZXpGcGQ/maxresdefault.jpg",
//     "https://i.natgeofe.com/n/46b07b5e-1264-42e1-ae4b-8a021226e2d0/domestic-cat_thumb_square.jpg",
//     "https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg",
//     "https://i.guim.co.uk/img/media/941093798b256e5d1aa6246a08824bc86f62a31f/0_0_5000_3000/master/5000.jpg?width=1300&quality=85&fit=max&s=ea672fb16df8634901283252059baaf8",
//     "https://nypost.com/wp-content/uploads/sites/2/2022/06/reddit-cats-judging-looks-00.jpg?quality=75&strip=all",
//     "https://gdb.voanews.com/09690000-0a00-0242-5408-08da76ebde16_cx0_cy3_cw99_w1200_r1.jpg",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCK8yYjQ6igjrAJyCyXUwV6U7RDkLVc4FVnQ&usqp=CAU",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWEQxVHz2ZzUdIKINgA-LvmuZgoady4hu4hQ&usqp=CAU",
//     "https://e3.365dm.com/22/07/768x432/skynews-cats-pet_5846440.jpg?20220726201324",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4xXPTgr5Lug8qU_akXp2oC_4m5w3FoAvx_Q&usqp=CAU",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnB4if5HpwDvEqkgBShHrRvbwYCya8vzB86g&usqp=CAU",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWEQxVHz2ZzUdIKINgA-LvmuZgoady4hu4hQ&usqp=CAU",
//     "https://e3.365dm.com/22/07/768x432/skynews-cats-pet_5846440.jpg?20220726201324",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4xXPTgr5Lug8qU_akXp2oC_4m5w3FoAvx_Q&usqp=CAU",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnB4if5HpwDvEqkgBShHrRvbwYCya8vzB86g&usqp=CAU",
//     "https://assets.globalwildlife.org/m/3b6039a74fd067ea/webimage-Tigrinia.jpg",
//     "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a_400x400.jpeg",
//     "https://www.nhm.ac.uk/content/dam/nhmwww/discover/wild-cats/margay-two-column.jpg.thumb.768.768.jpg",
//     "https://irs.www.warnerbros.com/gallery-v2-jpeg/cats__dogs_photo_12-14571309.jpg",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIyGk9Ds3bdd4B404EcoMDrVUKnU5u9KABOg&usqp=CAU",
// ];


// const list = document.querySelector('.js-cats');
// // console.log(cats.length);

// const markup = cats.map(link => `<li>
// <img src="${link}" alt="cat" loading="lazy" width="300">
// <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolorum atque repudiandae cum, asperiores, aliquam fuga pariatur illo, qui illum ea exercitationem eaque voluptatibus recusandae. Voluptas est illo laborum eos.
// Earum magnam veritatis dolorum incidunt nisi illum minus, labore obcaecati debitis facere sapiente ea libero odio, quas nemo voluptatem eaque mollitia ullam nobis maiores harum voluptate consequatur, laboriosam eligendi? Quod.
// ulpa incidunt iusto ab? 
// </P>
// </li>`).join('');
// list.insertAdjacentHTML('beforeend', markup)








// Перерва до 21.05

// const content = document.querySelector('.content');
// let player = 'X';
// // const position = content.getBoundingClientRect();
// // console.log(position);
// const historyX = [];
// const historyO = [];
// const combination = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//     [1, 4, 7],
//     [2, 5, 8],
//     [1, 5, 9],
//     [3, 5, 7],
//     [3, 6, 9]
// ]

// function createMarkup() {
//     let markup = '';
//     for (let i = 1; i <= 9; i += 1) {
//         markup += `<div class="item" data-id="${i}"></div>`;
//     }

//     content.innerHTML = markup;
// }
// createMarkup();
// content.addEventListener('click', handlerClick)

// function handlerClick(evt) {
//     if (evt.target === evt.currentTarget || evt.target.textContent) {
//         return;
//     }

//     const id = Number(evt.target.dataset.id);
//     let isWinner = false;

//     if (player === 'X') {
//         historyX.push(id);
//         isWinner = historyX.length >= 3 ? checkWinner(historyX) : false;
//     } else {
//         historyO.push(id);
//         isWinner = historyO.length >= 3 ? checkWinner(historyO) : false;
//     }

//     if (isWinner) {
//         const instance = basicLightbox.create(`
//      <div class="box">
//         <h1>Player - ${player} is winner</h1>
//      </div>
//         `)
//         instance.show();
//         resetGame();
//         return;
//     }

//     evt.target.textContent = player;
//     player = player === 'X' ? 'O' : 'X';
// }

// function checkWinner(arr) {
//     return combination.some(item => item.every(id => arr.includes(id)));
// }

// function resetGame() {
//     createMarkup();
//     player = 'X';
//     historyO.splice(0);
//     historyX.splice(0);
// }
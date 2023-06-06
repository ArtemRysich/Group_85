// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
// const products = [{
//     id: 'sku1',
//     qty: 1,
// }, {
//     id: 'sku2',
//     qty: 2,
// }, {
//     id: 'sku3',
//     qty: 3,
// }, {
//     id: 'sku1',
//     qty: 6,
// },  {
//     id: 'sku2',
//     qty: 19,
// }, {
//     id: 'sku4',
//     qty: 1,
// }];


// for (let i = 0; i < products.length; i += 1) {
//     // console.log('Поточний продукт', products[i]);
//     for (let j = i + 1; j < products.length; j += 1) {
//         // console.log('Наступний продукт', products[j]);
//         if (products[i].id === products[j].id) {
//             products[i].qty += products[j].qty;
//             products.splice(j, 1)
//             j -= 1;
//         }
//     }
// }
// console.log(products);
// console.log(products)
// for (let i = 0; i < products.length; i += 1) {
//     for (let j = products.length - 1; i < j; j -= 1) {
//         if (products[i].id === products[j].id){
//             products[i].qty += products[j].qty;
//             products.splice(j, 1)
//         }
//     }
// }
// console.log(products)


// const arr = [1, 2, 3, 4, 5];
// function showItem(item){
//     console.log(item);
// }
// const showItem = item => console.log(item);
// arr.forEach(item => console.log(item))
// console.log(showItem);
// arr.forEach(showItem)


// function foo(arr, func) {
//     arr.forEach(func);
// }

// foo(arr, item => console.log('1', item))
// foo(arr, item => console.log('2', item * 2))
// foo(arr, item => console.log('3', item / 2))





// const product = {
//     id: 1,
//     qty: 4,
//     price: 45,
//     getTotalPrice() {
//         console.log(this.qty * this.price);
//         const inStock = () => {
//             console.log('in function declaration');
//             console.log('this', this);
//             console.log('key qty in this', this.qty);
//             if (this.qty > 0) {
//                 console.log('In Stock');
//             } else {
//                 console.log('Out of Stock');
//             }
//             console.log('---------------------------------------');
//         }
//         inStock()
//     },
//     inStock: () => {
//         console.log('this', this);
//         console.log('key qty in this', this.qty);
//         if (this.qty > 0) {
//             console.log('In Stock');
//         } else {
//             console.log('Out of Stock');
//         }
//     }
// }
// product.getTotalPrice()
// product.inStock()






// function foo(x) {
//     const a = 10;

//     if (!x) {
//         return `X is empty`
//     }

//     function boo() {
//         console.log('CONST a', a);
//         return x + a
//     }
//     return boo
// }

// console.log(foo(10)());
// const arr = [11, [11, [22, [55]]]]

// function foo(){
//     foo();
// }
// foo();
// let total;

// console.log(total);
// var total = 100;
// var total = 20;
// total = 100;

function persistence(num) {
    let strNumsLength = String(num).length;
    let strNums = String(num).split('');
    let countOperation = 0;
    if (strNumsLength === 1 || !num) return countOperation;
    while (strNumsLength >= 0) {
        const total = strNums.reduce(
            (prevValue, number) => Number(prevValue) * Number(number),
            1
        );
        strNums = String(total).split('');
        countOperation += 1;
        strNumsLength -= 1;
        if (strNums.length === 1) {
            break;
        }
    }
    return countOperation;
}
// console.log(persistence(-7));


function persistence(num) {
    const arr = num.toString().split('');
    let counter = 0
    if (arr.length === 1) {
        return counter;
    }


    const result = arr.reduce((acc, el) => isNaN(el) ? acc : acc * el, 1)

    if (result.toString().length > 1) {
        counter += persistence(result)
    }

    counter += 1;
    return counter

}
console.log(persistence(-7));

// assert.strictEqual(persistence(39),3);
// assert.strictEqual(persistence(4),0);
// assert.strictEqual(persistence(25),2);
// assert.strictEqual(persistence(999),4);
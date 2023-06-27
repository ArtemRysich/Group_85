// const value = 10;

function add(a, b) {
    console.log("value", value);
    return a + b;
}


class User {
    constructor(name) {
        this.name = name;
    }
}

export {
    add,
    User
};



//DEFAULT EXPORT 

// export default function add(a, b) {
//     console.log("value", value);
//     return a + b;
// }

// const a = 10;
// const b = 15;
// export default a;
// export default b;
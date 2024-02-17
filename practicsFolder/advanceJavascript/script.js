// const sleep = async () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(45)
//         }, 1000)
//     })
// }
// // IIFE Example
// (async function main() {
//     let a = await sleep();
//     console.log(a);
//     let b = await sleep();
//     console.log(b);
// })();

// Destructuring
// let [x, y, z, ...rest] = [1, 2, 3, 4, 5, 6, 7];
// console.log(x, y, z, rest);

// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }

// let {a, b} = obj;
// console.log(a, b)

// Spread Operator

function sum(a, b, c) {
    return a + b + c;
}

let arr = [2, 4, 7];

// console.log(arr[0] + arr[1] + arr[2]);
// console.log(sum(arr[0], arr[1], arr[2]));
// console.log(sum(...arr));

// let obj = {...arr};
// console.log(obj);
// console.log(...arr);

// let a = 'the';
// let b = 'no';
// let c = {a, b};
// console.log(c);

console.log('i am a promis');

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random()
    if (a < 0.5) {
        reject('random number was not supporting');
    } else {
        setTimeout(() => {
            console.log('Yes i am done');
            resolve('Harry');
        }, 3000);
    }
})

prom1.then((a) => {
    console.log(a, '1');
}).catch((err) => {
    console.log(err);
});
const fs = require("fs")

console.log(fs);

console.log("starting")

fs.writeFile("harry.txt", "Harry is a god boy", () => {

    console.log("done");

    fs.readFile("harry.txt", (e, d) => {
       console.log(e, d.toString())
    })


})

fs.appendFile("harry.txt", "123456", (e, d) => {
    console.log(d)
})


console.log("ending")
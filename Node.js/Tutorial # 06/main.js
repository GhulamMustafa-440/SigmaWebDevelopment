const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000

// app.use(express.static('public'));


// Middleware 1 - Logger for our application
app.use((req, res, next) => {
    console.log(req.headers)
    req.harry = "I am harry bhai";
    fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}`)
    // res.send("Hacked by Middlware 1")
    next()
})

// Middleware 2
app.use((req, res, next) => {
    console.log("m2")
    next()
})


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('Hello about ' + req.harry)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
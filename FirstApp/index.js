const express = require("express");
const app = express();
console.dir(app)

//app.use((req, res) => {
    //console.log("NEW REQUEST")
    //res.send("<h1>This is my webpage!!!</h1>")
//})

app.get('/', (req, res) => {
    res.send("HOMEPAGE")
})

app.post('/cats', (req, res) => {
    res.send("DIFF FROM GET REQUEST!")
})

app.get('/cats', (req, res) => {
    res.send("MEOW!")
})

app.get('/dogs', (req, res) => {
    res.send("WOOF!")
})


app.get('*', (req, res) => {
    res.send("don't know that path")
})

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000")
})  
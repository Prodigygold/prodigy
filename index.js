const express = require ("express")

const path = require("path")

const app = express ( )

const PORT = 5000

app.use(express.static(path.join(__dirname, "./public")))

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'))
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'))
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/signIn.html'))
})

app.listen(PORT, ( ) => {
    console.log ("Hey Ya, Server is running")
})
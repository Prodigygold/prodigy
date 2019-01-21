const express = require ("express")
const path = require("path")
const morgan = require('morgan')
const bodyParser = require ('body-parser')

const app = express()

const PORT = 5000

let userArray = [ ]
app.use(morgan('dev'))

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, "./public")))

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'))
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'))
})

app.get('/signIn', (req, res) => {
    res.sendFile(path.join(__dirname, './views/signIn.html'))
})

app.post('/submitForm', (req, res) => {
    let userObject = req.body
    userArray.push(userObject)
    console.log(userArray)
    res.redirect('/')
})
app.listen(PORT, ( ) => {
    console.log ("Hey Ya, Server is running")
})
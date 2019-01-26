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

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.get('/', (req, res) => {
    res.render("index", {
        pageTitle: "Home"
    })
})

app.get('/login', (req, res) => {
    res.render("login", {
        pageTitle: "Login"
    })
})

app.get('/signIn', (req, res) => {
    res.render("signIn", {
        pageTitle: "Sign In",
        obj: {}
    })
})

app.post('/submitForm', (req, res) => {
    let userObject = req.body
    let username = req.body.username
    let password = req.body.password
    let secondPassword = req.body.confirmPasswor

    console.log(username)
    console.log(userObject)
    if (!password){
        return res.render("signIn", {
            pageTitle: "signIn",
            obj : {
                errorMessage: "Provide a Password"
            }
        })
    }
    if (secondPassword.length <6){
        return res.render("signIn", {
            pageTitle: "signIn",
            obj : {
                errorMessage: "Provide is too short"
            }
        })
    }

    if (!password){
        return res.render("signIn", {
            pageTitle: "signIn",
            obj : {
                errorMessage: "Provide a Password"
            }
        })
    }
    return res.render("signIn", {
        pageTitle: "signIn",
        obj: {
            errorMessage: "work in progress"
        }
    })

   let usernameArray = [] 
console.log(usernameArray)
if (usernameArray.indexOf(userObject.username) === -1) {
    userArray.push(userobject)
    return res.render("signIn", {
        pageTitle: "signIn",
        obj: {
            errorMessage: "Successfully signed up"
        }
    })
}

return res.render ("signIn", {
    pageTitle: "Sign Up",
    obj: {
        errorMessage: "username already exists"
    }
})
});

app.listen(PORT, function(){
    console.log("server is now running")
})
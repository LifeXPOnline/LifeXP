require('dotenv').config();
const express = require('express')
const session = require("express-session")
const passport = require('passport')
require('./passport-setup')

// function that checks if user is logged in
function isLoggedIn(req, res, next){
    // check if request has user, true call next -- false 401: is unauthorized
    req.user ? next() : res.sendStatus(401)
}

// middleware
// initialize app
const app = express()
app.use(session({ secret: process.env.SESSION_SECRET }));
app.use(passport.initialize())
app.use(passport.session())

// create a route
app.get('/', (req, res) => {
    res.send('<a href="/auth/google">Authenticate with Google</a>')
})

// when they click the route above, authenticate user
app.get('/auth/google',
    // authenticate with provider google 
    passport.authenticate('google', { scope: ['email', 'profile'] })
)
 
// when logging in
app.get('/google/callback',
    passport.authenticate('google', {
        // succesffully authenticated, bring them to
        successRedirect: '/protected',
        // when failure
        failureRedirect: '/auth/failure',
    })
)

// failure route
app.get('/auth/failure', (req, res) => {
    res.send('something went wrong..')
})

// cannot get here unless user islogged in
app.get('/protected', isLoggedIn, (req, res) => {

    res.send(`Hello ${req.user.displayName}`)
})

// logout route
app.get('/logout', (req, res)=>{
    req.logout();
    req.session.destroy()
    res.send('Goodybe')
})

const express = require('express')
const app= express()
const expressLayouts = require('express-ejs-layouts')
const indexRouter = require('./routes/index')
require('dotenv').config({path: 'env'});

app.set('view engine', 'ejs')
app.set('views',__dirname + '/views')
app.set('layout','layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL,{          //npm i --save-dev dotenv for that env variable
    useNewUrlParser: true})          //we are setting a url as per our process environment
    const db = mongoose.connection
    db.on('error',error => console.error(error))
    db.once('open', () => console.log('Connected'))

app.use('/', indexRouter)

app.listen(process.env.PORT || 3000)
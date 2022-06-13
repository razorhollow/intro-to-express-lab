//import modules
import express from 'express'

import { prospects } from "./data/data.js"

//create express app

const app = express()

//configure the app

app.set('view engine', 'ejs')

//mount routes

app.get('/', function(req,res) {
  res.render('home')
})

//tell app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})

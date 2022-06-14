//import modules
import express from 'express'

import { prospects } from "./data/prospects.js"

//create express app

const app = express()

//configure the app

app.set('view engine', 'ejs')

//mount routes

app.get('/', function(req,res) {
  res.render('home')
})

app.get('/prospects', function(req,res) {
  res.render('prospects/prospectList.ejs', {
    prospects: prospects
  })
})

//tell app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})

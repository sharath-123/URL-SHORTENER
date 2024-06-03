const express = require('express')
const mongoose = require('mongoose')

const app = express()


const PORT  = process.env.PORT || 3000



mongoose.connect('mongodb+srv://asharathchandra09:fT0ewiWz18gP6tBb@cluster0.khhb0hd.mongodb.net/shorturl')

const db = mongoose.connection;

db.on('error',()=>{
      console.log('Eror');
})
db.once('open',()=>{
    console.log("Connected");
})




app.set('view engine' ,'ejs')
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

// link router
const urlRouter = require('./routes/urlRout')
app.use('/', urlRouter)


app.listen(PORT, ()=>{
     console.log("server is running");
})
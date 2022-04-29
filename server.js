//importing packages
const express = require('express')
const errorHandler = require('./middlewares/errorHandler')
const dotenv = require('dotenv').config()

//connect to DB
require('./db')()

//init server
const app = express()

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended : true}))

//the routes
app.use('/api/user', require('./routes/userRoutes'))

//unknown routes
app.use('/*', (req, res) => { res.status(404).send('this page doesnt exist') })

app.use(errorHandler)

//setting the port
const PORT = process.env.PORT || 3000

//server listen
app.listen(PORT, () => {console.log(`server listenning on port: ${PORT}`);} )
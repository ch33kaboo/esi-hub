//importing packages
const express = require('express')
const dotenv = require('dotenv').config()

//init server
const app = express()

//the routes
app.use('/api/user', require('./routes/userRoutes'))

//unknown routes
app.use('/*', (req, res) => { res.send('this page doesnt exist') })


//setting the port
const PORT = process.env.PORT || 3000

//server listen
app.listen(PORT, () => {console.log(`server listenning on port: ${PORT}`);} )
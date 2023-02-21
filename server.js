const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser')
const users = require('./routes/users')
const movies = require('./routes/movies')
const mongoose = require('./config/database')
var jwt = require('jsonwebtoken');

const app = express();

app.set('secretKey', 'nodeRestApi')

mongoose.connection.on('error', console.error.bind(console, 'MongoDb connection error'))
app.use(logger('dev'))
app.use(bodyParser.urlencoded({extended:false}))
app.get('/',(req,res)=>{
    res.json({"tutorial": "Build REST API with node.js"})
})

app.use('/users',users);

app.use('/movies',validateUser, movies)

function validateUser(req, res, next) {
    jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), function(err, decoded) {
      if (err) {
        res.json({status:"error", message: err.message, data:null});
      }else{
        // add user id to request
        req.body.userId = decoded.id;
        next();
      }
    });
    
  }
app.listen(3000,()=>{
    console.log("Listening on port 3000")
})
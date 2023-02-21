const mongoose = require('mongoose')
const mongoDb = "mongodb+srv://<username>:<password.@cluster0.2qji5uk.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(mongoDb, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{console.log("Databse Connected!")})
.catch((err)=>{console.log(err)})

module.exports=mongoose

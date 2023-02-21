const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

//Defining a Schema
const schema = mongoose.Schema;

const userSchema = new schema({
    name:{
        type:String,
        trim: true,
        required: true
    },
    email:{
        type: String,
        trim:true,
        required:true
    },
    password:{
        type: String,
        trim:true,
        required:true
    }
});

//hashing a user password before storing it into a databse
userSchema.pre('save', function(next){
    this.password=bcrypt.hashSync(this.password, 8);
    next();
});

module.exports = mongoose.model('user', userSchema);
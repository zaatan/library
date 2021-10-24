const mongoose =require ('mongoose');
// var passportLocalMongoose = require('passport-local-mongoose');


// for connecting database

mongoose.connect('mongodb+srv://usertwo:usertwo@ictak.05key.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');

// to create schema

const schema=mongoose.Schema;

// structure of schema

const loginSchema= new schema({

    username:String,
    password:String
    
});

// plugin for passport-local-mongoose 
// loginSchema.plugin(passportLocalMongoose);

// model creation

var Logindata= mongoose.model('admindata',loginSchema);

// to export to app.js

module.exports=Logindata;
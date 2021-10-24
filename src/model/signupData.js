const mongoose =require ('mongoose');


// for connecting database

mongoose.connect('mongodb+srv://usertwo:usertwo@ictak.05key.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
// to create schema

const schema=mongoose.Schema;

// structure of schema

const signupSchema= new schema({
    name:String,
    username:String,
    number:String,
    password:String
});


// model creation

var Signupdata= mongoose.model('signupdata',signupSchema);

// to export to app.js

module.exports=Signupdata;
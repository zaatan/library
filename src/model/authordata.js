const mongoose =require ('mongoose');


// for connecting database

mongoose.connect('mongodb+srv://usertwo:usertwo@ictak.05key.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');

// to create schema

const schema=mongoose.Schema;

// structure of schema

const AuthorSchema= new schema({
    name:String,
    description:String,
   
    image:String
});


// model creation

var Authordata= mongoose.model('authordata',AuthorSchema);

// to export to app.js

module.exports=Authordata;

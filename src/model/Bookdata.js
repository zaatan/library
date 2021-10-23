const mongoose =require ('mongoose');


// for connecting database

mongoose.connect('mongodb+srv://userone:userone@ictak.05key.mongodb.net/LIBRARYAPPS?retryWrites=true&w=majority');

// to create schema

const schema=mongoose.Schema;

// structure of schema

const BookSchema= new schema({
    title:String,
    author:String,
    genre:String,
    image:String
});


// model creation

var Bookdata= mongoose.model('bookdata',BookSchema);

// to export to app.js

module.exports=Bookdata;

/*
File Name: book.js
Authors Name : Nikhil
Student ID : 301167843
Web App name: Books List App
*/



let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);

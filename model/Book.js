// const { Schema, model } = require("mongoose");

// const BookSchema = new Schema({
//   author: {
//     type: String,
//     // required: true
//   },
//   title: {
//     type: String,
//     // required: true
//   },
//   description: {
//     type: String,
//     // required: true
//   },
//   image: {
//     type: String,
//     // required: true
//   },
//   link: {
//     type: String,
//     // required: true
//   },
// });

const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const BookSchema = new Schema({
  title: String,
  authors: [String],
  description: String,
  image: String,
  link: String,
})

const Book = model('Book', BookSchema);

module.exports = Book;

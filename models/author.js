const mongoose = require('mongoose');

const { Schema } = mongoose;

const AuthorSchema = new Schema({
  name: String,
  age: Number,
  books: [String]
});

module.exports = mongoose.model('Author', AuthorSchema);
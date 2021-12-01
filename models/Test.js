const mongoose = require('mongoose');
const { Schema, model } = mongoose

const Test = new Schema(
  {
    name: String,
   
  }
);

module.exports = model('test', Test);
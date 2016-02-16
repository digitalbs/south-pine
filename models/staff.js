'use strict';

let Mongoose = require('../database').Mongoose;
let autoIncrement = require('mongoose-auto-increment');

let staffSchema = new Mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  about: {
    type: String,
    required: true
  },
  image: {
    type: String
  }
});

staffSchema.plugin(autoIncrement.plugin, {
  model: 'Staff',
  field: 'id',
  startAt: 1
});

let Staff = Mongoose.model('Staff', staffSchema, 'Staff');

module.exports = Staff;

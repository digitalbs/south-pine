'use strict';

let Mongoose = require('mongoose');
let autoIncrement = require('mongoose-auto-increment');
let config = require('./config');

Mongoose.connect('mongodb://' + config.database.host + ':' + config.database.port + '/' + config.database.name);

let db = Mongoose.connection;
autoIncrement.initialize(db);


db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
  console.log('Connected to South Pine database');
});

exports.Mongoose = Mongoose;
exports.db = db;

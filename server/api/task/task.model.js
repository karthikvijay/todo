'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TaskSchema = new Schema({
  name: String,
  descript: String,
  status: Boolean,
  updatedAt: {
  	type: Date, 
  	default: Date.now
  }
});

TaskSchema
  .virtual('token')
  .get(function() {
    return {
      '_id': this._id,
     
    };
  });

module.exports = mongoose.model('Task', TaskSchema);
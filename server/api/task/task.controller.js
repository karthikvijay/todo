'use strict';

var _ = require('lodash');
var Task = require('./task.model');

// Get list of tasks
exports.index = function(req, res) {
  Task.find(function (err, tasks) {
    if(err) { return handleError(res, err); }
    return res.json(200, tasks);
  });
};

// Get a single task
exports.show = function(req, res) {
  Task.findById(req.params.id, function (err, task) {
    if(err) { return handleError(res, err); }
    if(!task) { return res.send(404); }
    return res.json(task);
  });
};

// Creates a new task in the DB.
exports.create = function(req, res) {
  console.log(req.body);

  Task.create(req.body, function(err, task) {
    if(err) { return handleError(res, err); }
     console.log(task.name);
     console.log(task.updatedAt);
     console.log(task._id);

    return res.json(201, task);
    
  });
};

// Updates an existing task in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Task.findById(req.params.id, function (err, task) {
    if (err) { return handleError(res, err); }
    if(!task) { return res.send(404); }
    //console.log(Date.now());
    task.updatedAt=Date.now();
    //task.markModified('updatedAt');
    console.log(task.updatedAt);
   /* var d = new Date(Date.now());
    var formattedDate = d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();
    var hours = (d.getHours() < 10) ? "0" + d.getHours() : d.getHours();
    var minutes = (d.getMinutes() < 10) ? "0" + d.getMinutes() : d.getMinutes();
    var formattedTime = hours + ":" + minutes;
    formattedDate = formattedDate + " " + formattedTime;
    console.log(formattedDate);



    task.updatedAt=formattedDate;*/
    var updated = _.merge(task, req.body);
    //updated.updatedAt=Date.now;
    console.log(updated);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, task);
    });
  });
};

// Deletes a task from the DB.
exports.destroy = function(req, res) {
  console.log("delete mode is on");
  console.log(req.params.id);
  Task.findById(req.params.id, function (err, task) {
    if(err) {  return handleError(res, err); }
    if(!task) { return res.send(404); }
    task.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
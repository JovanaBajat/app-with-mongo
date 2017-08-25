const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  title: { type: String },
  completed:    { type: Boolean }
});

module.exports = mongoose.model('Task', taskSchema)
//Task - name of collection that we make Task = tasks, it links app with collection tasks in mongodb

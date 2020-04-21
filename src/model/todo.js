const mongoose = require('mongoose');
const { Schema } = mongoose;

const a = function expiredTime() {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let milliseconds = date.getMilliseconds();
  return new Date(Date.UTC(year, month, day, hours, minutes, seconds, milliseconds));
};

const DailyTodo = new Schema({
  username: String,
  title: String,
  desc: String,
  tags: [String],
  done: {
    type: Boolean,
    default: false
  },
  createAt: {
    type: Date,
    default: a()
  },
  expired: {
    type: Date,
    default: a()
  },
});

module.exports = mongoose.model('DailyTodo', DailyTodo);

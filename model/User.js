const mongoose = require("mongoose");
const uuid = require('uuid');

const UserSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  memory: {
    type: String,
    required: true,
  },
  date: {
      type: Date,
      default: Date.now
  }
});

const User = mongoose.model('MemoryStore', UserSchema)

module.exports = User


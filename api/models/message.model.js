const mongoose = require('mongoose');
const db = require('../config/db');
const { Schema } = mongoose;

const messageSchema = new Schema({
    name: {
        type: String,
    },
    message: {
        type: String,
    },
    date: {
      type: String,
    },
    time: {
        type: String,
    }
}, {timestamps: false});

const messageModel = db.model('message', messageSchema);

module.exports = messageModel;

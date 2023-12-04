const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://root:KHvyu14Zc1JTw8gi@development.47nu14i.mongodb.net/');

module.exports = mongoose.connection;

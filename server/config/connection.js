const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || process.env.DB_URI);

module.exports = mongoose.connection;

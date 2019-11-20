const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ie7f5n', { useNewUrlParser: true });

module.exports = mongoose;

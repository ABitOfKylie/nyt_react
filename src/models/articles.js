var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SavedSchema = new Schema({
	title: String,
	saveDate: Date
});

var Articles = mongoose.model('Articles', SavedSchema);

module.exports = Articles;
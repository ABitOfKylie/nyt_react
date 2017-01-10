var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
	title: {
		type: String,
	},
	date:{
		type: date
	},
	url: {
		type:String,
	}
});

module.exports = mongoose.model('Article', ArticleSchema);



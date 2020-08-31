const mongoose = require('mongoose');

var sessionIdSchema = new mongoose.Schema({
	ip:String,
	os:String,
	browser:String
});

var listSessionId = mongoose.model('listSessionId',sessionIdSchema,'listSessionId');

module.exports = listSessionId;
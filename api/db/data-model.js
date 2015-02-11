var mongoose = require('mongoose');

module.exports = mongoose.model('Data', {
	url: String,
	type: String,								// the human-friendly wording for the API call
	payload: mongoose.Schema.Types.Mixed,		// the payload
	date: Date,
	network: String								// one of "fb" or "vk"
});

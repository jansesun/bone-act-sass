'use strict';
var sass = require('node-sass'),
	bone = require('bone');
module.exports = bone.wrapper(function(buffer, encoding, callback) {
	var option = this.option || {};
	option.data = buffer.toString();
	sass.render(option, function(e, result) {
		if(e) {
			console.log(e.message);
			callback(null, buffer);
		} else {
			callback(null, result.css);
		}
	});
});
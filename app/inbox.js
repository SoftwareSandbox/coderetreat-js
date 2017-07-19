/* jshint undef: true, unused: false, esnext: true, strict:false, laxbreak:true */
/* globals module, require */
module.exports = (() => {

let _ = require('lodash');

class Inbox {

	constructor(messageSender) {
		this.messageSender = messageSender;
	}

	receiveMessage(from, message) {
		return this.messageSender({address:'',message:''});
	}
}

return {Inbox};

})();
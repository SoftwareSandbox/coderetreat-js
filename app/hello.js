/* jshint undef: true, unused: false, esnext: true, strict:false, laxbreak:true */
/* globals module, require */
module.exports = (() => {

let _ = require('lodash');

class Hello {

	constructor() {
		this.message = 'World!';
	}

	greet() {
		return this.message;
	}
}

return {Hello};

})();
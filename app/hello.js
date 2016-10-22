/* jshint undef: true, unused: false, esnext: true, strict:false, laxbreak:true */
/* globals module, require */
module.exports = (() => {

let _ = require('lodash');
let BigNumber = require('bignumber.js')

class Hello {

	// chip: { color, amount }
	// enriched: { color, amount, max }
	constructor() {
		this.message = 'World!';
	}

	greet() {
		return this.message;
	}
}

return {Hello};

})();
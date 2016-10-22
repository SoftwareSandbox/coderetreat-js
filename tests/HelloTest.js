/* jshint undef: true, unused: false, esnext: true, strict:false, laxbreak:true */
/* globals require, describe, it, console */
let expect = require('chai').expect;
let _ = require('lodash');
let {Hello} = require('../app/hello');

describe('Hello', function() {
	describe('greet', function() {
		it('should return World!', function() {
			let hello = new Hello();
			expect(hello.greet()).to.equal('World!');
		});
	});
});
'use strict';

var exchange = require('../lib/exchange');

var exchangeData = {};

module.exports = {
	setUp : function(callback) {
		this.foo = 'bar';
		callback();
	},
	tearDown : function(callback) {
		// clean up
		callback();
	},
	'buy should add a BUY nockmarket order' : function(test) {
		
		exchangeData = exchange.buy(40, 100, exchangeData);
		var expected_units = 100;
		test.equal(exchangeData.buys.volumes[40], expected_units, 'nockmarket buys order at $40 should be 100');
		test.done();
	}
};
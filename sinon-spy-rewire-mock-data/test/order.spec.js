import { expect } from 'chai';
import rewire from 'rewire';
import sinon from 'sinon';

// now rewire the data, rewire injects data into the module order
let order = rewire('../lib/order');

describe('Test order item', () => {
    'use strict';

    // now in here , we are setting up fake data for testing
    beforeEach(function(){
        this.testData = [
            {sku: 'abc', qty: 0 , inStock: false},
            {sku: 'abcd', qty: 10 , inStock: true},
            {sku: 'abcde', qty: 20 , inStock: true},
            {sku: 'abcdef', qty: 30 , inStock: true},
            {sku: 'abcdefg', qty: 31 , inStock: true}
        ];
        // now inject a console.log
        this.console = {
            log: sinon.spy() // simulate function calls!
        };

        // inject the data into the module
        order.__set__('inventoryData', this.testData);
        // inject a mock console
        order.__set__('console', this.console);

    });

    it('should return in stock item ', function() {
        const toFind = {sku: 'abcd'};
        const result = order.itemAvailability(toFind.sku, 1);
        expect(result).to.be.equal(true);
        expect(this.console.called);
        expect(this.console.log.callCount).to.be.equal(1, 'console.log() should be called only once!');
    });

});
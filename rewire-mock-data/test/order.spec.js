import { expect } from 'chai';
import rewire from 'rewire';

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

        order.__set__('inventoryData', this.testData);
    });

    it('should return in stock item ', () => {
        const toFind = {sku: 'abcd'};
        const result = order.itemAvailability(toFind.sku, 12);

        expect(result).to.be.equal(true);
    });

});
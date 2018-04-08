// to test the function in the order module, we need to mock the 
// inventory data instead of using real data, this is where rewire comes in
// import inventoryData  from '../data/inventory.json';
// import packageAndShip from './warehouse';

const inventoryData = require('../data/inventory.json');
const packageAndShip = require('./warehouse');

function findItem(sku) {
    'use strict';
    var i = inventoryData.map(item => item.sku).indexOf(sku);
    if (i === -1) {
        console.log(`Item - ${sku} not found`);
        return null;
    } else {
        return inventoryData[i];
    }
}

function isInStock(sku, qty) {
    'use strict';
    var item = findItem(sku);
    return item && item.qty >= qty;
}

module.exports = {
    itemAvailability: isInStock
};


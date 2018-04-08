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
        // you can see this console.log() is invoked during test, we do not want this.
        console.log(`Item - ${sku} not found`);
        return null;
    } else {
        // you can see this console.log() is invoked during test, we do not want this.
        console.log('ok, found the require sku');
        return inventoryData[i];
    }
}

function isInStock(sku, qty) {
    'use strict';
    var item = findItem(sku);
    return item && item.qty >= qty;
}

// function order(sku, quantity, complete) {
//     'use strict';
//     complete = complete || function () {};
//     if (isInStock(sku, quantity)) {
//         console.log(`ordering ${quantity} of item # ${sku}`);
//         packageAndShip(sku, quantity, function (tracking) {
//             console.log(`order shipped, tracking - ${tracking}`);
//             complete(tracking);
//         });
//         return true;
//     } else {
//         console.log(`there are not ${quantity} of item '${sku}' in stock`);
//         return false;
//     }
// }

module.exports = {
    itemAvailability: isInStock
};


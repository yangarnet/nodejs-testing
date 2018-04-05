
import { addAsync } from '../utils/math/tools';
import { expect, assert } from 'chai';
import  chai  from 'chai';
import getLatLng from './geocode/getGeoCode';


const should = chai.should();

describe('Test async callback', () => {
    it('Should invoke async callback', (done) => {
        addAsync(3, 4, (sum) => {
            assert.isNumber(sum);
            expect(sum).to.be.equal(7);
            done();
        });
    }).timeout(2001);
});

describe('Test getLatLng', () => {
    const address = 'hurstville';
    it('should return lat and lng object', () => {
        getLatLng(address).then(actual => expect(actual).to.be.not.null);
    });
});
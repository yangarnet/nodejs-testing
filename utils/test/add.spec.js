import chai from 'chai';
import { expect, assert } from 'chai';
import { add, addAsync } from '../math/tools';

// see , should, expect and assert from chai but a bit different  in usage
// to fastfy speed, can do it : nodemon --exec 'npm test'
const should = chai.should();

describe('test utils', () => {
    let  abc, efg;
    before(function() {
        // runs before all tests in this block
        abc = 'foo';
        efg = { test: ['should - chai', 'expect - chai', 'assert - chai', 'mocha']};
    });

    after(function() {
    // runs after all tests in this block
    });
    
    beforeEach(function() {
    // runs before each test in this block
    });
    
    afterEach(function() {
    // runs after each test in this block
    });
    
    // test cases
    it("should return something", function(){
        // see the chai assert expect and should
        assert.typeOf(abc, 'string');
        assert.typeOf(efg, 'object');
        
        expect(abc).to.equal('foo');
        expect(efg).to.have.property('test');
        
        abc.should.equal('foo');
        efg.should.not.be.a('number');
        efg.should.have.property('test').with.length(4);

    });
    
    it('should add two numbers', () => {
        assert.equal(add(2, 2), 4);
    });

    // see the async test for callbacks? passing in with done
    it('should add two numbers in async', (done) => {
        addAsync(2, 3, (sum) => {
            assert.typeOf(sum, 'number');
            expect(sum).to.eq(5);
            // run done at last
            done();
        })
    }).timeout(5000);

    // see how to set a specifi timeout above ? 
});

describe('Array', () => {
    describe('IndexOf()', () => {
        it('should return -1 when nothing found' , () => {
            assert.equal([1,2,3].indexOf(6), -1);
        });
        it('should return a non -1 when found', () => {
            assert.notEqual([1,2,3].indexOf(2), -1);
            //
            [1,2,3].indexOf(2).should.eq(1);
        });    
    });
});
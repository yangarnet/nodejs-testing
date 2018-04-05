
const should = require('chai').should();
const expect = require('chai').expect;
const assert = require('chai').assert;
const lib = require('../lib/tools');

describe('test lib', () => {
    'use strict';
    describe('test printName', () => {
        it('should print person fullname', () => {
            const foo = 'bar';
            const tea = ['chai', 'mocha', 'sinon'];
            const person = {firstname: 'peter', lastname: 'loz'};
            // see usage of assert
            assert.typeOf(foo, 'string', 'yes foo type is string');
            assert.lengthOf(tea, 3, 'tea array length is 3');
            
            // test non strict equal
            assert.equal(3, '3', '== coerces values to strings');
            assert.notEqual(3, 4, 'these numbers are not equal');

            // test strict equal
            assert.strictEqual(true, true, 'these booleans are strictly equal');
            assert.notStrictEqual(3, '3', 'no coercion for strict equality');
            
            // test object equal
            assert.deepEqual({ tea: 'green' }, { tea: 'green' });
            assert.notDeepEqual({ tea: 'green' }, { tea: 'jasmine' });
            
            // test object has direct or inherited property by name with value
            assert.propertyVal({ tea: 'is good' }, 'tea', 'is good');
            assert.notPropertyVal({ tea: 'is good' }, 'tea', 'is bad');
            assert.notPropertyVal({ tea: 'is good' }, 'tea', 'is ..good', 'object has property tea and value');

            // expect usage
            expect(foo).to.be.a('string');
            expect(typeof(foo)).to.be.equal('string');
            expect(foo).to.be.equal('bar');
            expect(tea).to.be.a('array', 'tea type is array');
            expect(person).to.have.property('firstname').with.equal('peter', 'person first name is peter');
            
            const fullName = lib.printName(person);
            expect(fullName).to.equal('peter, loz');

            //  should usage
            person.should.be.a('object');
            person.should.have.property('firstname').with.equal('peter', 'person first name is peter');
            tea.should.have.lengthOf(4, 'tea has length of 3');

        });
    });

});
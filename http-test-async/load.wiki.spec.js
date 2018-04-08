
import { expect, assert } from 'chai';
import chai from 'chai';
import { loadWiki } from './loadWikiPage';
import nock from 'nock';

// to test async with mocha, add "done" to the callback
describe('Load Abraham lincoln wiki page', () => {
    'use strict';

    describe('hitting the real server without mock server', () => {
        // test async, need passing done
        // but it is hitting the server, that is bad!
        it('should load Abraham lincoln wikipedia page', (done) => {
            loadWiki({ first: 'Abraham', last: 'Lincoln' }, (html) => {
                expect(html).to.be.ok;
                done();
            });
        }).timeout(4000);
    });

    // now, with nock to mock http server, you will not hit the real http server
    describe('mocking the http request with nock', () => {
        
        before(() => {
            // https://github.com/node-nock/nock 
            nock('https://en.wikipedia.org', { reqheaders: { }})
                .get('/wiki/Abraham_Lincoln')
                .reply(200, 'Mock Abraham Lincoln Page response');
        });

        // passing done to async test case
        it('should local Abraham_Lincoln wiki page', (done) => {
            loadWiki({ first: 'Abraham', last: 'Lincoln' }, (html) => {
                expect(html).to.be.a('string');
                expect(html).to.be.equal('Mock Abraham Lincoln Page response', 'html result is: ');
                done();
            });
        });
    });
});

import mySuperTest  from 'supertest';
import * as app  from './server';
import chai from 'chai';
import { expect, assert } from 'chai';

const should = chai.should();

describe('test home page loading', () => {
    it('should return default message', (done) => {
        // passing in the express application
        // mySuperTest(app).get('/')
        //                 .expect(200)
        //                 .expect('hello world', done);
    });
});

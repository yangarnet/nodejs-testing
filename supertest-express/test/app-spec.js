
var expect = require('chai').expect;
var assert = require('chai').assert;
var rewire = require('rewire');
var app = rewire('../app');
var request = require('supertest');
var cheerio = require('cheerio');

describe("Dictionary App", function () {
    'use strict';

    it("Loads the home page", (done) => {
        // check html content in the respoonse
        request(app).get('/').expect(200).end((err, res) => {
            // jquery style 
            let $ = cheerio.load(res.text);
            let pageHeading = $('body>h1:first-child').text();
            expect(pageHeading).to.be.equal('Skier Dictionary');
            done();
        });
    });

    describe("Dictionary API", () => {

        beforeEach(() => {
            
            // set the module data with rewire
        	this.defs = [
                {
                    term: "One",
                    defined: "Term One Defined"
                },
                {
                    term: "Two",
                    defined: "Term Two Defined"
                }
            ];

            app.__set__("skierTerms", this.defs);
        });

        it("GETS dictionary-api" , (done) => {
            request(app)
                .get('/dictionary-api')
                .expect(200)
                .end((err, res) => {
                    let terms = JSON.parse(res.text);
                    expect(terms).to.deep.equal(this.defs);
                    done();
                });

        });

        it("POSTS dictionary-api", (done) => {
            const data = {
                term: "Three",
                defined: "Term Three Defined"
            };

            request(app)
                .post('/dictionary-api')
                .send(JSON.stringify(data))
                .expect(200)
                .end(done);
        });

        it("DELETES dictionary-api", (done) => {
            request(app)
                .delete('/dictionary-api/One')
                .expect(200)
                .end((err, res) => {
                    let result = JSON.parse(res.text);
                    console.log(result);
                    expect(result).to.be.a('array').with.lengthOf(1);
                    expect(result[0].term).to.equal('Two');
                    // call the done at last
                    done();
                });
        });

    });

});
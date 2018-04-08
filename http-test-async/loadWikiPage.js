import https from 'https';

export const loadWiki = (person, cb) => {
    'use strict';
    const url = `https://en.wikipedia.org/wiki/${person.first}_${person.last}`;
   
    https.get(url, (response) => {
        let body = '';

        response.setEncoding('utf-8');

        response.on('data', (chunk) => {
            body += chunk;
        });

        response.on('end', () => {
            cb(body);
        });
    });
};
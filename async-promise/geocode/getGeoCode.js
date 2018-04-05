
import getEndPoint from '../endpoint/config';
import request from 'request';

const getLatLng = (address) => {
    const options = {
        method: 'GET',
        url: getEndPoint(address),
        json: true
    };

    return new Promise((resolve, reject) => {
        request(options, (err, res, body) => {
            if (err) {
                reject('unable to connect server');
            } else if (body && body.status === 'ZERO_RESULTS') {
                reject('could not find any result');
            } else if (body && body.status === 'OK') {
                resolve(body);
            }
        });
    });
};

export default getLatLng;

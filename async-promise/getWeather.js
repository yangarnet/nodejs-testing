
import request from 'request';

const getWeatherByLatLog = (lat, lng) => {  
    // https://darksky.net/dev/account
    const key = 'ed86430b08ab60e5082279d49a6e3f82';
    const options = {
        method: 'GET',
        // set json format for response
        json: true,
        url: `https://api.darksky.net/forecast/${key}/${lat},${lng}`
    };

    // return a promise
    return new Promise((resolve, reject) => {
        // err first request
        request(options, (err, res, body) => {
            if (err) {
                reject('err occured!');
            } else {
                resolve(body);
            }
        });    
    })
};


export default getWeatherByLatLog;


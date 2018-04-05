

import getEndPoint from './endpoint/config';
import axios from 'axios';
import getLatLng from './geocode/getGeoCode';
import getWeatherByLatLog from './getWeather';

const address = 'hurstville';
const geoUrl = getEndPoint(address);

// using axios, easy
// axios.get(geoUrl).then(response => {
//     const key = 'ed86430b08ab60e5082279d49a6e3f82';
//     const weatherUrl = 'https://api.darksky.net/forecast';
//     console.log(JSON.stringify(response.data, undefined, 3));
//     const geometry = response.data.results[0].geometry;
//     const weatherApiurl = `${weatherUrl}/${key}/${geometry.location.lat},${geometry.location.lng}`;
    
//     // now return another promise for chaining
//     return axios.get(weatherApiurl);
// }).then(response => {
//     console.log('-------reply from another promise---------');
//     console.log(JSON.stringify(response.data, undefined, 3));
// }).catch(err => { console.log(err.error)});

getLatLng(address).then((res, err) => {
    if (err) {
        console.log('Oops, err occur');
    }
    if (res.status === 'OK') {
        console.log(JSON.stringify(res.results[0].geometry, undefined, 3));
        const geometry = res.results[0].geometry;
        return getWeatherByLatLog(geometry.location.lat, geometry.location.lng);
    }
}).then((res, err) => {
    if (err) {
        throw new Error(erro);
    }
    console.log('timezone', res.timezone);
    console.log(JSON.stringify(res.currently, undefined, 3));
    
}).catch(err => {throw new Error(err);});



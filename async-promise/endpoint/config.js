const key = 'AIzaSyDppWb9EeutDwqIqgccDc8uPXV98vTMsaA';
const domain = 'https://maps.googleapis.com';

const getEndPoint = (address) => {
    return `${domain}/maps/api/geocode/json?key=${key}&address=${encodeURIComponent(address)}`;
};

export default getEndPoint;


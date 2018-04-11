
async function getProjectUserByName(userName) {
    const userResponse = await axios.get(`${baseUrl}/user?username=${userName}`);
    const user = userResponse.data;
    const projectsResponse = await axios.get(`${baseUrl}/user/${user.id}/projects`);
    return projectsResponse.data;
  }
  
  async function getSOmeAsyncDate(value) {
    const result = await fetchThenDate(someUrl, value);
    return result;
  }
  
  const request = require('request');
  
  request('http://www.google.com/...', (error, response, body) => {
  
  });
  
  const axios = require(‘axios’);
  axios.get(‘http://www.somepage.com')
  .then(function (response) { // Reponse being the result of the first request
      // Returns another promise to the next .then(..) in the chain
      return axios.get(`http://www.somepage.com/${response.someValue}`);
  })
  .then(function response { // Reponse being the result of the second request
      // Handle response
  })
  .catch(function (error) {
      // Handle error.
  });
  
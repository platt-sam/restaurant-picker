const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://restaurants-near-me-usa.p.rapidapi.com/restaurants/location/state/HI/0',
  headers: {
    'X-RapidAPI-Key': 'GENERATE-KEY-HERE',
    'X-RapidAPI-Host': 'restaurants-near-me-usa.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
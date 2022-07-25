const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://documenu.p.rapidapi.com/restaurant/4072702673999819',
  headers: {
    'x-api-key': '<REQUIRED>',
    'X-RapidAPI-Key': 'fb17dadf3fmsh82e78ba3026de4cp1cddc2jsn6ff7db847e62',
    'X-RapidAPI-Host': 'documenu.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
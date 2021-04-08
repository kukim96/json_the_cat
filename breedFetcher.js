const request = require('request');
 
const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, 'utf-8', (err, response, body) => {
    if (err) {
      callback(err, null);
    } else {
      const data = JSON.parse(body)[0];
      !data ?
        callback(null, 'Entered breed is not found. Please enter a real breed') :
        callback(null, `Description of ${breed}: ${data[0].description}`);
    }
  });
};

module.exports = fetchBreedDescription;

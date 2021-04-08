const request = require('request');
const breed = process.argv.slice(2);
 
const breedFetcher = (breed) => {
  console.log(`fetching from http://https://api.thecatapi.com/v1/breeds/search?q=${breed}`);
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, 'utf-8', (err, response, body) => {
    if (err) {
      return console.log('Error! Error! Please read details below...\n' + err);
    }

    const data = JSON.parse(body);

    return !data[0] ?
      console.log('Entered breed is not found. Please enter a real breed') :
      console.log(`Description of ${breed}: ${data[0].description}`);
  });
};

breedFetcher(breed);
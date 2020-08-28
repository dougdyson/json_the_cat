/*
Build a command line app for users to query this TheCatAPI from the terminal.

Users can provide any breed name, causing our application to fetch the information from the API
and print out a short description of that breed.
*/

const request = require('request');

const fetchBreedDescription = function(breedName, cb) {

  const urlToGet = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;

  //console.log('Requesting info:' ,urlToGet);
  
  request(urlToGet, (error, response, body) => {
    
    const data = JSON.parse(body);

    if (error) {
      cb(error, null);
      return;
    } else {
      if (data[0] === undefined) {
        cb('Breed not found. Try again.', null);
      } else {
        let desc = data[0].description;
        desc = desc.trim()
        cb(null, desc);
      }
    }
  });
  return;
};

module.exports = { fetchBreedDescription };

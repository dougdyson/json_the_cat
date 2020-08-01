/*
Build a command line app for users to query this TheCatAPI from the terminal.

Users can provide any breed name, causing our application to fetch the information from the API
and print out a short description of that breed.
*/

const request = require('request');

const fetchBreedDescription = function(breedName, cb){

  let urlToGet = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;
  
  request(urlToGet, (error, response, body) => {

    const data = JSON.parse(body);

    if(error){
      cb(error);
      return;
    } else {
      desc = data[0].description;
      cb(desc);
    }
  });
  return;
};

module.exports = { fetchBreedDescription };
/*
Build a command line app for users to query this TheCatAPI from the terminal.

Users can provide any breed name, causing our application to fetch the information from the API
and print out a short description of that breed.
*/

const request = require('request');

// accept user input
let args = process.argv;
args = args.splice(2);
//console.log(args);

let urlToGet = 'https://api.thecatapi.com/v1/breeds/search?q=' + args;

request(urlToGet, (error, response, body) => {
  const data = JSON.parse(body);
  // console.log(data);
  // console.log(typeof data);
  if (data === []) {
    console.log('Breed', args[0], 'not found.');
  } else {
    console.log('Breed not found');
  }
});
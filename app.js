const express = require('express'); //import the express package
const app = express(); // create an express app


const port = process.env.PORT || 3001;

// this is a route handler -> listens for incoming requests and sends back a response
// this is the root route -> expects to render an index page
app.get('/', (req, res) => {

  // this is pointing at index.html -> shared team page
  res.sendFile(__dirname + '/index.html');
});

app.get('/contact', (req, res) => {
  // this is pointing at index.html -> shared team page
  res.sendFile(__dirname + '/contact.html');
});

// set up the server to listen for incoming connections at this port
app.listen(3001, () => {
  console.log(`listening on ${port}`);
});
const express = require('express'),
  request = require('request'),
  { REACT_APP_MAP_KEY: googleKey, REACT_APP_MAP_URL: googleUrl } = process.env;
let server = express(),
  bodyParser = require('body-parser'),
  cors = require('cors');
server.use(bodyParser.json());

server.use(cors({ origin: '*' }));

server.get('/get-nearest-places', function(req, res) {
  const params = req.query,
    arrKey = Object.keys(params);
  let genUrl = arrKey.reduce(
    (acc, next, ind) => `${acc}${next}=${params[next]}${ind < arrKey.length - 1 ? '&' : ''}`,
    '',
  );
  let url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?${genUrl}`;
  request.get(url, (error, response) => {
    res.send(response.body);
    return true;
  });
});

server.listen(8082, function() {
  console.log('Server is ON!');
});

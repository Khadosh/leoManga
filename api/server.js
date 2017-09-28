'use strict';

const Hapi = require('hapi');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 8000,
  routes: { cors: true }
});

// Add the route
server.route({
  method: 'GET',
  path: '/mangas',
  handler: function (request, reply) {
    setTimeout(() => {
      return reply([
      'manga1',
      'manga2',
      'manga3',
      'manga4',
      'manga5',
      'manga6',
      'manga7',
      'manga8',
      'manga9',
      'manga10',
      'manga11',
      'manga12'
    ]);
  },1000);
  }
});

// Start the server
server.start(err => {
  if (err) throw err;
  console.log(`Server running at: ${server.info.uri}`); //eslint-disable-line
});

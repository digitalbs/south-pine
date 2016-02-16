'use strict';

let Bcrypt = require('bcrypt');
let Path = require('path');
let Inert = require('inert');
let vision = require('vision');
let Hapi = require('hapi');
let Basic = require('hapi-auth-basic');
let API = require('./server/api');
let server = new Hapi.Server();

server.connection({
	port: 8000
});

var users = {
	brian: {
		username: 'brian',
		password: '$2a$08$8iWbHs79/yKtmXLGY1jyCO7sWcQj00vFuBxW76swzMjqIrJWOIRxS',
		name: 'Brian Schneider',
		id: 2
	}
};

var validate = function (req, username, password, cb) {
	var user = users[username];
	if (!user) {
		return cb(null, false);
	}

	Bcrypt.compare(password, user.password, function (err, isValid) {
		cb(err, isValid, {
			id: user.id,
			name: user.name
		});
	});
};

server.register([vision, Basic, Inert], function (err) {
	server.auth.strategy('simple', 'basic', {
		validateFunc: validate
	});

	server.views({
		engines: {
			html: require('handlebars')
		},
		relativeTo: __dirname,
		path: './views'
	});

	server.route({
		method: 'GET',
		path: '/{param*}',
		handler: {
			directory: {
				path: 'public'
			}
		}
	});

	server.route({
		method: 'GET',
		path: '/',
		handler: {
			view: 'index'
		}
	});

	server.route({
		method: 'GET',
		path: '/admin/staff',
		config: {
			auth: 'simple',
			handler: {
        view: 'admin/staff'
      }
		}
	});

  for(var route in API) {
    server.route(API[route]);
  }

	if (!module.parent) {
    server.start(() => {
      console.log('started server');
    });
  }
});

module.exports = server;

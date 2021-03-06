/*
Copyright (c) 2014-2015 F-Secure
See LICENSE for details
*/

'use strict';

var redis = require('redis');
var url = require('url');
var inProduction = process.env.PORT || false;

var client;

if (inProduction) { // in Heroku
    var redisURL = url.parse(process.env.REDISCLOUD_URL);
    client = redis.createClient(redisURL.port, redisURL.hostname, {'no_ready_check': true});
    client.auth(redisURL.auth.split(':')[1]);
} else  { // In Testing
    client = redis.createClient();
}

module.exports = client;

'use strict';

var express = require('express');
import addDefaultRoutes from './helpers/addDefaultRoutes';


module.exports = function(port, proxyUrl) {
  this.port = port || 8080;
  this.proxyUrl = proxyUrl || 'http://localhost:8080';

  this.launch = function(debug) {
    var server = express();
   addDefaultRoutes(server);

    var listener = server.listen(this.port, "0.0.0.0", function(e) {
      var addressInfo = listener.address();
      console.log('Server running on "http://localhost:' + addressInfo.port);
    });
  }
}

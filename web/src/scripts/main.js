require('bootstrap-webpack');
require('../assets/stylesheets/style.less');

// TODO: Require assets here.
// require('../assets/images/product.png');

var App = require('./components/App.js');
var React = require('react');
var socket = io();

React.render(<App />, document.getElementById('main'));

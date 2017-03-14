const config = require('./webpack.config.development.js');

config.entry = ['./src/index'];
config.plugins.shift();
config.devServer = {};
config.output.publicPath = './dist/';
module.exports = config;

const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
const path = require('path');

module.exports = function override(config, env) {
  // do stuff with the webpack config...
  config = rewireLess(config, env);

  config.module.rules.push({
    test: /\.js$/,
    // exclude: /node_modules/,
    include: [
      path.resolve(__dirname, "node_modules/bpmn-js-bpmnlint")
    ],
    loader: 'babel-loader',
    query: {
      presets: ['@babel/preset-env', '@babel/preset-react'],
      plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/plugin-proposal-class-properties']
    }
  })

  return config;
};
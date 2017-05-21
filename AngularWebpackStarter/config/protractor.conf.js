require('ts-node/register');
const { SpecReporter } = require('jasmine-spec-reporter');
var helpers = require('./helpers');

exports.config = {
  allScriptsTimeout: 11000,
  singleRun: false,
  specs: [
      helpers.root('src/**/*.e2e-spec.ts')
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  chromeOnly: true,
  directConnect: true,
  baseUrl: 'http://localhost:59414/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  /*beforeLaunch: function() {
    require('ts-node').register({
        project: helpers.root('config/tsconfig.e2e.json')
    });
  },*/
  onPrepare() {
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};
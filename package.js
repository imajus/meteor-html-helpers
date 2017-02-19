Package.describe({
  name: 'majus:html-helpers',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'HTML layout Spacebars helpers.',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.2');
  api.use('ecmascript');
  api.use(['templating', 'underscore', 'ejson', 'underscorestring:underscore.string@3.3.4', 'majus:helpers-core@0.0.1'], 'client');
  api.mainModule('html-helpers.js', 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use(['templating', 'blaze', 'spacebars', 'ejson', 'majus:html-helpers'], 'client');
  api.mainModule('html-helpers-tests.js', 'client');
});

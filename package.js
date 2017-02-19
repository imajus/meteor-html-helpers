Package.describe({
  name: 'imajus:html-helpers',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'HTML layout Blaze helpers.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/imajus/meteor-html-helpers.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: null//'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.2');
  api.use('ecmascript@0.6.3');
  api.use(['templating@1.3.0', 'underscore@1.0.10', 'ejson@1.0.13', 'underscorestring:underscore.string@3.3.4', 'imajus:helpers-core@0.0.1'], 'client');
  api.mainModule('html-helpers.js', 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript@0.6.3');
  api.use('tinytest@1.0.12');
  api.use(['templating@1.3.0', 'blaze@2.3.0', 'spacebars@1.0.13', 'ejson@1.0.13', 'imajus:html-helpers'], 'client');
  api.mainModule('html-helpers-tests.js', 'client');
});

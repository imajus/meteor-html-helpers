Package.describe({
  name: 'imajus:html-helpers',
  version: '0.1.0',
  summary: 'HTML layout helpers for Blaze',
  git: 'https://github.com/imajus/meteor-html-helpers.git',
  documentation: 'README.md',
});

Package.onUse(function (api) {
  api.versionsFrom(['2.0', '3.0']);
  api.use('ecmascript');
  api.use(
    [
      'underscore',
      'ejson',
      'templating@1.3.4||1.4.4',
      'imajus:helpers-core@0.1.0',
    ],
    'client'
  );
  api.mainModule('html-helpers.js', 'client');
});

Package.onTest(function (api) {
  api.use(['ecmascript', 'tinytest']);
  api.use(
    [
      'templating',
      'blaze',
      'spacebars',
      'ejson',
      'imajus:html-helpers',
    ],
    'client'
  );
  api.mainModule('html-helpers-tests.js', 'client');
});

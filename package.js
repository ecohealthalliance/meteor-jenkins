Package.describe({
  name: 'eha:jenkins',
  version: '1.0.0',
  summary: 'Wrapper for the Jenkins remote access API',
  git: 'https://github.com/ecohealthalliance/meteor-jenkins.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('froatsnook:request@2.67.0')
  api.use('peerlibrary:xml2js@0.4.4_3')
  api.addFiles('jenkins.js', 'server');
  api.export('Jenkins', 'server');
});

Package.on_test(function (api) {
  api.use(['eha:jenkins', 'tinytest', 'test-helpers'], ['server']);
  api.use('froatsnook:request@2.67.0')
  api.add_files('tests/jenkins-tests.js', ['server']);
});

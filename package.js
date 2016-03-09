Package.describe({
  name: 'dannysullivan:jenkins',
  version: '0.0.1',
  summary: 'Wrapper for the Jenkins remote access API',
  git: 'https://github.com/ecohealthalliance/meteor-jenkins.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('froatsnook:request')
  api.use('peerlibrary:xml2js')
  api.addFiles('jenkins.js', 'server');
  api.export('Jenkins', 'server');
});

Package.on_test(function (api) {
  api.use(['dannysullivan:jenkins', 'tinytest', 'test-helpers'], ['server']);
  api.use('froatsnook:request')
  api.add_files('tests/jenkins-tests.js', ['server']);
});

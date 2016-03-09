# meteor-jenkins
A Jenkins API wrapper for Meteor

## Usage
Initialize a Jenkins object by passing it your Jenkins URL and the credentials for your Jenkins user:

`var jenkins = new Jenkins({jenkins_url: JENKINS_URL, user: JENKINS_USERNAME, key: JENKINS_PASSWORD});`

To trigger a Jenkins build (JOB_TOKEN is configured in the Jenkins setup for the job):

`jenkins.triggerBuild(JOB_NAME, JOB_TOKEN)`

To trigger a build with parameters:

`jenkins.triggerBuild(JOB_NAME, JOB_TOKEN, {PARAMETER1: VALUE1, PARAMETER2, VALUE2})`

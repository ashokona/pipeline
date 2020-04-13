pipeline {
  agent {
    docker {
      image 'tarampampam/node:13-alpine'
      // args '-p 20001-20100:3000'
    }
  }
  environment {
    CI = 'false'
    HOME = '.'
    npm_config_cache = 'npm-cache'
  }
  stages {
    stage('Install Packages') {
      steps {
        // // sh 'git --version'
        // sh 'node -v'
        // sh 'npm -v'
        echo 'brnach ...' + env.BRANCH_NAME
        sh 'npm install'
      }
    }
    stage('Test and Build') {
      parallel {
        // stage('Run Tests') {
        //   steps {
        //     sh 'npm run test'
        //   }
        // }
        stage('Create Build Artifacts') {
          steps {
            script {
              if (env.BRANCH_NAME == 'master') {
                  sh 'npm run build-prod'
              }else if (env.BRANCH_NAME == 'release') {
                  sh 'npm run build-release'
              }else {
                  sh 'npm run build-dev'
              }
            }
          }
        }
      }
    }
    stage('Deployment') {
      parallel {
        stage('Dev') {
          when {
            branch 'dev'
          }
          steps {
            withAWS(region:'us-east-1',credentials:'AWS-Credential-Jenkins-ID') {
              s3Delete(bucket: 'dev.cloudcops.io', path:'**/*')
              s3Upload(bucket: 'dev.cloudcops.io', workingDir:'build', includePathPattern:'**/*');
            }
            mail(subject: 'Staging Build', body: 'New Deployment to Staging', to: 'jenkins-mailing-list@mail.com')
          }
        }
        stage('Production') {
          when {
            branch 'master'
          }
          steps {
            withAWS(region:'us-east-1',credentials:'AWS-Production-Jenkins-Credential-ID') {
              s3Delete(bucket: 'cloudcops.io', path:'**/*')
              s3Upload(bucket: 'cloudcops.io', workingDir:'build', includePathPattern:'**/*');
            }
            mail(subject: 'Production Build', body: 'New Deployment to Production', to: 'jenkins-mailing-list@mail.com')
          }
        }
      }
    }
  } 
}

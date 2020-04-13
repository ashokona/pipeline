pipeline {
  agent
  {
    docker {
      image 'tarampampam/node:13-alpine'
      //args '-p 20001-20100:3000'
    }
  }
  environment {
   CI = 'false'
    npm_config_cache = 'npm-cache'
 HOME = '.'
 //  npm_config_cache = 'npm-cache'
 }
  //tools { 
    //    git 'masterGit'
  //}
  stages {
    
    stage('Install Packages') {
      steps {
        //sh 'git --version'
        echo 'brnach ...' + env.BRANCH_NAME
        // sh 'node -v'
        // sh 'npm -v'
        //sh 'npm install'
        sh 'git --version'
        f (env.BRANCH_NAME == 'master') {
            echo 'I only execute on the master branch'
        } else {
            echo 'I execute elsewhere'
        }
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
            sh 'npm run build'
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
            withAWS(region:'us-east-1',credentials:'<AWS-Production-Jenkins-Credential-ID>') {
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

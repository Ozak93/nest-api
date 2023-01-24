pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'whoami '
                sh 'npm install'
 
                sh 'npm run build'
            }
        }
        stage('Deploy') {
            steps {
            

                sh 'whoami'
                sh 'mkdir -p /var/www/devenv.digiarenas.com/apps/nest-api/'
                sh 'cp -r dist/* /var/www/devenv.digiarenas.com/apps/nest-api/'
                sh 'cd /var/www/devenv.digiarenas.com/apps/nest-api/'
            
               
              
 
            }
        }
    
    }
           post { 
        success {
            withEnv(['JENKINS_NODE_COOKIE=dontkillMe']) {
                sh 'export JENKINS_NODE_COOKIE=dontKillMe'
                sh 'export JENKINS_SERVER_COOKIE=dontKillMe'
               
                 sh 'cd /var/www/devenv.digiarenas.com/apps/nest-api/'
                sh 'sudo pm2 start main.js'
                sh 'sudo pm2 save'
              }  
        
                 
        }
    }
}
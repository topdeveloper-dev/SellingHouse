pipeline {
    nodejs 'Node 18.15.0'

    stages {
       
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        
    }
}
pipeline {
    agent any 
    tools {
        nodejs 'nodejs'
    }

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

        stage('List Folders') {
            steps {
                script {
                    // Execute the 'ls' command and capture the output
                    def folderList = sh(script: 'ls', returnStdout: true).trim()
                    echo "Folder list: ${folderList}"
                }
            }
        }

        // stage('Copy to Nginx') {
        //     steps {
        //         sh 'cp -R build'
        //     }
        // }

    }
}
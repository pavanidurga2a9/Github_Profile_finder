pipeline {
    agent any

    environment {
        
        FIREBASE_TOKEN = credentials('firebase-token')
        
        
        PATH = "C:\\Program Files\\nodejs;${env.PATH}"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
               
                bat 'if exist node_modules rmdir /s /q node_modules'
                bat 'npm install'
            }
        }

        stage('Build Project') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Deploy to Firebase') {
            steps {
                
                bat 'npx firebase-tools deploy --only hosting --token %FIREBASE_TOKEN%'
            }
        }
    }

    post {
        success {
            echo '✅ Build and Deployment SUCCESSFUL'
        }
        failure {
            echo '❌ Pipeline FAILED - check logs'
        }
    }
}

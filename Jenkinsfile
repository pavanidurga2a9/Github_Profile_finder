pipeline {
    agent any

    environment {
        // 1. Retrieve your Firebase credentials
        FIREBASE_TOKEN = credentials('firebase-token')
        
        // 2. Prepend Node.js to the environment PATH so Jenkins, npm, and npm's child scripts can find "node" and "npm"
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
                // 3. Clear existing node_modules to avoid Windows permission (EPERM) lockouts
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

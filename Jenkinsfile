pipeline {
    agent any

    environment {
        // Retrieve Firebase Deploy Token from Jenkins credentials manager
        FIREBASE_TOKEN = credentials('firebase-token')
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'npm install'
                    } else {
                        // Using the Visual Studio bundled Node path found on your Windows machine
                        bat 'set PATH="C:\\Program Files\\Microsoft Visual Studio\\2022\\Preview\\MSBuild\\Microsoft\\VisualStudio\\NodeJs";%PATH% && npm install'
                    }
                }
            }
        }

        stage('Build Project') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'npm run build'
                    } else {
                        bat 'set PATH="C:\\Program Files\\Microsoft Visual Studio\\2022\\Preview\\MSBuild\\Microsoft\\VisualStudio\\NodeJs";%PATH% && npm run build'
                    }
                }
            }
        }

        stage('Deploy to Firebase') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'npx firebase-tools deploy --only hosting --token "$FIREBASE_TOKEN"'
                    } else {
                        bat 'npx firebase-tools deploy --only hosting --token %FIREBASE_TOKEN%'
                    }
                }
            }
        }
    }

    post {
        success {
            echo 'Application built and deployed successfully!'
        }
        failure {
            echo 'Deployment Pipeline failed. Check build logs.'
        }
    }
}

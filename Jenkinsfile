// Jenkinsfile (Declarative Pipeline)
pipeline {
    agent any // Specifies that the pipeline can run on any available agent

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/rohannk01/rohanportfolio-website.git' // Replace with your repository URL
            }
        }
        stage('Build') {
            steps {
                sh 'mvn clean install' // Example for a Maven project, adjust for your build tool
            }
        }
        stage('Test') {
            steps {
                sh 'mvn test' // Example for running tests
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                // Add deployment steps here, e.g., pushing to a server, deploying to a cloud platform
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished.'
        }
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
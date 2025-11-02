pipeline {
    agent any

    environment {

        // Replace with your GitHub repository URL

        REPO_URL = 'https://github.com/rohannk01/rohanportfolio-website.git'

        // Replace with your Jenkins credential ID for GitHub

      //  CREDENTIALS_ID = 'github_token'
 
        BRANCH = 'main' // Or your target branch
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: env.BRANCH, 

                 //   credentialsId: env.CREDENTIALS_ID, 

                    url: env.REPO_URL
            }
        }

        stage('Perform Actions') {
            steps {
                script {
                    // Example: Create a new file or modify existing ones
                    sh 'echo "Hello from Jenkins Pipeline" > new_file.txt'
                    sh 'echo "Appended content" >> existing_file.txt' 
                }
            }
        }

        stage('Commit and Push Changes') {
            steps {
                script {
                    // Configure Git user for committing
                    sh 'git config user.email "jenkins@example.com"'
                    sh 'git config user.name "Jenkins Pipeline"'
                    
                    // Add changes to the staging area
                    sh 'git add .'
                    
                    // Commit the changes
                    sh 'git commit -m "Automated commit from Jenkins Pipeline"'
                    
                    // Push changes to the remote repository

                //    withCredentials([usernamePassword(credentialsId: env.CREDENTIALS_ID, passwordVariable: 'GIT_PASSWORD', usernameVariable: 'GIT_USERNAME')]) {
                  //      sh "git push https://${GIT_USERNAME}:${GIT_PASSWORD}@github.com/rohannk01/rohanportfolio-website.git HEAD:${env.BRANCH}"


		      withCredentiaals([string(credentialsId: 'token', variable:'GITHUB_TOKEN')]) {
			  sh "git push https://${GITHUB_TOKEN}@github.com/rohannk01/rohanportfolio-website.git HEAD:${env.BRANCH}"		
                    }
                }
            }
        }
    }
}
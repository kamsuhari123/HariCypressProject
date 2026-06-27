pipeline {
    agent any
    
    tools {
        nodejs 'NodeJS'
    }
    
    stages {
        
        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/kamsuhari123/HariCypressProject.git'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        
        stage('Run Cypress Tests') {
            steps {
                sh 'npx cypress run'
            }
        }
        
    }
    
    post {
        always {
            echo 'Pipeline completed!!'
        }
        success {
            echo 'All tests PASSED!!'
        }
        failure {
            echo 'Tests FAILED!!'
        }
    }
}
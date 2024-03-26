import groovy.json.JsonOutput

def COLOR_MAP = [
    SUCCESS: 'good',
    FAILURE: 'danger'
]

def getBuildUser() {
    def cause = currentBuild.causes.find { it instanceof Cause.UserIdCause }
    return cause ? cause.userId : 'Unknown'
}


pipeline {
    agent any

    environment {
        BUILD_USER = ''
    }

    parameters {
        string(name: 'SPEC', defaultValue: 'cypress/e2e/RegisterTest.cy.js', description: 'Enter the script you want to run')
        choice(name: 'BROWSER', choices: ['chrome', 'edge'], description: 'Select the browser for testing')
    }

    options {
        ansiColor('xterm')
    }

    stages {
        stage('Building stage') {
            steps {
                echo 'Building stage'
                // Add any build steps here if needed
            }
        }

        stage('Testing stage') {
            steps {
                script {
                    bat "npm install"
                    bat ".\\node_modules\\.bin\\cypress.cmd install --force"
                    bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
                }
            }
        }

        stage('Deploying') {
            steps {
                // Add steps to generate report here
                echo 'Deploying step'
            }
        }
    }

    post {
        always {
            script {
                BUILD_USER = getBuildUser()
            }

            slackSend(
                channel: '#jenkins-exemple',
                color: COLOR_MAP[currentBuild.currentResult],
                message: "*${currentBuild.currentResult}:* ${env.JOB_NAME} Build ${env.BUILD_NUMBER} by ${BUILD_USER}\nTests ${SPEC} at ${BROWSER}"
            )

            // Clean up any artifacts or temporary files if needed
            publishHTML(
                allowMissing: false,
                alwaysLinkToLastBuild: false,
                keepAll: false,
                reportDir: 'cypress\\reports',
                reportFiles: 'index.html',
                reportName: 'HTML Report',
                reportTitles: '',
                useWrapperFileDirectly: true
            )
        }
    }
}

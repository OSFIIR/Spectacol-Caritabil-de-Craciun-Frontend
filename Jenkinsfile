// GitHub Multibranch job: only main, no PR/tag discovery.
pipeline {
    agent none
    options {
        skipDefaultCheckout(true)
        disableConcurrentBuilds()
        timeout(time: 25, unit: 'MINUTES')
        buildDiscarder(logRotator(numToKeepStr: '10'))
    }
    parameters {
        booleanParam(name: 'DEPLOY', defaultValue: false, description: 'Publica build-ul verificat pe server')
    }
    stages {
        stage('Main only') {
            steps {
                script {
                    if (env.BRANCH_NAME != 'main' || env.CHANGE_ID) {
                        error('Acest agent poate executa numai job-ul main de incredere.')
                    }
                }
            }
        }
        stage('Build and deploy') {
            agent { label 'spectacol-trusted' }
            stages {
                stage('Checkout') {
                    steps {
                        checkout scm
                        script {
                            env.APP_VERSION = sh(script: '''
                                printf 'ci-%s-%s-%s' "$(printf '%s' "$JOB_NAME" | sha256sum | cut -c1-8)" "$BUILD_NUMBER" "$(git rev-parse --short=12 HEAD)"
                            ''', returnStdout: true).trim()
                        }
                        sh 'mkdir -p reports; rm -f reports/*'
                    }
                }
                stage('Validate and build') {
                    steps {
                        sh '''
                            docker compose config --quiet
                            docker compose build --pull
                            printf 'APP_VERSION=%s\\n' "$APP_VERSION" > reports/release.txt
                            docker image inspect "spectacol-craciun:$APP_VERSION" --format '{{.Id}}' > reports/image-id.txt
                            docker compose config > reports/compose-release.yaml
                        '''
                    }
                }
                stage('HTTP checks') {
                    steps {
                        sh '''
                            docker run -d --name "spectacol-check-$APP_VERSION" "spectacol-craciun:$APP_VERSION"
                            ready=0
                            for attempt in $(seq 1 30); do
                                if docker exec "spectacol-check-$APP_VERSION" wget -q -O /dev/null http://127.0.0.1/; then
                                    ready=1
                                    break
                                fi
                                sleep 2
                            done
                            [ "$ready" = 1 ]
                            for route in / /artists /sponsors /team /donate /manifest.json; do
                                docker exec "spectacol-check-$APP_VERSION" wget -q -O /dev/null "http://127.0.0.1$route"
                            done
                            docker exec "spectacol-check-$APP_VERSION" wget -q -O - http://127.0.0.1/ > reports/index.html
                            asset=$(grep -o '/static/js/[^"]*\\.js' reports/index.html | head -n 1)
                            [ -n "$asset" ]
                            docker exec "spectacol-check-$APP_VERSION" wget -S -O /dev/null "http://127.0.0.1$asset" > reports/asset.txt 2>&1
                            grep -Ei 'Content-Type: (application|text)/javascript' reports/asset.txt
                            for route in /static/missing.js /api/missing; do
                                if docker exec "spectacol-check-$APP_VERSION" wget -S -O /dev/null "http://127.0.0.1$route" > reports/not-found.txt 2>&1; then
                                    echo "Expected 404 for $route"
                                    exit 1
                                fi
                                grep '404 Not Found' reports/not-found.txt
                            done
                            echo 'PASS: pages, JS asset, MIME type, missing asset/API 404' > reports/http-checks.txt
                        '''
                    }
                }
                stage('Deploy') {
                    when { expression { params.DEPLOY && env.BRANCH_NAME == 'main' && !env.CHANGE_ID } }
                    steps {
                        sh '''
                            old=$(docker compose ps -q web)
                            if [ -n "$old" ]; then
                                docker inspect "$old" --format '{{.Config.Image}}' > reports/previous-image.txt
                            fi
                            docker compose up -d --no-build --pull never --wait --wait-timeout 120
                            curl --fail --silent --show-error --max-time 10 http://127.0.0.1:18083/ > /dev/null
                            curl --fail --silent --show-error --max-time 10 http://127.0.0.1:18083/artists > /dev/null
                        '''
                    }
                }
            }
            post {
                always {
                    sh '''
                        if [ -n "${APP_VERSION:-}" ] && docker container inspect "spectacol-check-$APP_VERSION" >/dev/null 2>&1; then
                            docker logs "spectacol-check-$APP_VERSION" > reports/container.log 2>&1 || true
                            docker rm -f "spectacol-check-$APP_VERSION"
                        fi
                    '''
                    archiveArtifacts artifacts: 'reports/*', allowEmptyArchive: true
                }
            }
        }
    }
}

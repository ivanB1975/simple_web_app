pipeline {
  agent {
    label 'docker'
  }
  options {
    disableConcurrentBuilds()
  }
  stages {
    stage('Build image') {
      steps {
          script {
            def customImage = docker.build("ivanb1975/simple-web-app:latest")
            docker.withRegistry('https://registry.hub.docker.com', 'docker_hub_id') {
              customImage.push()
            }
          }
      }
    }

      stage('Deploy Pod')
        {
         steps{
          sshagent(['ssh_user_id'])
          {
           sh 'scp -r -o StrictHostKeyChecking=no deployment.yml ivan@192.168.0.6:/home/ivan/Documents/test_simple_app'
           sh 'scp -r -o StrictHostKeyChecking=no service.yml ivan@192.168.0.6:/home/ivan/Documents/test_simple_app'
           sh 'scp -r -o StrictHostKeyChecking=no ingress.yml ivan@192.168.0.6:/home/ivan/Documents/test_simple_app'

           script{

             sh 'ssh ivan@192.168.0.6 kubectl apply -f /home/ivan/Documents/test_simple_app/deployment.yml --kubeconfig=/home/ivan/.kube/config'
             sh 'ssh ivan@192.168.0.6 kubectl apply -f /home/ivan/Documents/test_simple_app/service.yml --kubeconfig=/home/ivan/.kube/config'
             sh 'ssh ivan@192.168.0.6 kubectl apply -f /home/ivan/Documents/test_simple_app/ingress.yml --kubeconfig=/home/ivan/.kube/config'

           }
          }
         }
        }

  }


}
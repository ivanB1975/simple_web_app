# simple_web_app
simple web app in node.js to retrieve cryptocurrency value in USD

## Run it locally
Execute the command:
    npm install
    node server.js

## Run it in Docker
Execute the commands:
    docker build . -t simple_web_app
    docker run -p 3000:3000 simple_web_app
Visit the app running at http://localhost:3000

## Run it in Minikube
Execute the commands:
    kubectl apply -f deployment.yml
    kubectl apply -f service.yml
    kubectl apply -f ingress.yml
This will expose the app under the complete hostname: https://simple-web-app.com/
To be able to see locally add this line to /etc/hosts
    your_machine_ip  simple-web-app.com

## Use Jenkins to deploy to kubernetes
Install Jenkins and create a new project adding the git address of the repo.

Create 2 credentials in Jenkins:
* the first for accessing your dockerhub space
* the second to access using ssh your minikube machine

If your jenkins runs locally it is not possible to setup a webhook in github so everytime you push to the repo,
you have to manually scan the repo from jenkins. This then will trigger the deployment.
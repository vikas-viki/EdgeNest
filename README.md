# EdgeNest

## flow V1
- User makes request to the api server with github URL
  - sends a unique projectID and projectURL specfic to user project
  - api server creates a TASK on ECS 
    - ECS uses the docker image (built from ./build-server) from ECR
    - builds the projects
    - along with building, it produces(pushes/sends) build logs using Kafka
    - pushes /dist folder contents to S3 (with unique slug)
- once user makes call to api server with github URL
  - he/she's auto connected to websocket server 
  - it starts consuming(listening) to the messages produced(sent) by kafka in build step and are shown to the user.
- once build completes, user can visit to the URL 
  - the URL is a sub-domain of the proxy server (GET /).
  - it proxies the requests to S3 as user directly and serves the html file.
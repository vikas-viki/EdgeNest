FROM ubuntu:noble

RUN apt-get update 
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_20.x | bash -
RUN apt-get upgrade -y
RUN apt-get install -y nodejs

RUN apt-get install git -y

WORKDIR /builder

COPY package.json package.json
RUN npm install

COPY main.sh main.sh
COPY script.js script.js 

RUN chmod +x main.sh
RUN chmod +x script.js

ENTRYPOINT [ "/builder/main.sh" ]
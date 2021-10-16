FROM mhart/alpine-node:14

RUN true \
    && sudo apt update \
    && sudo apt upgrade -y \

## Copy the files into the app directory
COPY . /app
RUN true \ 
    && npm install \ 

## SSL Certificate

COPY .env.example .env

EXPOSE 443 
CMD npm start
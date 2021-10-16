FROM mhart/alpine-node:14

RUN true \
    && sudo apt update \
    && sudo apt upgrade -y \

## RUN git clone
## OR just copy the files

COPY . /app
RUN true \ 
    && npm install \ 

## SSL Certificate

COPY .env.example .env

EXPOSE 443 
CMD npm start
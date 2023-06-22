FROM node:lts-alpine

RUN mkdir -p /app-ecomm && chown -R node:node /app-ecomm

WORKDIR /app-ecomm

COPY . .



ENTRYPOINT npm start
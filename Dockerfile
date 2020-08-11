FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

ARG NPM_REGISTRY
RUN npm config set registry ${NPM_REGISTRY:-https://registry.npmjs.org/}
RUN npm i

COPY . .

RUN rm -rf build/*
ENV NODE_ENV=production
CMD [ "npm", "run", "build-docker" ]

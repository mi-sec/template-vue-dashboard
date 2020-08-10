FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

ARG NPM_REGISTRY
RUN npm config set registry ${NPM_REGISTRY:-https://registry.npmjs.org/}
RUN npm i

COPY . .

CMD npm run build

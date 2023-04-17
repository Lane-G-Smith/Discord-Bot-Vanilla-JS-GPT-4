FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install

COPY . .

RUN npx tsc

CMD [ "node", "dist/index.js" ]
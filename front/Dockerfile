FROM node:16.13.0-alpine

WORKDIR /home/app

COPY package*.json .

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["sh", "-c", "yarn install && yarn dev"]
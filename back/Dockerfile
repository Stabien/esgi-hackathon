FROM node:16.13.0-alpine

WORKDIR /home/app

COPY . .

RUN npm install -g nodemon ts-node && npm install

EXPOSE 4000
CMD [ "npm", "run", "dev" ]
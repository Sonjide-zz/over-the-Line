FROM node:alpine3.12

RUN mkdir -p /app

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3001

CMD "npm" "start"
FROM node:24-alpine

RUN apk add --no-cache git

WORKDIR /app

COPY package*.json .

RUN npm i

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]

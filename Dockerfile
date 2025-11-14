FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm cache clean --force && npm install && apk add --no-cache bash

COPY . .

EXPOSE 5174

CMD ["npm", "run", "dev", "--", "--host", "--port", "3000"]
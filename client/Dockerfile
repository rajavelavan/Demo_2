# stage 1: build the application
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
CMD [ "npm", "start" ]
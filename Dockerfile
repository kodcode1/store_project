FROM node:lts-slim AS build
WORKDIR /app

COPY package*.json tsconfig.json ./
RUN npm install

COPY . .
RUN npx tsc

ENV PORT=8181
EXPOSE 8181
CMD [ "node", "./dist/server.js" ]
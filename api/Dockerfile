FROM node:22-alpine

WORKDIR /app
COPY package.json ./package.json
COPY package-lock.json ./package-lock.json
RUN npm ci --ignore-scripts

COPY index.js ./index.js
CMD ["npm", "start"]

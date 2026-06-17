FROM node:22-alpine

WORKDIR /app
COPY tsconfig.json ./tsconfig.json
COPY package.json ./package.json
COPY package-lock.json ./package-lock.json
RUN npm ci

COPY bin ./bin
COPY index.html ./index.html
COPY vite.config.js ./vite.config.js

CMD ["npm", "run", "dev"]

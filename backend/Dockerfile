FROM node:22-bullseye

WORKDIR /usr/src/app

COPY package*.json ./

# Optional: Legacy OpenSSL mode
ENV NODE_OPTIONS=--openssl-legacy-provider

RUN npm install

COPY . .

EXPOSE 5001

CMD ["npm", "run", "dev"]

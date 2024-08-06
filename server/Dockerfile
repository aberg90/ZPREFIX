FROM node:alpine

WORKDIR /src

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 8080

RUN addgroup -S app && adduser -S app -G app
USER app

CMD ["npm", "run", "dev"]
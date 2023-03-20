FROM node:16.14.0-alpine3.14

WORKDIR /app

COPY package.json .

RUN npm i

COPY . .

EXPOSE 5173

CMD npm run dev
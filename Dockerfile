FROM node:18

WORKDIR /src/app

COPY . .

RUN npm install --production

RUN npm run build

CMD ["npm", "start"]


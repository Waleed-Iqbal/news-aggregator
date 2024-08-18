# I cannot install Docker on my machine
# so I don't know if this will run or not

FROM node:18

WORKDIR /app

COPY package.json .

RUN npm install --production

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]

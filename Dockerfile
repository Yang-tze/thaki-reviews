FROM node:8.11.3-alpine

RUN mkdir -p /review-module

WORKDIR /review-module

COPY . /review-module

RUN npm install

EXPOSE 3004

CMD ["npm", "run", "serve"]

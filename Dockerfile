FROM node:alpine-22 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
RUN ls


FROM nginx:alpine

COPY --from=build ./app/dist /usr/share/ngix/html/

EXPOSE 80

CMD ["nginx","-g","daemon off;"]

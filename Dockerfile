FROM node:22-alpine AS build

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

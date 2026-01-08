FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN ls
RUN npm install
COPY . .
RUN ls
RUN npm run build
RUN ls


FROM nginx:alpine

COPY --from=build ./app/dist /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx","-g","daemon off;"]

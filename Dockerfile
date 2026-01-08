FROM node:22-alpine AS build
WORKDIR /app
# cache package if package 
COPY package*.json  ./
RUN npm install
COPY . .
RUN npm run build
RUN ls


FROM nginx:alpine

COPY --from=build ./app/dist /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx","-g","daemon off;"]

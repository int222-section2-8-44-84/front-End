FROM node:14.16-alpine3.10 as build
WORKDIR /frontend/src
COPY ./package.json /frontend/src/package.json
RUN npm install
COPY . /frontend/src
RUN npm run build
 
FROM nginx:alpine as prod
COPY default.conf /etc/nginx/conf.d/default.conf
WORKDIR /usr/share/nginx/html
COPY --from=build /frontend/src/dist .
EXPOSE 8080
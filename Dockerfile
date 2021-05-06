FROM node:15.14.0-alpine AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --prod

FROM nginx:alpine AS publish
COPY --from=build /usr/src/app/dist/web-chat /usr/share/nginx/html

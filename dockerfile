# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:18.18.2-slim as build-stage
WORKDIR /app
COPY ./ /app/
RUN npm i
RUN npm run build:dll
# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:latest
COPY --from=build-stage /app/build/ /usr/share/nginx/html
# Copy the default nginx.conf provided by tiangolo/node-frontend
COPY nginx.conf /etc/nginx/conf.d/default.conf
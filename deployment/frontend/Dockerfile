# Build Stage
FROM node:23-alpine AS build

ARG VITE_SERVER_URL
ARG VITE_SITE_KEY

WORKDIR /app
COPY client/package*.json ./
RUN npm install --force

COPY client/. .

ENV VITE_SERVER_URL=$VITE_SERVER_URL
ENV VITE_SITE_KEY=$VITE_SITE_KEY	

RUN npm run build

# Production Stage
FROM nginx:stable-alpine AS production
COPY --from=build /app/dist/ /usr/share/nginx/html
COPY deployment/frontend/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

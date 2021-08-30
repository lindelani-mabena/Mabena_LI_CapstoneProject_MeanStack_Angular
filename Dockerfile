FROM node:14.17.5-alpine AS builder

WORKDIR /app

COPY . .

RUN npm install && npm run build


FROM nginx:1.21-alpine


WORKDIR /usr/share/nginx/html

RUN rm -rf ./*


COPY --from=builder /app/dist/Mabena-LI-CapStoneProject-FrontEnd .

RUN chown nginx:nginx /usr/share/nginx/html/*

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
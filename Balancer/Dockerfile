FROM node:10-alpine as builder

WORKDIR /usr/src/app
COPY package*.json /usr/src/app/

RUN npm set progress=false && npm config set depth 0 && npm cache clean --force

RUN npm install 

COPY . /usr/src/app/

Run npm install -g @angular/cli
RUN ng build --prod

FROM nginx:mainline

RUN apt-get update && \
    apt-get install -y --no-install-recommends

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /usr/src/app/dist/qurba-task /usr/share/nginx/html

EXPOSE 808
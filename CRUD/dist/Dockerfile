# Get Nodejs image from docker hub
FROM node:10-alpine

# Create app directory
WORKDIR /usr/src/app
COPY package*.json /usr/src/app/

# Install app dependencies
RUN npm install

# Bundle app source
COPY . /usr/src/app/

# Expose port 3002
EXPOSE 3002

# start app
CMD [ "npm", "start" ]
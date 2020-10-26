FROM node:12.19.0-alpine

# Install some dependencies
RUN npm install -g jest

EXPOSE 9090

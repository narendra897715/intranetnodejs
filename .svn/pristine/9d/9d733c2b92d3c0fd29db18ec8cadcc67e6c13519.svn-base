FROM node:8
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app/
COPY package.json /usr/src/app/
RUN npm install
RUN npm install pm2 -g
COPY /src /usr/src/app/
EXPOSE 3008
CMD [ "pm2-runtime", "npm", "--", "start"]
FROM node:latest
LABEL maintainer = "c***@icloud.com"
ENV PORT = 3000
EXPOSE 3000
RUN mkdir /opt/app
COPY ./* /opt/app/
COPY ./src /opt/app/src
COPY ./public /opt/app/public
WORKDIR  /opt/app
RUN npm install
CMD ["npm",  "start"]

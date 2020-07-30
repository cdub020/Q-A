FROM openjdk:14.0.2-jdk-buster
EXPOSE 8080
RUN apt-get install unzip && \
    wget https://services.gradle.org/distributions/gradle-6.5.1-all.zip -P tmp/ && \
    unzip -d /opt/gradle /tmp/gradle-*.zip && \ 
    export PATH=$PATH:/opt/gradle/gradle-6.5.1/bin && \
    mkdir /opt/app
COPY . /opt/app/
WORKDIR /opt/app
RUN chmod +x ./gradlew
CMD ["./gradlew", "bootRun"]

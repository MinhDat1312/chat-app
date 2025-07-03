FROM gradle:8.14.2-jdk21 AS build
WORKDIR /app
COPY build.gradle.kts settings.gradle.kts ./
RUN gradle --no-daemon dependencies
COPY src ./src
RUN gradle clean build -x test --no-daemon

FROM openjdk:21-jdk-slim
WORKDIR /app
COPY --from=build /app/build/libs/chat-app-backend-0.0.1-SNAPSHOT.jar chat-app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "chat-app.jar"]
# Step 1: Build with Maven
FROM maven:3.9.6-eclipse-temurin-21 AS builder
WORKDIR /app

COPY api/pom.xml ./
COPY api/src ./src
RUN mvn clean package -DskipTests

# Step 2: Run with JDK
FROM eclipse-temurin:21-jdk
WORKDIR /app

COPY --from=builder /app/target/*.jar app.jar
EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]

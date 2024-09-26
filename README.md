# Central Perk Reward System

## Overview

The Central Perk Reward System is a customer loyalty program designed for the Central Perk coffee shop in New York City. This system allows customers to earn points for their purchases, which can be redeemed for free coffee, snacks, or merchandise. The application includes a dashboard for the shop owner to manage the reward system and view customer engagement metrics.

## Architecture and Design Decisions

### Backend

- **Language**: Java
- **Framework**: Spring Boot
- **Database**: SQLite

The backend is built using Spring Boot, providing a robust and scalable foundation for our RESTful API. We chose SQLite as our database for its simplicity, portability, and ease of setup, making it ideal for small to medium-sized applications like this reward system.

### Frontend

- **Framework**: React.js
- **Language**: TypeScript
- **State Management**: Redux Toolkit
- **UI Library**: Material-UI
- **Testing**: Cypress for unit tests

The frontend is a single-page application built with React and TypeScript, ensuring type safety and improved developer experience. We use Redux Toolkit for efficient state management and Material-UI for a consistent and responsive design.

## Data Model

![Data Model Diagram](./images/data.png)

This diagram illustrates the relationships between customers, transactions, and rewards in our system.

## Use Case Diagram

![Use Case Diagram](./images/usecase.png)

This diagram shows the main actions that can be performed by customers and the shop owner (Gunther) in the reward system.

## Class Diagram

![Class Diagram](./images/class.png)

The class diagram provides an overview of the main classes in our system and their relationships.

## Sequence Diagrams

### Making a Purchase

![Sequence Diagram - Make Purchase](./images/seq1.png)

This diagram illustrates the process of a customer making a purchase and earning points.

## Running the Application

### Prerequisites

- Java JDK 11 or higher
- Node.js 14 or higher
- SQLite 3

### Backend Setup

1. Clone the repository:

   ```
   git clone https://github.com/proxy-o/reward.git
   cd reward/backend
   ```

2. SQLite database setup:

   - The SQLite database file will be automatically created in the project directory when you run the application for the first time.
   - You can configure the database path in `src/main/resources/application.properties`:
     ```
     spring.datasource.url=jdbc:sqlite:central_perk.db
     spring.datasource.driver-class-name=org.sqlite.JDBC
     ```

3. Run the Spring Boot application:
   ```
   ./mvnw spring-boot:run
   ```

The backend will start on `http://localhost:8080`.

### Frontend Setup

1. Navigate to the frontend directory:

   ```
   cd ../frontend
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

The frontend will be available at `http://localhost:3000`.

## API Documentation

API documentation is available at `http://localhost:8080/swagger-ui.html` when the backend is running.

## 1. README.md

### Project Title and Description

- **Title**: StudySage
- **Description**: StudySage is a flashcard management application that leverages AI for dynamic flashcard generation. Users can create, update, and delete flashcards, with AI-assisted suggestions to improve learning efficiency.

### Getting Started

- **Prerequisites**: Node.js (version 14.x or higher), npm (version 6.x or higher), MongoDB, dotenv file configuration.
- **Installation**:
    1. Clone the repository: `git clone <repo_url>`
    2. Install dependencies: `npm install`
    3. Configure environment variables in a `.env` file.
    4. Start the server: `npm start`

### Technologies Used

- **Backend**: Node.js, Express.js, MongoDB
- **AI Integration**: OpenAI API for generating flashcard content.
- **Security**: JWT for authentication, bcrypt for password hashing.

### Features

### Feature Summary

StudySage provides a range of features designed to help users effectively manage and enhance their learning experience. Key features include secure authentication, AI-powered content creation, and personalized user management tools.

- User registration and login with JWT-based authentication.
- AI-generated content for flashcards.
- CRUD operations for flashcards.
- User profiles for a personalized experience, allowing users to manage study preferences and view progress.

### Usage

### Account Management

- **Register**: Create a new account using an email and password.
- **Login**: Obtain a JWT for further interactions.

### Flashcard Management

- **Flashcards**: Use the `/flashcards` endpoint for creating, retrieving, updating, and deleting flashcards.

### Configuration

- **Environment Variables**:
    - `PORT`: The port on which the server runs.
    - `MONGO_URI`: MongoDB connection string.
    - `JWT_SECRET`: Secret for JWT token generation.
    - `OPENAI_API_KEY`: API key for OpenAI.

### API Documentation

- **Endpoints**:
    - `/register`: Register a new user.
    - `/login`: Authenticate user and return JWT.
    - `/flashcards`: CRUD operations for flashcards.
- **Requests and Responses**: Details about required fields and response formats.

### Project Structure

- **models/**: User and Flashcard schemas.
- **routes/**: Authentication and flashcard routes.
- **controllers/**: Logic for handling requests.
- **middleware/**: Auth middleware for route protection.

### Testing

- Use `npm test` to run unit and integration tests.

### Contributing

- Fork the repository and create pull requests for contributing.

### License

- Distributed under the MIT License.

### Acknowledgments

- Special thanks to OpenAI for providing AI content generation capabilities.

## 2. Architecture Document

### Overview

StudySage is built with a client-server architecture. The backend handles user management, authentication, flashcard CRUD operations, and AI-based content generation.

### Components

- **Backend**: Node.js with Express.js as the framework.
- **Database**: MongoDB for storing user and flashcard information.
- **AI Service**: OpenAI API to generate suggested flashcard content.

### Data Flow

- Users interact with the API via HTTP requests. Authentication is handled with JWT tokens.
- Flashcard data is stored and retrieved from MongoDB.

### Technology Choices

- **Node.js and Express**: Used for server-side logic and handling HTTP requests.
- **MongoDB**: Chosen for flexibility and ease of scaling as the data grows.
- **OpenAI API**: To enhance user experience with AI-generated content.

### Diagrams

- **ER Diagram**: Illustrates relationships between User and Flashcard entities. The diagram can be found in the `docs/diagrams` folder.
- **System Architecture**: Shows interaction between the client, server, database, and AI API. The diagram can be found in the `docs/diagrams` folder.

## 3. Project Report

### Introduction

The purpose of StudySage is to assist students in learning more effectively by generating useful flashcards. The application provides an AI-assisted study experience to make content creation easier.

### Learning Objectives

- Develop a full-stack web application using Node.js, Express, and MongoDB.
- Implement secure user authentication with JWT.
- Integrate OpenAI API for AI-assisted features.

### Development Approach

- **Methodology**: Agile development with Trello for task management.
- **Milestones**:
    - Week 1: Set up project structure and implement user authentication.
    - Week 2: Complete CRUD operations for flashcards and integrate AI.

### Challenges Faced

- **AI Integration**: Difficulty in configuring API retries and handling failures. This was resolved by implementing retry logic with exponential backoff to ensure that temporary network issues could be handled more gracefully.
- **Data Security**: Ensuring user data remains protected, including proper JWT handling. We addressed this by using strong JWT secrets, limiting token lifespan, and implementing secure password hashing using bcrypt.

### Lessons Learned

- Better understanding of API rate limiting and retry logic.
- Gained experience in handling real-world authentication scenarios.

### Future Enhancements

1. **Adding user analytics**: Track study progress and provide insights on topics needing improvement, making the application more engaging and beneficial for users.
2. **Implementing spaced repetition algorithms**: Enhance learning efficiency by leveraging scientifically proven study techniques.
3. **Adding collaborative features**: Allow users to share flashcards, fostering a community-based learning experience.

## 4. API Documentation

### Available Endpoints

- **POST /register**: Register a new user.
- **POST /login**: Authenticate user and return JWT.
- **GET /flashcards**: Retrieve all flashcards for the authenticated user.
- **POST /flashcards**: Create a new flashcard.
- **PUT /flashcards/:id**: Update a flashcard by ID.
- **DELETE /flashcards/:id**: Delete a flashcard by ID.

### Request/Response Examples

- **POST /register**
    - **Request**: `{ "username": "john", "email": "john@example.com", "password": "password123" }`
    - **Response**: `{ "_id": "12345", "username": "john", "token": "JWT_TOKEN" }`

### Authentication

- **JWT Tokens**: All requests to flashcard routes require a valid JWT token in the `Authorization` header.

## 5. Deployment Instructions

### Hosting Platform

- Deployed on **Heroku** for ease of scaling and managing the environment.

### Deployment Steps

1. **Push Code to GitHub**: Ensure all changes are committed and pushed.
2. **Test Deployment Locally**: Run the application locally to verify there are no issues before deploying to production. Be sure to run all tests locally to catch any potential issues before pushing to production.
3. **Connect to Heroku**: Use Heroku CLI to link your GitHub repository.
4. **Set Environment Variables**: Use Heroku dashboard to set environment variables like `MONGO_URI`, `JWT_SECRET`, and `OPENAI_API_KEY`.

### Environment Variables

- Ensure that all sensitive data like API keys and database URIs are set in the Heroku dashboard to keep them secure.

## 6. Testing Documentation

### Test Cases

- **User Registration**: Verify that users can register with valid credentials.
- **Login**: Ensure that users receive a JWT upon successful login.
- **Flashcard Operations**: Check CRUD operations for flashcards (create, read, update, delete).

### How to Run Tests

- Use `npm test` to execute test scripts. All tests are located in the `tests/` directory and use **Jest** for unit testing.

## 7. Presentation Slide Deck

### Project Summary

- **Title**: StudySage - AI-Assisted Flashcard Management
- **Team Members**: Jax Baiya

### Architecture

- Visual representation of the backend, database, and AI integration.

### Features and Tech Stack

- **Features**: Secure authentication, flashcard management, AI-generated content.
- **Tech Stack**: Node.js, Express, MongoDB, OpenAI API.

### Challenges and Learnings

- Integration with AI services, managing tokens, and retry logic.

### Demo Screenshots

- Screenshots illustrating the registration process, login, and flashcard creation.

### Future Scope

- Collaborative flashcard creation and sharing among users.

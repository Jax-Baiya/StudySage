# StudySage Architecture

This document provides an in-depth look at the architecture of StudySage, detailing the core design, data flow, and interactions between frontend and backend components.

## Table of Contents

1. [System Overview](#system-overview)
2. [Frontend Architecture](#frontend-architecture)
3. [Backend Architecture](#backend-architecture)
4. [Data Models](#data-models)
5. [Data Flow](#data-flow)
6. [Third-Party Integrations](#third-party-integrations)

---

## 1. System Overview

StudySage is a full-stack web application designed to aid users in studying through automated flashcard generation. The application comprises a **React frontend** and a **Node.js/Express backend**, with **MongoDB** as the primary data storage solution.

## 2. Frontend Architecture

The frontend is built with **React**, structured to ensure modularity and maintainability.

- **Components**:
  - **Authentication**: Components for user login and registration.
  - **Dashboard**: Main user interface for managing flashcards.
  - **Flashcard Generation**: User input is processed by an AI service to create flashcards.
  - **Theme Toggle**: Provides a light and dark theme option using React context.

- **State Management**:
  - Utilizes **React Context API** for global state, particularly for theme settings and user authentication status.

- **Routing**:
  - **React Router** is used for navigation, enabling seamless transitions between the dashboard, flashcard creation, and settings pages.

---

## 3. Backend Architecture

The backend is developed using **Node.js** with **Express** for API routing. The backend’s responsibilities include authentication, flashcard management, and integration with an AI service for flashcard generation.

- **Structure**:
  - **Controllers**: Handle request logic, processing inputs, and returning responses.
  - **Routes**: Define API endpoints for flashcard management, authentication, and AI services.
  - **Models**: MongoDB models for User and Flashcard.
  - **Middleware**: Includes authentication middleware using JSON Web Tokens (JWT) to verify user sessions.

- **Authentication**:
  - Managed using **JWT**. Tokens are issued upon login, and middleware validates tokens for protected routes.

- **AI Integration**:
  - A dedicated AI service, `aiService.js`, handles the generation of flashcards based on user input.

---

## 4. Data Models

StudySage uses MongoDB for data storage, with two primary collections:

1. **User Model**:
   - Stores user information, including `username`, `email`, `passwordHash`, and other profile details.
   
   ```javascript
   {
     username: String,
     email: String,
     passwordHash: String
   }
   ```

2. **Flashcard Model**:
   - Each flashcard contains the `title`, `content`, and a reference to the `userId` that owns it.

   ```javascript
   {
     title: String,
     content: String,
     userId: ObjectId
   }
   ```

---

## 5. Data Flow

1. **User Registration & Login**:
   - Users register or log in, receiving a JWT upon successful authentication.
   - The JWT is stored in the client and used to access protected routes.

2. **Flashcard Generation**:
   - Users input content for flashcard generation, which is sent to the backend.
   - The backend processes the input, invokes the AI service, and returns generated flashcards to the frontend.

3. **Flashcard Management**:
   - Users can view, edit, or delete their flashcards.
   - API requests for these actions are handled by the backend, with the frontend displaying updates in real-time.

---

## 6. Third-Party Integrations

- **AI Service**: The `aiService.js` utilizes an AI model to generate flashcards. This service can be easily adapted for various language models.
- **Material UI**: Used in the frontend for pre-styled components, enhancing the application's visual appeal and consistency.

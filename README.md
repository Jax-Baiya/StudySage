# StudySage

StudySage is an innovative educational tool designed to simplify studying through AI-powered flashcard generation. Users can create, view, and organize flashcards with ease, utilizing a responsive web application with a customizable theme.

## Project Overview

StudySage provides students and self-learners with:
- AI-generated flashcards based on user input.
- A clean and responsive interface with dark mode support.
- Secure user authentication for personalized flashcard management.

## Table of Contents

1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Project Structure](#project-structure)
6. [License](#license)

## Features

- **Flashcard Generation**: Automatically create flashcards from user-provided text using AI.
- **Dark Mode**: Toggle between light and dark modes for comfortable viewing.
- **User Authentication**: Secure login and registration to save and manage personal flashcards.
- **Flashcard Management**: View, edit, and delete flashcards within a user-friendly dashboard.

## Tech Stack

### Frontend
- **React**: For building an interactive user interface.
- **Material UI**: Component library for styling.
- **React Router**: Manages page navigation within the application.

### Backend
- **Node.js**: Server environment to handle backend logic.
- **Express**: Framework for building API endpoints.
- **MongoDB**: Database for storing user and flashcard data.
- **JWT**: Manages user authentication securely.

---

## Installation

### Prerequisites
- Node.js (v20 or higher)
- MongoDB database connection
- Git

### Clone the Repository

```bash
git clone https://github.com/Jax-Baiya/StudySage.git
cd StudySage
```

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables in a `.env` file:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```
4. Start the backend server:
   ```bash
   npm start
   ```
   The server will run at `http://localhost:5000`.

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend server:
   ```bash
   npm start
   ```
   The application will open at `http://localhost:3000`.

---

## Usage

1. **Register/Login**: Create an account or log in to start generating and managing flashcards.
2. **Generate Flashcards**: Use the AI-powered flashcard generator from the dashboard.
3. **View/Edit Flashcards**: Access created flashcards, with options to edit or delete them.
4. **Toggle Theme**: Switch between light and dark modes via the settings menu.

---

## Project Structure

```
StudySage
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── services
│   └── server.js
├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── hooks
│   │   └── App.js
└── README.md
```

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

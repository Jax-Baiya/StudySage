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

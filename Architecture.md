## Architecture Document

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
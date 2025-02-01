# cathet.io API

cathet.io API is the backend for the cathet.io application. This repository contains all the code to manage data and logic through an API. This API serves to provide services to the frontend of the application and allows interaction with the database.

## Features

- User management (Registration, Login, and Profile)
- Task CRUD (Create, Read, Update, Delete)
- Authentication and authorization with JWT
- Database integration

## Technologies

- Node.js
- Express.js
- MongoDB (or other databases as needed)
- JWT (JSON Web Tokens) for authentication
- dotenv for configuration management

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/username/cathet.io-api.git
   cd cathet.io-api
2. Install dependencies:
   ```npm install``` 
4. Create a `.env` file based on `.env.local` and configure the database and port settings.
5. Run the server:
   ```npm start``` 

## Endpoints

- `POST /api/register` - Register a new user
- `POST /api/login` - Log in as a user
- `GET /tasks` - Get all tasks
- `POST /tasks` - Add a new task
- `PUT /tasks/:id` - Update a task
- `DELETE /tasks/:id` - Delete a task

## Directory

- `src/` - Main directory for source code
  - `config/` - Configuration files
  - `controllers/` - API route controllers
  - `models/` - Database models
  - `routes/` - API route definitions

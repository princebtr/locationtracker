# Location Tracker Backend API Documentation

## Introduction
This is the backend API for the Location Tracker project. It provides endpoints for registering users, authenticating users through login, and managing user location data.

## Installation
1. Clone the repository.
2. Install dependencies using `npm install`.

## Running the Server
To start the server, run `node app.js` in the terminal.

# Deployment
The server has been deployed on Render and can be accessed at https://locationtracker-server.onrender.com.

`Deployment made from the fork https://github.com/Mubarak1A/locationtracker not from this original repository.`

## API Endpoints

### 1. Register User
- **URL:** `/register`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- **Description:** Registers a new user with the provided email and password.
- **Response:**
  - Success: `User Registered Successfully!`
  - Error: `Error registering user` if registration fails.

### 2. User Login
- **URL:** `/login`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- **Description:** Logs in a user with the provided email and password.
- **Response:**
  - Success: User object if login successful.
  - Error:
    - `No user found with this email` if the email does not exist.
    - `Incorrect password` if the password is incorrect.
    - `Error logging in` if an error occurs during login.

### 3. Add User Location
- **URL:** `/user/add_location`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "userId": "user_id",
    "latitude": 123.456,
    "longitude": 78.910
  }
  ```
- **Description:** Adds a new location for the user with the specified user ID.
- **Response:**
  - Success: `Location saved to history`.
  - Error: `{ "error": "error_message" }` if an error occurs.

### 4. Get User Locations
- **URL:** `/user/locations`
- **Method:** `GET`
- **Query Parameters:**
  - `userId`: User ID for which to retrieve location history.
- **Description:** Retrieves the location history for the user with the specified user ID.
- **Response:**
  - Success:
    - Array of location objects if location history exists.
    - `No previous location history for user` if no history exists.
  - Error: `{ "error": "error_message" }` if an error occurs.

## Technologies Used
- Node.js
- Express.js
- MongoDB
- bcryptjs

## Contributors
- [Mubarak Adesina](https://github.com/Mubarak1A).

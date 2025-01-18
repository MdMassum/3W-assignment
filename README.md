# 3W-Assignment Task Backend

This is the backend implementation for a system that allows users to submit their name, social media handle, and upload multiple images. The submitted data is stored in a database and can be viewed by administrators via a dashboard. Images are stored in Cloudinary.

---

## Directory Structure

```
project/
├── src/
│   ├── config/
│   │   ├── cloudinary.js
│   │   ├── db.js
│   ├── controllers/
│   │   ├── adminController.js
│   │   ├── userController.js
│   ├── middleware/
│   │   ├── auth.js
│   │   ├── fileUpload.js
│   ├── models/
│   │   ├── Admin.js
│   │   ├── User.js
│   ├── routes/
│   │   ├── adminRoutes.js
│   │   ├── userRoutes.js
│   ├── utils/
│   │   ├── jwtToken.js
│   ├── app.js
├── .env
├── package.json
├── README.md
```

---

## Features

- **User Submission:**
  - Users can submit their name, social media handle, and upload multiple images.
  - Images are optional.

- **Admin Dashboard:**
  - Fetch and display user submissions, including names, social media handles, and uploaded images.

- **Image Storage:**
  - Images are stored in [Cloudinary](https://cloudinary.com/).

- **Authentication:**
  - Basic admin authentication is implemented for secure access to the dashboard.

## Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** (with Mongoose)
- **Cloudinary** (for image storage)
- **JSON Web Tokens (JWT)** (for admin authentication)
- **Multer** (for handling file uploads)

---

## Setup Instructions

### Prerequisites

1. **Node.js** and **npm/yarn** installed.
2. **MongoDB** instance running locally or in the cloud.
3. **Cloudinary Account**.

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:
   ```env
   PORT=5000
   MONGO_URI=<your_mongo_database_uri>
   CLOUDINARY_CLOUD_NAME=<your_cloudinary_cloud_name>
   CLOUDINARY_API_KEY=<your_cloudinary_api_key>
   CLOUDINARY_API_SECRET=<your_cloudinary_api_secret>
   JWT_SECRET=<your_jwt_secret>
   ```

4. Start the server:
   ```bash
   npm run dev
   ```
   The backend will be available at `http://localhost:5000`.

---

## API Endpoints

### User Submission

#### POST `/api/users/submit`
Submit user data along with optional image uploads.

- **Request Body:**
  Form-data with the following fields:
  - `name` (String, required)
  - `socialMediaHandle` (String, required)
  - `images` (File, optional, multiple allowed)

- **Response:**
  ```json
  {
    "success": true,
    "message": "User data submitted successfully.",
    "data": {
      "_id": "<user_id>",
      "name": "<name>",
      "socialMediaHandle": "<social_media_handle>",
      "images": ["<image_url1>", "<image_url2>"]
    }
  }
  ```

### Fetch All Users

#### GET `/api/users`
Fetch all user submissions.

- **Response:**
  ```json
  {
    "success": true,
    "data": [
      {
        "_id": "<user_id>",
        "name": "<name>",
        "socialMediaHandle": "<social_media_handle>",
        "images": ["<image_url1>", "<image_url2>"]
      },
      ...
    ]
  }
  ```

### Admin Authentication

#### POST `/api/admin/login`
Authenticate admin using credentials.

- **Request Body:**
  ```json
  {
    "username": "<admin_username>",
    "password": "<admin_password>"
  }
  ```

- **Response:**
  ```json
  {
    "success": true,
    "token": "<jwt_token>"
  }
  ```

  #### POST `/api/admin/logout`
Authenticate admin using credentials.

- **Response:**
  ```json
  {
    "success": true,
    "message": "Logged Out Successfully"
  }
  ```

---

## Key Files and Their Roles

- **`src/models/User.js`**:
  Defines the User schema for MongoDB.

- **`src/models/Admin.js`**:
  Defines the Admin schema for MongoDB.

- **`src/controllers/userController.js`**:
  Handles user-related requests (e.g., submission, fetching data).

- **`src/controllers/adminController.js`**:
  Handles admin login and authentication.

- **`src/middleware/fileUpload.js`**:
  Configures Multer for file uploads.

---

## Running Tests

You can use tools like **Postman** or **cURL** to test the endpoints.

---


## Deployed Links

**Frontend Url** - `https://3-w-assignment-zo1b.vercel.app/`

**Backend Url** -  `https://3-w-assignment-backend-ten.vercel.app/`

---


# Chat App with React and Strapi

![Chat App](https://api-prod.strapi.io/uploads/008_project_demo_7181661045.gif)


This is a simple chat application built using **React** for the front-end and **Strapi** as the back-end. The app allows users to sign in with Google, send and receive messages, and view user avatars.

## Features

- **Authentication**: Google login using Firebase Authentication.
- **Real-time messaging**: Send and receive messages in real-time.
<!-- - **User Profiles**: View user profile pictures and display names. -->
- **Strapi as Backend**: Strapi is used as the backend to handle data storage (messages, users, etc.).
- **Responsive Design**: The app is responsive and works well on both desktop and mobile devices.

## Technologies Used

- **Frontend**: 
  - React
  - React Router
  - TailwindCSS (for styling)
  - Firebase Authentication (Google login)
  - Axios (for API requests)

- **Backend**:
  - Strapi (Headless CMS)
  - Node.js

- **Database**: 
  - SQLite (for development)
  - MongoDB (for production)

- **Hosting**:
  - Strapi on Vercel or any cloud platform of choice
  - React app on Vercel or Netlify

## Prerequisites

Make sure you have the following tools installed:

- **Node.js** (v12.x or above)
- **npm** (v6.x or above) or **yarn**
- **Strapi** (To run the backend locally)
- **Firebase** (For authentication)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/RyomenDev/chatApp-strapi.git
cd chatApp-strapi
```

### 2. Set up the Backend (Strapi)

1. **Install Strapi dependencies**:
   Navigate to the Strapi directory and install the dependencies.

   ```bash
   cd backend
   npm install
   ```

2. **Configure the database**:
   Set up the database connection by editing the `.env` file inside the backend directory to match your database credentials.

3. **Run Strapi**:
   Start the Strapi server.

   ```bash
   npm run dev
   ```

   Strapi should now be running at `http://localhost:1337`. You can log in to the admin panel and configure your collections (such as `Messages`, `Users`, etc.).

### 3. Set up Firebase Authentication

1. Go to [Firebase Console](https://console.firebase.google.com/) and create a new Firebase project.
2. Enable Google Authentication in Firebase Console under the Authentication section.
3. Obtain the Firebase config and add it to your `firebase.js` file.

```js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
```

### 4. Set up the Frontend (React)

1. **Install dependencies**:
   Navigate to the React frontend directory and install dependencies.

   ```bash
   cd frontend
   npm install
   ```

2. **Configure API URL**:
   Set the URL for your Strapi backend API in your React app. You can use Axios or Fetch to make API requests.

3. **Start the React App**:
   Start the React development server.

   ```bash
   npm start
   ```

   The app should now be running at `http://localhost:3000`.

## Usage

- **Sign In**: Click on the "Login with Google" button to sign in.
- **Messaging**: Once logged in, users can send and receive messages in the chatroom.
- **Profile**: User profile pictures and names are fetched from Firebase and displayed in the chat.

## Deployment

To deploy this app:

### Frontend (React)

- Deploy the frontend on platforms like [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/).
- Make sure to update the `.env` file with the correct Firebase credentials and API URL for the backend.

### Backend (Strapi)

- Deploy Strapi on platforms like [Heroku](https://www.heroku.com/), [DigitalOcean](https://www.digitalocean.com/), or [Vercel](https://vercel.com/).
- Use MongoDB or any cloud database service for production.

## API Endpoints

- **POST /messages**: Create a new message.
- **GET /messages**: Get all messages in the chatroom.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

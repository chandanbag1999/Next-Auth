# Next.js Authentication

This is a Next.js application that implements user authentication using NextAuth.js. It includes features such as user registration, login, and authentication using different providers.

## Features

- **User Registration:** Create a new user account.
- **User Login:** Authenticate a user using various providers (e.g., Google, GitHub).
- **Session Management:** Manage user sessions with secure cookies.
- **Protected Routes:** Access control for protected routes.
- **User Profile:** Display user-specific information.

## Technologies Used

- **Next.js:** React framework for building server-side rendered applications.
- **NextAuth.js:** Authentication library for Next.js applications.
- **MongoDB:** NoSQL database for storing user information.
- **React:** Frontend library for building user interfaces.

## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

Ensure you have the following installed on your local machine:

- Node.js
- npm (Node package manager) or yarn
- MongoDB

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/chandanbag1999/Next-Auth.git
   ```

2. Navigate to the project directory:

   ```sh
   cd Next-Auth
   ```

3. Install the dependencies:

   ```sh
   npm install
   ```

   or

   ```sh
   yarn install
   ```

### Configuration

1. Create a `.env.local` file in the root directory and add the following environment variables:

   ```env
   NEXTAUTH_URL=http://localhost:3000
   MONGODB_URI=your_mongodb_connection_string
   NEXTAUTH_SECRET=your_nextauth_secret
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   GITHUB_ID=your_github_client_id
   GITHUB_SECRET=your_github_client_secret
   ```

2. Replace `your_mongodb_connection_string` with your actual MongoDB connection string.
3. Replace `your_nextauth_secret` with a secret key for NextAuth.js.
4. Replace `your_google_client_id` and `your_google_client_secret` with your Google OAuth credentials.
5. Replace `your_github_client_id` and `your_github_client_secret` with your GitHub OAuth credentials.

### Running the Application

To start the development server, run:

```sh
npm run dev
```

or

```sh
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application in the browser.

## Folder Structure

- `pages`: Contains the Next.js pages
  - `api`: API routes for authentication and session management
  - `_app.js`: Custom App component to initialize pages
  - `index.js`: Home page component
  - `profile.js`: User profile page component

- `components`: Reusable React components
- `lib`: Contains helper functions and utilities
- `styles`: Contains global and component-specific styles

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Chandan Bag - [chandanbag1999](https://github.com/chandanbag1999)

Email - cbag67612@gmail.com

LinkedIn - [www.linkedin.com/in/cbag-98](www.linkedin.com/in/cbag-98
)

Project Link: [https://github.com/chandanbag1999/Next-Auth](https://github.com/chandanbag1999/Next-Auth)
```

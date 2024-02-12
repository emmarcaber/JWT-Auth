# JWT Authentication Practice
This is a simple Express Node.js application designed to help you practice implementing JSON Web Tokens (JWT) for authentication. The application consists of two servers: one for authentication and one for displaying data. By working with this application, you will gain hands-on experience in setting up authentication using JWT in a Node.js environment.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js: [Download and install Node.js](https://nodejs.org/)

## Installation

1. Clone this repository to your local machine:

```bash
git clone https://github.com/emmarcaber/JWT-Auth.git
```

2. Navigate to the project directory:

```bash
cd JWT-Auth
```

3. Install the dependencies:
   
```bash
npm install
```

4. In the project directory, copy the .env.example and rename it to .env:

```bash
cp .env.example .env
```

5. Replace _ACCESS_TOKEN_SECRET_ and _REFRESH_TOKEN_SECRET_ with a strong and secure secret key for signing JWTs.

```
ACCESS_TOKEN_SECRET = yourSecretToken
REFRESH_TOKEN_SECRET = yourAnotherSecretToken
```

## Usage
### Running the Authentication Server
To start the authentication server in development mode, run the following command:

```bash
npm run devAuth
```

This will start the authentication server using *nodemon*, which automatically restarts the server on file changes. The server will be available at http://localhost:3000.

### Running the Data Server
To start the data server in development mode, run the following command:

```bash
npm run dev
```

This will start the data server using *nodemon*, and it will be available at http://localhost:4000. The data server provides a protected endpoint that requires a valid JWT for access.

### Practice
1. Register a user using the authentication server.
2. Log in to receive a JWT.
3. Use the received JWT to access the protected data endpoint on the data server.

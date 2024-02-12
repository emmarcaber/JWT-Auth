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

5. Replace _SECRET_ACCESS_TOKEN_ and _REFRESH_ACCESS_TOKEN_ with a strong and secure secret key for signing JWTs.

```
   SECRET_ACCESS_TOKEN = yourSecretToken
   REFRESH_ACCESS_TOKEN = yourAnotherSecretToken
```

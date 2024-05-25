# Nexus Quill 
A Blogging Website

## Tech Stacks

### Backend
- **Framework**: Cloudflare Workers with Hono
- **Database**: PostgreSQL integrated with Prisma ORM
- **Validation**: Zod for input validation
- **Security**: bcrypt.js for password hashing
- **Middleware**: CORS to avoid backend server errors

### Frontend
- **Framework**: React.js with Vite and TypeScript
- **Styling**: Tailwind CSS

## Description

Nexus Quill is a modern blogging platform built with React, Vite, and TypeScript for a responsive and efficient frontend experience. The backend is powered by Cloudflare Workers with Hono, ensuring robust performance and scalability. PostgreSQL, managed through Prisma ORM, provides a reliable and type-safe database solution. Zod is used for input validation, enhancing data integrity and security. bcrypt.js secures user passwords by hashing them before storage, while CORS middleware is employed to prevent backend server errors.

This project aims to deliver a seamless blogging experience, combining powerful frontend technologies with a performant and scalable backend architecture.

## Getting Started

To run this project locally, follow these steps:

1. Clone this repository or download the root folder.
   ```bash
   git clone <repository-url>
   ```

2. Install dependencies for the frontend.
   ```bash
   cd frontend
   npm install
   ```

3. Install dependencies for the backend.
   ```bash
   cd ../backend
   npm install
   ```

4. Create a `.env` file in the root of the `backend` folder and store your PostgreSQL database URL.
   ```bash
   touch backend/.env
   ```

5. Optionally, if using JWT for authentication, create a `config.ts` file to store your `JWT_SECRET`.
   ```bash
   touch backend/config.ts
   ```

6. Start the frontend server.
   ```bash
   cd frontend
   npm run dev
   ```

7. Start the backend server in a separate terminal.
   ```bash
   cd backend
   npm run dev
   ```

8. Navigate to the `/signup` endpoint to create your account and start using Nexus Quill.

## Building and Deployment

To build and deploy your project on Cloudflare, follow these steps:

1. Build the frontend for production.
   ```bash
   cd frontend
   npm run build
   ```

2. Deploy to Cloudflare using Cloudflare Workers or other appropriate deployment mechanisms.
   ```bash
   # Command for login in Cloudflare Workers
   npx wrangler login
   ```

  ```bash
   # Command for deploying with Cloudflare Workers
   npx wrangler deploy
   ```
    



Ensure you have configured your Cloudflare account and environment variables properly for deployment.

## License

This project is licensed under the MIT License - see the [MIT](LICENSE) file for details.
```

It includes instructions for building the frontend and deploying to Cloudflare, enhancing the clarity and completeness of the setup and deployment process for your project. Adjust paths and commands as necessary based on your specific project structure and deployment requirements.
# VKM Agency Platform

A production-oriented VKM agency starter built with a Next.js frontend and an Express + MongoDB backend.

## Folder structure

```text
.
+-- backend/
¦   +-- src/
¦   ¦   +-- config/
¦   ¦   +-- middleware/
¦   ¦   +-- models/
¦   ¦   +-- routes/
¦   ¦   +-- utils/
¦   ¦   +-- app.js
¦   ¦   +-- server.js
¦   +-- uploads/
¦   +-- .env.example
¦   +-- package.json
+-- prisma/
+-- public/
+-- src/
¦   +-- app/
¦   +-- components/
¦   +-- lib/
+-- .env.example
+-- package.json
+-- README.md
```

## Frontend stack

- Next.js App Router
- Tailwind CSS v4
- Framer Motion
- GSAP
- Three.js via React Three Fiber

## Backend stack

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT authentication
- Helmet, CORS, rate limiting, input validation

## Install

### Frontend

```bash
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
npm run dev
```

## Environment setup

1. Copy `.env.example` to `.env` in the project root.
2. Copy `backend/.env.example` to `backend/.env`.
3. Set `MONGODB_URI` and a strong `JWT_SECRET`.
4. Add OAuth credentials if you wire Google and GitHub auth callbacks.

## Deployment

### Frontend on Vercel or Netlify

- Set `NEXT_PUBLIC_API_BASE_URL`.
- Install dependencies and run `npm run build`.
- Point the project root to this folder.

### Backend on Railway or Render

- Deploy the `backend` folder as a Node service.
- Set `MONGODB_URI`, `JWT_SECRET`, and `CLIENT_URL`.
- Run `npm install && npm start`.

## Security included

- JWT session signing
- Password hashing with `bcryptjs`
- Rate limiting on auth and API routes
- Input validation with `zod`
- `helmet` security headers
- Role-aware route protection for admin actions

## Notes

- The frontend uses VKM-focused agency content and 3D section design.
- Contact, newsletter, chatbot, portfolio, plans, gallery, and ticket flows are backend-ready.
- Stripe, Google Maps, email transport, and OAuth callbacks are scaffolded and need real keys before production use.

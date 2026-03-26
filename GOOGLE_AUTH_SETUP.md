# Google Login Setup

1. Open Google Cloud Console and create or select a project.
2. Configure the OAuth consent screen.
3. Create an OAuth 2.0 Client ID for a Web application.
4. Add this authorized redirect URI:
   - http://localhost:3000/api/auth/callback/google
5. Copy the client ID and client secret into `.env`:
   - `GOOGLE_CLIENT_ID=...`
   - `GOOGLE_CLIENT_SECRET=...`
6. Restart the Next.js server.

When those values are present, the login page will expose Google sign-in and NextAuth will persist Google users in Prisma.

For production, also add your deployed domain callback, for example:
- https://your-domain.com/api/auth/callback/google

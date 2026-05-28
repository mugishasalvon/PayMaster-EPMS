# EPMS Login Credentials

## Default User Account

The system automatically creates a default user when the backend starts.

**Username:** salvo
**Password:** 1234567890

## How to Login

1. Start the backend server: `cd backend-project && npm start`
2. Start the frontend: `cd frontend-project && npm run dev`
3. Open browser: `http://localhost:5173`
4. Enter credentials:
   - Username: salvo
   - Password: 1234567890
5. Click Login

## Creating Additional Users

To create more users, send a POST request to:

**Endpoint:** `http://localhost:5000/api/auth/register`

**Method:** POST

**Body:**
```json
{
  "username": "your_username",
  "password": "your_password"
}
```

**Example using curl:**
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"newuser","password":"newpassword"}'
```

## Notes

- The default user is created automatically on server startup
- No manual user creation is required
- Password is securely hashed using bcrypt
- JWT tokens are used for authentication
- Tokens are stored in browser localStorage

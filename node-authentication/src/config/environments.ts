import dotenv from 'dotenv';

dotenv.config();

export const {
  NODE_ENV,
  NODE_PORT,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_CALLBACK_URL,
  GOOGLE_CALLBACK_EMAIL_SCOPE_URL,
  GOOGLE_CALLBACK_PROFILE_SCOPE_URL,
  JWT_EXPIRATION_TIME,
  JWT_SECRET,
} = process.env;

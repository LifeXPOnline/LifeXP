import dotenv from 'dotenv';
dotenv.config();

import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Express } from 'express';

// Extending the Express User interface
declare module 'express-serve-static-core' {
    interface User {
        googleId: string;
        displayName: string;
        // ... Add other properties as needed
    }
}

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || 'default client id';
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || 'default client secret';

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/google/callback",
    
  },
  function(accessToken, refreshToken, profile, done) {
      const user: Express.User = {
          googleId: profile.id,
          displayName: profile.displayName,
          // ... Map other profile properties as needed
      };
      done(null, user);
  }
));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((id, done) => {
    const user: Express.User = {
        googleId: id,
        displayName: "Dummy User",
        // ... Set other properties as needed
    };
    done(null, user);
});

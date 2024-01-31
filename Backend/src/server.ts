import dotenv from 'dotenv';
dotenv.config();

import express, { Request, Response, NextFunction } from 'express';
import session from 'express-session';
import passport from 'passport';
import './authentication'; // Assuming this is a TypeScript file

interface User {
    displayName: string;
    // Add other user properties here as needed
}
declare module 'express-serve-static-core' {
    interface Request {
        user?: User;
    }
}


// Function that checks if user is logged in
function isLoggedIn(req: Request, res: Response, next: NextFunction) {
    if (req.user) {
        next();
    } else {
        res.sendStatus(401); // Unauthorized
    }
}

// Initialize app
const app = express();

// Use session middleware
app.use(session({
    secret: process.env.SESSION_SECRET || 'default_secret',
    resave: false, // Typically set to false; depends on your session store
    saveUninitialized: true // or false, depending on your needs
}));

// Initialize passport
app.use(passport.initialize());
app.use(passport.session());

// Route to start authentication with Google
app.get('/', (req: Request, res: Response) => {
  
    res.send('<a href="/auth/google">Authenticate with Google</a>');
});

// when they click the route above, authenticate user
app.get('/auth/google',
    // authenticate with provider google 
    passport.authenticate('google', { scope: ['email', 'profile'] })
);

// Callback route for Google to redirect to
app.get('/google/callback',
    passport.authenticate('google', {
       // succesffully authenticated, bring them to
       successRedirect: 'https://lifexponline.com/',
       // when failure
       failureRedirect: '/auth/failure',
    })
);

// Route for handling authentication failure
app.get('/auth/failure', (req: Request, res: Response) => {
  
    res.send('Something went wrong..');
});

// Protected route that requires authentication
app.get('/protected', isLoggedIn, (req: Request, res: Response) => {
    res.send(`Hello ${req.user?.displayName}`);
});

// Logout route
app.get('/logout', (req: Request, res: Response) => {
    req.logout((err) => {
        if (err) {
            console.error(err);
            return res.sendStatus(500); // Internal Server Error
        }
        req.session.destroy((err) => {
            if (err) {
                console.error(err);
                return res.sendStatus(500); // Internal Server Error
            }
            res.send('Goodbye');
        });
    });
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

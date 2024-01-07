// app.js
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcrypt');
const fetch = require('node-fetch');
const app = express();
const port = 3000;

const db = new sqlite3.Database('database.db');

db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS users (username TEXT, password TEXT, firstName TEXT, lastName TEXT, age INTEGER, gender TEXT)");
    db.run("CREATE TABLE IF NOT EXISTS feedback (username TEXT, message TEXT)");
});

app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: false
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

function isAuthenticated(req, res, next) {
    if (req.session.isLoggedIn) {
        return next();
    }
    res.redirect('/login');
}

// Function to fetch weather data from OpenWeatherMap API
async function getWeather(city) {
    const apiKey = '54022fed11440cdfe25b50f5aab3922d'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            console.error('Error:', response.statusText);
            return null;
        }

        const data = await response.json();

        return {
            temperature: data.main.temp,
            description: data.weather[0].description,
        };
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
}

app.get('/contact', isAuthenticated, (req, res) => {
  res.render('contact', { user: req.session.user });
}); 

app.get('/', (req, res) => {
    if (!req.session.isLoggedIn) {
        return res.redirect('/login');
    }
    res.render('index', { user: req.session.user });
});

app.get('/about', isAuthenticated, async (req, res) => {
    const user = req.session.user;

    // Get weather data for Paris (you can change the city)
    const weatherData = await getWeather('Paris');

    res.render('about', { user: user, weather: weatherData });
});

app.get('/login', (req, res) => {
    if (req.session.isLoggedIn) {
        return res.redirect('/');
    }
    res.render('login');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    db.get("SELECT * FROM users WHERE username = ?", [username], (err, row) => {
        if (err) {
            return res.send('An error occurred');
        }
        if (row && bcrypt.compareSync(password, row.password)) {
            req.session.isLoggedIn = true;
            req.session.user = { username: username };
            res.redirect('/');
        } else {
            res.send('Invalid username or password');
        }
    });
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.post('/register', (req, res) => {
    const { username, password, firstName, lastName, age, gender } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);

    const stmt = db.prepare("INSERT INTO users (username, password, firstName, lastName, age, gender) VALUES (?, ?, ?, ?, ?, ?)");
    stmt.run(username, hashedPassword, firstName, lastName, age, gender, (err) => {
        if (err) {
            return res.send("An error occurred. User might already exist.");
        }

        // Log in the user immediately after registration
        req.session.isLoggedIn = true;
        req.session.user = { username: username };
        res.redirect('/');
    });
    stmt.finalize();
});

app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/login');
});

app.get('/profile', isAuthenticated, (req, res) => {
    const username = req.session.user.username;
    db.get("SELECT * FROM users WHERE username = ?", [username], (err, user) => {
        if (user) {
            res.render('profile', { user: user });
        } else {
            res.send('User not found');
        }
    });
});

app.get('/home', (req, res) => {
    res.redirect('/');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

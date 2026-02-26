const express = require('express');
const path = require('path');
const app = express();

// 1. Set EJS as the viewing engine
app.set('view engine', 'ejs');

// Crucial for Vercel: Always use path.join with __dirname for folder paths
app.set('views', path.join(__dirname, 'views'));

// 2. Serve static files (CSS, Images, JS) from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// 3. Define your Routes
app.get('/', (req, res) => res.render('index'));
app.get('/about', (req, res) => res.render('about'));
app.get('/artists', (req, res) => res.render('artists'));
app.get('/artists/1', (req, res) => res.render('artists1'));
app.get('/artists/2', (req, res) => res.render('artists2'));
app.get('/gallery', (req, res) => res.render('gallery'));
app.get('/series', (req, res) => res.render('series'));
app.get('/series/1', (req, res) => res.render('series1'));
app.get('/series/2', (req, res) => res.render('series2'));
app.get('/series/3', (req, res) => res.render('series3'));

// 4. Handle 404 - Page Not Found (Optional but recommended)
app.use((req, res) => {
    res.status(404).render('index'); // Redirects to home or create a 404.ejs
});

// 5. Port Listener (For local testing and Render)
const PORT = process.env.PORT || 3000;
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Server is live at http://localhost:${PORT}`);
    });
}

// 6. Export for Vercel
module.exports = app;
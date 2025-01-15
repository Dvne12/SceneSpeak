const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');  
const path = require('path');


// Initialize express app
const app = express();
app.use(express.static(__dirname)); // Serve files from the root directory

// Enable CORS for all routes
app.use(cors());

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'homepage.html')); // Adjust to your main HTML file
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

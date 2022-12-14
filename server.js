// Import packages
const express = require('express');
const path = require('path');

// create app instance
const app = express();

// Set static folder
app.use(express.static(path.join(__dirname, 'docs')));

// Set port variable
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
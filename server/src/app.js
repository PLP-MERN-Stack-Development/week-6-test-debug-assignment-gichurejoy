const express = require('express');
const app = express();

app.use(express.json());

// Example route for testing
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
});

module.exports = app; 
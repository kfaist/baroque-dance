const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Prints page route - serves baroque-prints.html
app.get('/prints', (req, res) => {
    res.sendFile(path.join(__dirname, 'baroque-prints.html'));
});

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok', app: 'Baroque Mirror Dance' });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`⚜ Baroque Mirror Dance running on port ${PORT}`);
});

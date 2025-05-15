const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    console.log('GET / hit');
    res.send('Hello from SIT323 Cloud App!');
});

app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});

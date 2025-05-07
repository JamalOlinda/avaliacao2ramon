const express = require('express');
const {registrarLogs} = require('./script');

const app = express();
const port = 8000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('API funfano');
});

app.listen(port, () => {
    console.log(`servidor rodando porta ${port}`);
});
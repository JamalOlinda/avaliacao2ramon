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

app.post('/logs', (req, res) => {
    const {nomedoaluno} = req.body;

    if (!nomedoaluno) {
        return res.status(400).json({mensagem: 'nome obrigatório'});

    }
    const {id, mensagem} = registrarLogs(nomedoaluno);

    return res.status(201).json({id, mensagem});
});
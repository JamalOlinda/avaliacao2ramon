const express = require('express');
const {registrarLogs} = require('./script');
const fs = require ('fs')

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

app.get('/logs/:id', (req, res) => {
    const {id} = req.params;
    fs.readFile('logs.txt', 'utf8', (err, data) => {
        if(err) {
            return res.status(500).json({mensagem: 'erro no arquivo'});

        }
        const logs = data.split('\n');
        const logEncontrado = logs.find(log => log.startsWith(id));

        if (logEncontrado){
            return res.status(200).json({log: logEncontrado});
        
        }else{
            return res.status(404).json({mensagem: 'log nao encontrado'});

        }
    })
})
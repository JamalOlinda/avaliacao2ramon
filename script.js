const fs = require ('fs');
const { v4: uuidv4 } = require ('uuid');

function registrarLogs(nomedoaluno) {
    const id = uuidv4();
    const datahora = new Date().toISOString().replace('T', ' ').split('.')[0];
    const mensagem = `${id} - ${datahora} - ${nomedoaluno}\n`;

    fs.appendFileSync('logs.txt', mensagem);

    return {id, mensagem: 'log regristado'};

}

module.exports = {registrarLogs};
const fs = require ('fs');
const { v4: uuidv4 } = require ('uuid');

function registrarLogs(nomedoaluno) {
    const ID = uuidv4();
    const datahora = new Date().toISOString().replace('T', '').split('.')
    const mensagem = `${ID} - ${datahora} - ${nomedoaluno}\n`;

    fs.appendFileSync('logs.txt', mensagem);

    return {ID, mensagem: 'log regristado'};

}

module.exports = {registrarLogs};
var fs = require("fs");

fs.readFile('input.txt', (err, data) => {
    console.log('O arquivo está sendo lido');
    if (err) {
        return console.error(err);
    }
    console.log("Leitura Assincrona: " + data.toString());
});


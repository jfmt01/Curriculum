const express = require('express'),
        app = express(),
        path = require('path');

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res)=>{
        res.sendFile(`${__dirname}/views/index.html`);
});

app.route('/experiencia').get((req, res)=>{
        res.sendFile(`${__dirname}/views/experiencia.html`)
});

app.route('/estudios').get((req, res)=>{
    res.sendFile(`${__dirname}/views/estudios.html`)
});

app.route('/aptitudes').get((req, res)=>{
    res.sendFile(`${__dirname}/views/aptitudes.html`)
});


app.listen(8080);
console.log(`
            Servidor inicializado!
                        
                    Por favor ingrese desde su navegador web a localhost:8080 0 127.0.0.1:8080 para visualizar el curriculum`);
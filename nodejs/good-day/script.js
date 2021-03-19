const fs = require('fs');
const path = require('path');

if (fs.existsSync('./src')) {
    if ((!fs.existsSync('./src/data')) || (!fs.existsSync('./src/data')) || (!fs.existsSync('./src/data'))){console.log("Creando carpetas necesarias")}
    if (!fs.existsSync('./src/data'))  { fs.mkdir(path.join(__dirname + "\\src", 'data'), (err) => { if (err) { return console.error(err);}}); }
    if (!fs.existsSync('./src/img'))   { fs.mkdir(path.join(__dirname + "\\src", 'img'), (err) => { if (err) { return console.error(err);}}); }
    if (!fs.existsSync('./src/media')) { fs.mkdir(path.join(__dirname + "\\src", 'media'), (err) => { if (err) { return console.error(err);}}); }
} 
else {
    console.log("Se crearan las carpetas necesarias para la ejecucion de este script");
    fs.mkdir(path.join(__dirname, 'src'), (err) => { if (err) { return console.error(err);}});
    fs.mkdir(path.join(__dirname + "\\src", 'data'), (err) => { if (err)  { return console.error(err);}});
    fs.mkdir(path.join(__dirname + "\\src", 'img'), (err) => { if (err)   { return console.error(err);}});
    fs.mkdir(path.join(__dirname + "\\src", 'media'), (err) => { if (err) { return console.error(err);}}); 
}

var today = new Date().getDate().toString();

var lastDate; 

try{lastDate = require('./src/data/date.json');}catch{}

console.log( "Hoy es "+ today + "");


if (today != lastDate) {
    
    const { Client } = require('whatsapp-web.js');
    var schedule = require('node-schedule');

    const SESSION_FILE_PATH = './src/data/session.json';
    let sessionCfg;
    if (fs.existsSync(SESSION_FILE_PATH)) {
        sessionCfg = require(SESSION_FILE_PATH);
    }

    const client = new Client({ puppeter: { headless: true }, session: sessionCfg });

    client.initialize();

    client.on('qr', (qr) => {
        //
        console.log('QR recived ', qr);
    });

    client.on('authenticated', (session) => {
        console.log('AUTHENTICATED', session);
        sessionCfg = session;
        fs.writeFile(SESSION_FILE_PATH, JSON.stringify(session), function (err) {
            if (err) {
                console.error(err);
            }
        });
    });

    client.on('auth_failure', msg => {
        // Error de autentificacion
        console.error('AUTHENTICATED FAILURE', msg);
    });

    const goodDay = [
        'Te amo, así lo leas hoy o lo leas mañana.',
        'buenos días my love, sabes? hoy el día esta tan hermoso cómo tú :3 ❤️',
        'Ojala hayas descansado rico ',
        'Que tengas un excelente dia ❤️',
        'No te olvides de desayunar rico, te deseo un buen dia amor ❤️',
        'Hoy podria ser tu dia, sonrie cariño :3',
        'Bonito dia hermosa :3',
        'Buenos días solecito',
        'Buenos días princesa',
        'Perdona si te despierto, pero es que en cuanto abro los ojos eres lo primero en lo que pienso.',
        '¿Cómo amaneció la niña más bonita?',
        'Buenos días mi niña hermosa',
        'Buenos días cariño',
        'Buenos días, amorcito. Espero que hayas tenido dulces sueños y que el resto del día lo pases con energía. No puedo esperar a verte esta noche.',
        'Buenos dias my darling, como amaneciste?'
    ];

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms ));
    }

    var j = schedule.scheduleJob('* 15 * * *', function(){

    });
    client.on('ready', () => {
        console.log('READY');
        console.log('sending message');
        console.log('-------');
        console.log('-------');
        // let y = Math.round(getRandomArbitrary(0, 7));
        let y;
        const NUM_FILE_PATH = './src/data/num.json';

        if (fs.existsSync(NUM_FILE_PATH)) 
        {
            y = require(NUM_FILE_PATH);
            fs.writeFile(NUM_FILE_PATH, JSON.stringify(y+1), function(err){ if (err) { console.error(err); }});
        } 
        else
        {
            y = 0;
            fs.writeFile(NUM_FILE_PATH, JSON.stringify(y+1), function(err){ if (err) { console.error(err); }});
        }

        client.sendMessage('593997133472@c.us', goodDay[y]).then((response)=>{
            if (response.id.fromMe) {
                fs.writeFile('./src/data/date.json', JSON.stringify(today), function(err){ if (err) { console.error(err); }});
                console.log("done");
                console.log(goodDay[y]);
                
                //process.exit(1);
            }
        });
    });
}

else if (today == lastDate) {
    console.log("Y ya les fueron deseados los buenos dias a my love");
    process.exit();
}

// Nota: A ella no le importo este codigo. Ni el como yo me sentia.
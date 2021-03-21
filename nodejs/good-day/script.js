const fs = require('fs');
const path = require('path');

if (fs.existsSync('./src')) {
    if ((!fs.existsSync('./src/data')) || (!fs.existsSync('./src/data')) || (!fs.existsSync('./src/data'))){console.log("Creando carpetas necesarias")}
    if (!fs.existsSync('./src/data'))  { fs.mkdir(path.join(__dirname + "\\src", 'data'), (err) => { if (err) { return console.error(err);}}); }
    if (!fs.existsSync('./src/img'))   { fs.mkdir(path.join(__dirname + "\\src", 'img'), (err) => { if (err) { return console.error(err);}}); }
    if (!fs.existsSync('./src/media')) { fs.mkdir(path.join(__dirname + "\\src", 'media'), (err) => { if (err) { return console.error(err);}}); }
    if (!fs.existsSync('./src/cache')) { fs.mkdir(path.join(__dirname + "\\src", 'cache'), (err) => { if (err) { return console.error(err);}}); }
} 
else {
    console.log("Se crearan las carpetas necesarias para la ejecucion de este script");
    fs.mkdir(path.join(__dirname, 'src'), (err) => { if (err) { return console.error(err);}});
    fs.mkdir(path.join(__dirname + "\\src", 'data'), (err) => { if (err)  { return console.error(err);}});
    fs.mkdir(path.join(__dirname + "\\src", 'img'), (err) => { if (err)   { return console.error(err);}});
    fs.mkdir(path.join(__dirname + "\\src", 'media'), (err) => { if (err) { return console.error(err);}}); 
    fs.mkdir(path.join(__dirname + "\\src", 'cache'), (err) => { if (err) { return console.error(err);}}); 
}

var today = new Date().getDate().toString();

var lastDate; 

try{lastDate = require('./src/data/date.json');}catch{}

if (lastDate == null) 
{
    lastDate = 0;
}

console.log( "Hoy es "+ today + "");


if (today != lastDate) {
    
    const { Client } = require('whatsapp-web.js');
    var schedule = require('node-schedule');

    let http, html, qrcode, server, io, QR;

    const SESSION_FILE_PATH = './src/data/session.json';
    let sessionCfg;
    if (fs.existsSync(SESSION_FILE_PATH)) {
        sessionCfg = require(SESSION_FILE_PATH);
    }
    else {
        http = require('http');
        html = '<!DOCTYPE html><html lang=\"en\"><head>    <meta charset=\"UTF-8\">    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">    <title>QR code</title>    <script src=\"/socket.io/socket.io.js\"></script>    <style>        * { margin: 0; }        body {            display: flex;            height: 100vh;            justify-content: center;            align-items: center;        }                img { height: 35%; }    </style></head><body>    <img id=\"img\" src=\"\" alt=\"\">    <script type=\"text/javascript\">        var socket = io.connect(\'http://localhost:3000\', {\'forceNew\': true});        socket.on(\'sendQRcode\', function(data){            console.log(data);            refreshQrcode(data);        });        socket.on(\'Exit\', function(data){            window.close();        });        function refreshQrcode(qr) {            document.getElementById(\'img\').src = qr;        }        function exit(){            window.close();        }    </script></body></html>';
        qrcode = require('qrcode');

        server = http.createServer((req, res) => {
            res.status = 200;
            res.write(html);
            res.end();
        })

        io = require('socket.io')(server);

        server.listen(3000, function(){
            console.log('success conected node server');
        })
    }
    
    async function convertQR(qr) {
        QR = await qrcode.toDataURL(qr);
    }

    const client = new Client({ puppeter: { headless: true }, session: sessionCfg });

    client.initialize();
    
    client.on('qr', async (qr) => {
        console.log('QR recived ', qr);

        await io.on('connection', async function(socket){
            await convertQR(qr);
            await socket.emit('sendQRcode', QR);
            
        });
        require('opn')('http://localhost:3000')
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
        'Buen dia hermosa :3',
        'Buen dia preciosura del mundo ❤️',
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

        client.sendMessage('593997133472@c.us', goodDay[y]).then((response) =>{
            if (response.id.fromMe) {

                fs.writeFile('./src/data/date.json', JSON.stringify(today), function(err){ if (err) { console.error(err); }});

                console.log("done");
                console.log(goodDay[y]);

                (async () => {
                    await sleep(100);
                    process.exit();
                })()
            }
        });
    });
}

else if (today == lastDate) {
    console.log("Y ya les fueron deseados los buenos dias a my love");
    process.exit();
}

// Nota: A ella no le importo este codigo. Ni el como yo me sentia.
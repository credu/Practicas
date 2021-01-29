const fs = require('fs');
var today = new Date().getDay().toString();
var lastDate; 

try{ lastDate = require('./date.json'); }catch{}

console.log( "Hoy es "+ today + "");


if(today != lastDate) {

    const { Client, MessageMedia } = require('whatsapp-web.js');
    var schedule = require('node-schedule');

    const SESSION_FILE_PATH = './session.json';
    let sessionCfg;
    if (fs.existsSync(SESSION_FILE_PATH)) {
        sessionCfg = require(SESSION_FILE_PATH);
    }

    const client = new Client({ puppeteer: {headless: true}, session: sessionCfg });


    client.initialize();

    client.on('qr', (qr) => {
        // unknown
        console.log('QR received', qr);
    });

    client.on('authenticated', (session) => {
        console.log('AUTHENTIFICATED', session);
        sessionCfg = session;
        fs.writeFile(SESSION_FILE_PATH, JSON.stringify(session), function(err){
            if (err) {
                console.error(err);
            }
        });
    });

    client.on('auth_failure', msg => {
        // asd
        console.error('AUTHENTIFICATION FAILURE', msg);
    });

    const goodDay = [
        'buenos días my love, el día esta tan lindo cómo tú ❤️',
        'Ojala hayas descansado rico ',
        'Que tengas un excelente dia ❤️',
        'No te olvides de desayunar rico, te deseo un buen dia amor ❤️',
        'Hoy podria ser tu dia, sonrie cariño :3',
        'Bonito dia hermosa :3',
        'Buenos días solecito',
        'Buenos días princesa',
        '¿Cómo amaneció la niña más bonita?',
        'Buenos días mi niña hermosa',
        'Buenos días cariño',
        'Buenos días, amorcito. Espero que hayas tenido dulces sueños y que el resto del día lo pases con energía. No puedo esperar a verte esta noche.'
    ]


    function getRandomArbitrary(min, max)  {
        return Math.random() * (max-min) + min;
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    var j = schedule.scheduleJob('* 15 * * *', function(){

    });
    client.on('ready', () => {
        console.log('ready');
        console.log("sending message");
        console.log("-------");
        console.log("-------");
        
        let y = Math.round(getRandomArbitrary(0, 12));
        //let audio = MessageMedia.fromFilePath('./audios/Jimin-Goodmorning.mp3')

        client.sendMessage('593994040582@c.us', goodDay[y]).then((response)=>{ 
            if(response.id.fromMe) {
                const controller = new AbortController();
                const { signal } = controller;    
                fs.writeFileSync('date.json', today , { signal }, (err) => {});
                controller.abort();

                console.log("done");
                //process.exit(1)
            }
        });
    });
}

else if (today == lastDate) {
    console.log("Y ya les fueron deseados los buenos dias a my love :3");
    process.exit()
}

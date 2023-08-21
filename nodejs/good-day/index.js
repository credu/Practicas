import fs from 'fs';
import http from 'http';
import path from 'path';

import open from 'open';
import qrcode from 'qrcode';
import whatsappWeb from 'whatsapp-web.js';
const { Client, LocalAuth, NoAuth } = whatsappWeb;

const __dirname = path.resolve();

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const html = fs.readFileSync(__dirname + "/src/app.html", "utf-8");
const server = http.createServer((req, res) => {
    res.status = 200;
    res.write(html);
    res.end();
});

function createVerificationQrPage() {
    // Solo se ejecuta si no hay ningun puerto
    if ( !server.address()?.port ) {
        server.listen(3000, () => {
            console.log('success conected in the port 3000.');
        });
    }
}

function whatsappClient() {

    let lastQR = "";

    const client = new Client({
        //authStrategy: new LocalAuth(),
        authStrategy: new NoAuth(),
        puppeteer: {
            headless: true,
            args: ["--no-sandbox", "--disable-setuid-sandbox"],
        }
    });
    
    client.initialize();

    client.on('qr', async (qr) => {
        createVerificationQrPage();
        console.log('QR recived ', qr);
        if (qr != lastQR) {
    
            qr = await qrcode.toDataURL(qr);
            const params = new URLSearchParams({ qr }).toString();
    
            open(`http://localhost:3000?${ params }`);
        }
    });

    client.on('authenticated', (session) => {
        console.log('AUTHENTICATED', session);
    });

    client.on('auth_failure', msg => {
        // Error de autentificacion
        console.error('AUTHENTICATED FAILURE', msg);
    });

    client.on('ready', async () => {
        console.log('READY');
        console.log('sending message');
        console.log('-------');
        console.log('-------');
        
        
        const number = "51977934749";
        let y = getRandomInt(10);

        await client.sendMessage(`${ number }@c.us`, goodDay[y]);
        console.log(`El mensaje enviado fue: ${ goodDay[y] }`);
        
        setTimeout(async () => {
            await client.logout();
            process.exit();
        }, 3000);
    });

    client.on('disconnected', (reason) => {
        console.log('Client was logged out', reason);
    });
}

const goodDay = [
    'Te amo, así lo leas hoy o lo leas mañana.',
    'buenos días my love, sabes? hoy el día esta tan hermoso cómo tú ❤️',
    'Ojala hayas descansado rico ',
    'Que tengas un excelente dia ❤️',
    'No te olvides de desayunar rico, te deseo un buen dia amor ❤️',
    'Hoy puede ser tu dia, sonrie cariño',
    'Buen dia hermosa',
    'Buen dia preciosura del mundo ❤️',
    'Buenos días solecito',
    'Buenos días princesa',
    'Perdona si te despierto, pero es que en cuanto abro los ojos eres lo primero en lo que pienso.',
    '¿Cómo amaneció la niña más bonita?',
    'Buenos días mi niña hermosa',
    'Buenos días cariño',
    'Buenos días amorcito. Espero que hayas tenido dulces sueños y que el resto del día lo pases con energía.',
    'Buenos dias my darling, como amaneciste?'
];

function main() {
    whatsappClient();
}

main();
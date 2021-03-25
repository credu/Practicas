const fs = require('fs');
const path = require('path');

let ConsoleVisible = true;

if (fs.existsSync('./src')) {
    if ((!fs.existsSync('./src/data')) || (!fs.existsSync('./src/img')) || (!fs.existsSync('./src/media')) || (!fs.existsSync('./src/cache'))){console.log("Creando carpetas necesarias")}
    if (!fs.existsSync('./src/data'))  { fs.mkdir(path.join(__dirname + "\\src", 'data'), (err) => { if (err) { return console.error(err);}}); }
    if (!fs.existsSync('./src/img'))   { fs.mkdir(path.join(__dirname + "\\src", 'img'), (err) => { if (err) { return console.error(err);}}); }
    if (!fs.existsSync('./src/media')) { fs.mkdir(path.join(__dirname + "\\src", 'media'), (err) => { if (err) { return console.error(err);}}); }
    if (!fs.existsSync('./src/cache')) { fs.mkdir(path.join(__dirname + "\\src", 'cache'), (err) => { if (err) { return console.error(err);}}); }
} 
else {
    console.log("Se crearan las carpetas necesarias para la ejecucion de este script");
    fs.mkdir(path.join(__dirname, 'src'), (err) => { if (err) { return console.error(err);}});
    fs.mkdir(path.join(__dirname + "\\src", 'data'), (err)  => { if (err) { return console.error(err);}});
    fs.mkdir(path.join(__dirname + "\\src", 'img'), (err)   => { if (err) { return console.error(err);}});
    fs.mkdir(path.join(__dirname + "\\src", 'media'), (err) => { if (err) { return console.error(err);}}); 
    fs.mkdir(path.join(__dirname + "\\src", 'cache'), (err) => { if (err) { return console.error(err);}}); 
}

if(ConsoleVisible != true) {
    let powershellScript = 'Add-Type -Name Window -Namespace Console -MemberDefinition \'\n[DllImport(\"Kernel32.dll\")]\npublic static extern IntPtr GetConsoleWindow();\n\n[DllImport(\"user32.dll\")]\npublic static extern bool ShowWindow(IntPtr hWnd, Int32 nCmdShow);\n\'\n\n$consolePtr = [Console.Window]::GetConsoleWindow()\n#0 hide\n[Console.Window]::ShowWindow($consolePtr, 0)\n';
    let workingDir = process.cwd();
    let tempfile = `${workingDir}\\temp.ps1`;
    fs.writeFileSync(tempfile, powershellScript);

    //a little convoluted to get around powershell script execution policy (might be disabled)
    require('child_process').execSync(`type .\\temp.ps1 | powershell.exe -noprofile -`, {stdio: 'inherit'});
    fs.unlinkSync(tempfile); //delete temp file
}

var today = new Date().getDate().toString();

var lastDate; 

try{lastDate = require('./src/data/date.json');}catch{}

if (lastDate == null) lastDate = 0;

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
        // Suma de html para evitar el auto ajuste de linea
        html = '<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>QR code</title>\n    <link id=\"favicon\" rel=\"shortcut icon\" type=\"image/png\" href=\"https://web.whatsapp.com/img/favicon_c5088e888c97ad440a61d247596f88e5.png\" src=\"https://web.whatsapp.com/img/favicon_c5088e888c97ad440a61d247596f88e5.png\">\n    <script src=\"/socket.io/socket.io.js\"></script>\n    <style>\n        * { \n            margin: 0;\n            padding: 0;\n            user-select: none;\n            -moz-user-select: none; \n            -webkit-user-select: none;\n            -ms-user-select: none;\n        }\n        body {\n            display: flex;\n            height: 114.9vh;\n            background-color: #090e11;\n            z-index: -1;\n            font-family: Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif;\n        }\n        nav {\n            background-color: #00bfa5;\n            height: 17.4%;\n            width: 95%;\n            padding-top: 1.4%;\n            padding-left: 22.59%;\n        }\n        body::-webkit-scrollbar {\n            width: 6px;\n            background: #090e11;\n        }\n        body::-webkit-scrollbar-thumb {\n            background: #313537;\n            border-radius: 1px;\n        }\n        #play-video, #play-circle {\n            transition: .3s ease all;\n        }\n        #play-video:hover {\n            fill: rgb(247, 247, 247) !important;\n        }\n        #play-circle:hover{\n            background-color: rgba(0, 0, 0, .3) !important;\n        }\n    </style>\n</head>\n<body>\n    <nav>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"39\" height=\"39\" viewBox=\"0 0 39 39\"><path fill=\"#00E676\" d=\"M10.7 32.8l.6.3c2.5 1.5 5.3 2.2 8.1 2.2 8.8 0 16-7.2 16-16 0-4.2-1.7-8.3-4.7-11.3s-7-4.7-11.3-4.7c-8.8 0-16 7.2-15.9 16.1 0 3 .9 5.9 2.4 8.4l.4.6-1.6 5.9 6-1.5z\"></path><path fill=\"#FFF\" d=\"M32.4 6.4C29 2.9 24.3 1 19.5 1 9.3 1 1.1 9.3 1.2 19.4c0 3.2.9 6.3 2.4 9.1L1 38l9.7-2.5c2.7 1.5 5.7 2.2 8.7 2.2 10.1 0 18.3-8.3 18.3-18.4 0-4.9-1.9-9.5-5.3-12.9zM19.5 34.6c-2.7 0-5.4-.7-7.7-2.1l-.6-.3-5.8 1.5L6.9 28l-.4-.6c-4.4-7.1-2.3-16.5 4.9-20.9s16.5-2.3 20.9 4.9 2.3 16.5-4.9 20.9c-2.3 1.5-5.1 2.3-7.9 2.3zm8.8-11.1l-1.1-.5s-1.6-.7-2.6-1.2c-.1 0-.2-.1-.3-.1-.3 0-.5.1-.7.2 0 0-.1.1-1.5 1.7-.1.2-.3.3-.5.3h-.1c-.1 0-.3-.1-.4-.2l-.5-.2c-1.1-.5-2.1-1.1-2.9-1.9-.2-.2-.5-.4-.7-.6-.7-.7-1.4-1.5-1.9-2.4l-.1-.2c-.1-.1-.1-.2-.2-.4 0-.2 0-.4.1-.5 0 0 .4-.5.7-.8.2-.2.3-.5.5-.7.2-.3.3-.7.2-1-.1-.5-1.3-3.2-1.6-3.8-.2-.3-.4-.4-.7-.5h-1.1c-.2 0-.4.1-.6.1l-.1.1c-.2.1-.4.3-.6.4-.2.2-.3.4-.5.6-.7.9-1.1 2-1.1 3.1 0 .8.2 1.6.5 2.3l.1.3c.9 1.9 2.1 3.6 3.7 5.1l.4.4c.3.3.6.5.8.8 2.1 1.8 4.5 3.1 7.2 3.8.3.1.7.1 1 .2h1c.5 0 1.1-.2 1.5-.4.3-.2.5-.2.7-.4l.2-.2c.2-.2.4-.3.6-.5s.4-.4.5-.6c.2-.4.3-.9.4-1.4v-.7s-.1-.1-.3-.2z\"></path></svg>\n        <a href=\"\" style=\"color:#fff; text-decoration: none; font-weight: 510; font-size: 13.9px; vertical-align: top; line-height: 2.8; margin-left: 0.7%;\">WHATSAPP WEB</a>\n    </nav>\n    <div id=\"container\" style=\"display: block; position: absolute; background-color: #fff; height: 91.9%; width: 52.3%; margin-top: 6.9%; margin-left: 23.85%; margin-right: 23.85%; box-shadow: 0 17px 50px 0 rgb(0 0 0 / 19%), 0 12px 15px 0 rgb(0 0 0 / 24%); border-radius: 3px;\" >\n        <div style=\"display: flex; width: 100%; height: 50%;\">\n            <div style=\" margin-top: 6.5%; margin-left: 5.9%; font-size: 28px; font-weight: 300; line-height: normal; color: #525252; width: 60%; height: 40%;\">Para usar WhatsApp en tu computadora:\n                <ul style=\"list-style: decimal; margin-left: 4.5%; width: 90%;\">\n                    <li style=\"color: #4a4a4a; font-size: 20px; line-height: 28px; margin-top: 7.4%; margin-bottom: 2.9%;\">Abre WhatsApp en tu teléfono</li>\n                    <li style=\"color: #4a4a4a; font-size: 20px; line-height: 28px; margin-bottom: 2.9%;\">Toca Menú o Configuración y selecciona WhatsApp Web</li>\n                    <li style=\"color: #4a4a4a; font-size: 20px; line-height: 28px; margin-bottom: 2.9%;\">Cuando se active la cámara, apunta tu teléfono hacia esta pantalla para escanear el código</li>\n                </ul>\n                <p style=\"color: #009688; font-size: 14px; line-height: 1; margin-top: 10%; cursor: pointer; font-family: Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif; font-weight: 400;\">¿Necesitas ayuda para comenzar?</p>\n            </div>\n            <div style=\"width: 35%; display: flex; flex-direction: column; align-items: center;\">\n                <img id=\"img\" src=\"data:image/png;base64,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\" alt=\"\" style=\"height: 69%; margin-top: 13.2%; pointer-events: none; margin-right: 10%;\">\n                <div style=\"text-align: center; margin-right: 10%; width: 90%;\">\n                    <label><input type=\"checkbox\" name=\"rememberMe\" checked=\"\" style=\"margin-right: 1%;\">Mantener sesión activa</label>\n                </div>\n            </div>\n        </div>\n        <div style=\" display: flex; height: 50%; width: 100%; justify-content: center; align-items: center; background-color: #f9f9f9;\">\n            <div alt=\"\" style=\" width: 70%; height: 70%; display: flex; justify-content: center; align-items: center;'
        html = html + 'background: url(\'https://web.whatsapp.com/img/qr-video_07f8d2958696dceefa4f4676aeb4663e.jpg\'); background-repeat: no-repeat; background-position: center; \" >\n                <div id=\"play-circle\" style=\"border-radius: 50%; background-color: rgba(0, 0, 0, .45); height: 80px; width: 80px; display: flex; align-items: center; justify-content: center; \">\n                    <svg  xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"34\" viewBox=\"0 0 28 34\" style=\"margin-left: 4.7px; cursor: pointer;\"><path id=\"play-video\" fill=\"#FFF\" d=\"M1 4.983v24.034a2.982 2.982 0 0 0 4.564 2.53L24.792 19.53a2.981 2.981 0 0 0 0-5.058L5.563 2.454A2.983 2.983 0 0 0 1 4.983z\"></path></svg>\n                </div>\n            </div>\n        </div>\n    </div>\n    <script type=\"text/javascript\">\n        var socket = io.connect(\'http://localhost:3000\', {\'forceNew\': true});\n        socket.on(\'sendQRcode\', function(data){\n            refreshQrcode(data);\n        });\n        function refreshQrcode(qr) {\n            document.getElementById(\'img\').src = qr;\n        }\n    </script>\n</body>\n</html>';
        //fs.writeFile('./src/cache/test.html', html, function(err){ if (err) { console.error(err); }}); // Crear archivo de html
        qrcode = require('qrcode');

        server = http.createServer((req, res) => {
            res.status = 200;
            res.write(html);
            res.end();
        })

        io = require('socket.io')(server);

        server.listen(3000, function(){
            console.log('success conected node server\nEspera un momento . . .');
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
                    await sleep(1000);
                    process.exit();
                })()
            }
        });
    });
}

else if (today == lastDate) {
    (async () => {
        console.log("Y ya les fueron deseados los buenos dias a my love");
        await new Promise(resolve => setTimeout(resolve, 1000 ));
        process.exit(0);
    })();
}

// Nota: A ella no le importo este codigo. Ni el como yo me senti.
const fs = require('fs');
const path = require('path');
const opn = require('opn');
let today = new Date().getDate().toString();
let i;

function createFolder(name) {
    fs.mkdir(path.join(__dirname + "\\src", name), (err) => {
        if (err) {
            return console.error(err);
        }
    });
}

function createFile(name, data) {
    fs.writeFile(`./${name}.bat`, data, function (err) {
        if (err) {
            console.error(err);
        }
    }); // Create files of configuration.
}

function client() {

    const {
        Client
    } = require('whatsapp-web.js');

    const SESSION_FILE_PATH = './src/data/session.json';
    let sessionCfg;
    if (fs.existsSync(SESSION_FILE_PATH)) {
        sessionCfg = require(SESSION_FILE_PATH);
    } else {
        createHttp();
    }

    const client = new Client({
        puppeter: {
            headless: true
        },
        session: sessionCfg
    });

    client.initialize();

    client.on('qr', async (qr) => {
        console.log('QR recived ', qr);

        await io.on('connection', async function (socket) {
            await convertQR(qr);
            await socket.emit('sendQRcode', QR);
        });
        open('http://localhost:3000');
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

    client.on('ready', () => {
        console.log('READY');
        console.log('sending message');
        console.log('-------');
        console.log('-------');
        // let y = Math.round(getRandomArbitrary(0, 7));
        let y;
        const NUM_FILE_PATH = './src/data/num.json';

        if (fs.existsSync(NUM_FILE_PATH)) {
            y = require(NUM_FILE_PATH);
            fs.writeFile(NUM_FILE_PATH, JSON.stringify(y + 1), function (err) {
                if (err) {
                    console.error(err);
                }
            });
        } else {
            y = 0;
            fs.writeFile(NUM_FILE_PATH, JSON.stringify(y + 1), function (err) {
                if (err) {
                    console.error(err);
                }
            });
        }

        client.sendMessage('593997133472@c.us', goodDay[y]).then((response) => {
            if (response.id.fromMe) {

                fs.writeFile('./src/data/date.json', JSON.stringify(today), function (err) {
                    if (err) {
                        console.error(err);
                    }
                });

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

async function configure() {
    const thing = ["numero","nombre"];
    let request = [];

    for (i = 0; i < 2; i++) {

        process.stdout.write(`Ingrese su ${thing[i]}: `);

        process.stdin.on('data', function(data){
            nombre = data.toString();
            process.exit();
        });
    }
}


function createHttp() {
    http = require('http');

    html = '<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>QR code</title>\n    <link rel=\"shortcut icon\" type=\"image/png\" href=\"https://web.whatsapp.com/img/favicon_c5088e888c97ad440a61d247596f88e5.png\" src=\"https://web.whatsapp.com/img/favicon_c5088e888c97ad440a61d247596f88e5.png\">\n    <script src=\"/socket.io/socket.io.js\"></script>\n    <style>\n        * { \n            margin: 0;\n            padding: 0;\n            user-select: none;\n            -moz-user-select: none; \n            -webkit-user-select: none;\n            -ms-user-select: none;\n        }\n        body {\n            display: flex;\n            height: 114.9vh;\n            background-color: #090e11;\n            z-index: -1;\n            font-family: Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif;\n            justify-content: center;\n        }\n        nav {\n            background-color: #00bfa5;\n            height: 17.4%;\n            width: 95%;\n            padding-top: 1.4%;\n            padding-left: 22.59%;\n        }\n        body::-webkit-scrollbar {\n            width: 6px;\n            background: #090e11;\n        }\n        body::-webkit-scrollbar-thumb {\n            background: #313537;\n            border-radius: 1px;\n        }\n        #play-video, #play-circle {\n            transition: .3s ease all;\n        }\n        #play-video:hover {\n            fill: rgb(247, 247, 247) !important;\n        }\n        #play-circle:hover{\n            background-color: rgba(0, 0, 0, .3) !important;\n        }\n    </style>\n</head>\n<body>\n    <nav>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"39\" height=\"39\" viewBox=\"0 0 39 39\"><path fill=\"#00E676\" d=\"M10.7 32.8l.6.3c2.5 1.5 5.3 2.2 8.1 2.2 8.8 0 16-7.2 16-16 0-4.2-1.7-8.3-4.7-11.3s-7-4.7-11.3-4.7c-8.8 0-16 7.2-15.9 16.1 0 3 .9 5.9 2.4 8.4l.4.6-1.6 5.9 6-1.5z\"></path><path fill=\"#FFF\" d=\"M32.4 6.4C29 2.9 24.3 1 19.5 1 9.3 1 1.1 9.3 1.2 19.4c0 3.2.9 6.3 2.4 9.1L1 38l9.7-2.5c2.7 1.5 5.7 2.2 8.7 2.2 10.1 0 18.3-8.3 18.3-18.4 0-4.9-1.9-9.5-5.3-12.9zM19.5 34.6c-2.7 0-5.4-.7-7.7-2.1l-.6-.3-5.8 1.5L6.9 28l-.4-.6c-4.4-7.1-2.3-16.5 4.9-20.9s16.5-2.3 20.9 4.9 2.3 16.5-4.9 20.9c-2.3 1.5-5.1 2.3-7.9 2.3zm8.8-11.1l-1.1-.5s-1.6-.7-2.6-1.2c-.1 0-.2-.1-.3-.1-.3 0-.5.1-.7.2 0 0-.1.1-1.5 1.7-.1.2-.3.3-.5.3h-.1c-.1 0-.3-.1-.4-.2l-.5-.2c-1.1-.5-2.1-1.1-2.9-1.9-.2-.2-.5-.4-.7-.6-.7-.7-1.4-1.5-1.9-2.4l-.1-.2c-.1-.1-.1-.2-.2-.4 0-.2 0-.4.1-.5 0 0 .4-.5.7-.8.2-.2.3-.5.5-.7.2-.3.3-.7.2-1-.1-.5-1.3-3.2-1.6-3.8-.2-.3-.4-.4-.7-.5h-1.1c-.2 0-.4.1-.6.1l-.1.1c-.2.1-.4.3-.6.4-.2.2-.3.4-.5.6-.7.9-1.1 2-1.1 3.1 0 .8.2 1.6.5 2.3l.1.3c.9 1.9 2.1 3.6 3.7 5.1l.4.4c.3.3.6.5.8.8 2.1 1.8 4.5 3.1 7.2 3.8.3.1.7.1 1 .2h1c.5 0 1.1-.2 1.5-.4.3-.2.5-.2.7-.4l.2-.2c.2-.2.4-.3.6-.5s.4-.4.5-.6c.2-.4.3-.9.4-1.4v-.7s-.1-.1-.3-.2z\"></path></svg>\n        <a href=\"\" style=\"color:#fff; text-decoration: none; font-weight: 510; font-size: 13.9px; vertical-align: top; line-height: 2.8; margin-left: 0.7%;\">WHATSAPP WEB</a>\n    </nav>\n    <div style=\"display: block; position: absolute; background-color: #fff; height: 91.9%; width: 48%; margin-top: 6.9%; box-shadow: 0 17px 50px 0 rgb(0 0 0 / 19%), 0 12px 15px 0 rgb(0 0 0 / 24%); border-radius: 3px;\" >\n        <div style=\"display: flex; width: 100%; height: 50%;\">\n            <div style=\" margin-top: 6.5%; margin-left: 5.9%; font-size: 28px; font-weight: 300; line-height: normal; color: #525252; width: 60%; height: 40%;\">Para usar WhatsApp en tu computadora:\n                <ul style=\"list-style: decimal; margin-left: 4.5%; width: 90%;\">\n                    <li style=\"color: #4a4a4a; font-size: 20px; line-height: 28px; margin-top: 7.4%; margin-bottom: 2.9%;\">Abre WhatsApp en tu teléfono</li>\n                    <li style=\"color: #4a4a4a; font-size: 20px; line-height: 28px; margin-bottom: 2.9%;\">Toca Menú o Configuración y selecciona WhatsApp Web</li>\n                    <li style=\"color: #4a4a4a; font-size: 20px; line-height: 28px; margin-bottom: 2.9%;\">Cuando se active la cámara, apunta tu teléfono hacia esta pantalla para escanear el código</li>\n                </ul>\n                <p style=\"color: #009688; font-size: 14px; line-height: 1; margin-top: 10%; cursor: pointer; font-family: Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif; font-weight: 400;\">¿Necesitas ayuda para comenzar?</p>\n            </div>\n            <div style=\"width: 35%; display: flex; flex-direction: column; align-items: center;\">\n                <div id=\"img\" style=\"display: flex; align-items: center; justify-content: center; height: 264px; width: 264px; background-repeat: no-repeat; background-position: center; background-size: 300px 300px; margin-top: 20.2%; margin-right: 10%;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"64\" height=\"64\" viewBox=\"0 0 64 64\"><path fill=\"#FFF\" d=\"M6.525 43.936a29.596 29.596 0 0 1-3.039-13.075C3.494 14.568 16.755 1.313 33.05 1.313c7.904.004 15.328 3.082 20.91 8.666 5.581 5.586 8.653 13.01 8.65 20.907-.007 16.294-13.266 29.549-29.558 29.549a29.648 29.648 0 0 1-12.508-2.771L1.391 62.687l5.134-18.751z\"></path><path fill=\"#123033\" d=\"M50.801 13.135c-4.739-4.742-11.039-7.354-17.752-7.357-13.837 0-25.094 11.253-25.099 25.085a25.039 25.039 0 0 0 3.349 12.541l-3.56 12.999 13.304-3.488a25.084 25.084 0 0 0 11.996 3.054h.011c13.83 0 25.088-11.256 25.095-25.087.002-6.703-2.607-13.005-7.344-17.747zM33.05 51.733h-.008a20.866 20.866 0 0 1-10.62-2.906l-.762-.452-7.894 2.07 2.108-7.694-.497-.789a20.802 20.802 0 0 1-3.189-11.097c.004-11.496 9.361-20.85 20.87-20.85a20.73 20.73 0 0 1 14.746 6.115 20.733 20.733 0 0 1 6.104 14.752c-.006 11.497-9.363 20.851-20.858 20.851z\"></path><path fill=\"#123033\" d=\"M25.429 19.26a8.65 8.65 0 0 0-1.028.011 2.352 2.352 0 0 0-.95.255c-.221.114-.427.277-.75.582-.305.288-.481.54-.668.782a6.974 6.974 0 0 0-1.443 4.291l.001.003a8.243 8.243 0 0 0 .844 3.607c1.043 2.307 2.763 4.746 5.035 7.008a24.676 24.676 0 0 0 1.657 1.6 24.145 24.145 0 0 0 9.814 5.229s.751.179 1.391.218c.021.001.04.003.061.003a9.207 9.207 0 0 0 1.422-.033 5.086 5.086 0 0 0 2.129-.59c.423-.225.623-.337.978-.561 0 0 .11-.072.319-.23.345-.257.558-.438.845-.736.211-.22.394-.479.534-.772.2-.417.401-1.213.481-1.874.061-.505.042-.781.036-.952-.011-.275-.238-.558-.487-.678l-1.486-.668s-2.222-.967-3.581-1.587a1.278 1.278 0 0 0-.452-.104c-.341-.021-.723.068-.966.324v-.004c-.013-.001-.182.145-2.031 2.385-.102.122-.341.387-.754.362a1.086 1.086 0 0 1-.185-.029 3.402 3.402 0 0 1-.49-.17c-.316-.134-.427-.185-.643-.278l-.013-.006a15.361 15.361 0 0 1-4.013-2.556 15.88 15.88 0 0 1-.927-.885c-1.074-1.041-1.953-2.148-2.607-3.24-.035-.06-.09-.146-.15-.242-.107-.174-.225-.381-.262-.523-.095-.376.157-.678.157-.678s.622-.68.911-1.05c.278-.356.518-.704.671-.952.301-.484.39-.982.238-1.37a216.767 216.767 0 0 0-2.219-5.215c-.156-.339-.598-.589-1.005-.636a6.284 6.284 0 0 0-.414-.041\"></path></svg></div>\n                <div style=\"text-align: center; margin-right: 10%; width: 90%;\">\n                    <label><input type=\"checkbox\" name=\"rememberMe\" checked=\"\" style=\"margin-right: 1%;\">Mantener sesión activa</label>\n                </div>\n            </div>\n        </div>\n        <div style=\" display: flex; height: 50%; width: 100%; justify-content: center; align-items: center; background-color: #f9f9f9;\">\n            <div alt=\"\" style=\" width: 70%; height: 70%; display: flex; justify-content: center; align-items: center;background: url(\'https://web.whatsapp.com/img/qr-video_07f8d2958696dceefa4f4676aeb4663e.jpg\'); background-repeat: no-repeat; background-position: center; \" >\n                <div id=\"play-circle\" style=\"border-radius: 50%; background-color: rgba(0, 0, 0, .45); height: 80px; width: 80px; display: flex; align-items: center; justify-content: center; \"><svg  xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"34\" viewBox=\"0 0 28 34\" style=\"margin-left: 4.7px; cursor: pointer;\"><path id=\"play-video\" fill=\"#FFF\" d=\"M1 4.983v24.034a2.982 2.982 0 0 0 4.564 2.53L24.792 19.53a2.981 2.981 0 0 0 0-5.058L5.563 2.454A2.983 2.983 0 0 0 1 4.983z\"></path></svg></div>\n            </div>\n        </div>\n    </div>\n    <script type=\"text/javascript\">\n        var socket = io.connect(\'http://localhost:3000\', {\'forceNew\': true});\n        socket.on(\'sendQRcode\', function(data){\n            refreshQrcode(data);\n        });\n        function refreshQrcode(qr) {\n            document.getElementById(\'img\').style.backgroundImage = \`url(${qr})\`;\n        }\n    </script>\n</body>\n</html>';
    //fs.writeFile('./src/cache/test.html', html, function(err){ if (err) { console.error(err); }}); // Crear archivo de html

    qrcode = require('qrcode');

    server = http.createServer((req, res) => {
        res.status = 200;
        res.write(html);
        res.end();
    })

    io = require('socket.io')(server);

    server.listen(3000, function () {
        console.log('success conected in the port 3000.\nEspera un momento . . .');
    })
}

function verifyFolders() {
    const folders = ['data', 'img', 'media', 'cache'];
    const files = ['restart', 'restartAll', 'start'];
    const fileCodes = [
        `@echo off
        title Restart data
        echo Usted esta seguro que desea resetear todos los datos incluida la sesion de whatsapp?
        pause
        del ./src/data/date.json
        del ./src/data/num.json','',''];`,

        `@echo off
        title Restart data
        echo Usted esta seguro que desea resetear todos los datos incluida la sesion de whatsapp?
        pause
        del ./src/data/date.json
        del ./src/data/num.json
        del ./src/data/session.json`,

        `@echo off
        title Restart data
        echo Usted esta seguro que desea resetear todos los datos incluida la sesion de whatsapp?
        pause
        del ./src/data/date.json
        del ./src/data/num.json
        del ./src/data/session.json`
    ]

    if (!fs.existsSync('./src')) {
        fs.mkdir(path.join(__dirname, 'src'), (err) => {
            if (err) {
                return console.error(err);
            }
        });
    }

    for (i = 0; i < 4; i++) {
        if (!fs.existsSync(`./src/${folders[i]}`)) createFolder(folders[i]);
    }

    for (i = 0; i < 3; i++) {
        if (!fs.existsSync(`./${files[i]}`)) createFile(files[i], fileCodes[i]);
    }
}

function verifyDay() {
    let lastDate;

    try {
        lastDate = require('./src/data/date.json');
    } catch {
        lastDate = 0;
    } finally {
        console.log("Hoy es " + today + ".");
    }

    if (today != lastDate) return true;
    else return false;
}

function hideConsole() {
    let powershellScript = 'Add-Type -Name Window -Namespace Console -MemberDefinition \'\n[DllImport(\"Kernel32.dll\")]\npublic static extern IntPtr GetConsoleWindow();\n\n[DllImport(\"user32.dll\")]\npublic static extern bool ShowWindow(IntPtr hWnd, Int32 nCmdShow);\n\'\n\n$consolePtr = [Console.Window]::GetConsoleWindow()\n#0 hide\n[Console.Window]::ShowWindow($consolePtr, 0)\n';
    let workingDir = process.cwd();
    let tempfile = `${workingDir}\\temp.ps1`;
    fs.writeFileSync(tempfile, powershellScript);

    // a little convoluted to get around powershell script execution policy (might be disabled)
    require('child_process').execSync(`type .\\temp.ps1 | powershell.exe -noprofile -`, {
        stdio: 'inherit'
    });
    fs.unlinkSync(tempfile); //delete temp file

    console.log('The console was successfully hidden.');
}

async function convertQR(qr) {
    QR = await qrcode.toDataURL(qr);
}

function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function open(url) {
    opn(url);
}

async function stop() {
    console.log('Fin de la ejecucion.');
    await new Promise(resolve => setTimeout(resolve, 1000));
    process.exit(0);
};

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
    //hideConsole();
    verifyFolders();

    if (verifyDay()) {
        console.log('Ejecuta codigo');
        client();
    } else {
        console.log("Ya les fueron deseados los buenos dias a my love");
        stop();
    }
}

//main();
configure();
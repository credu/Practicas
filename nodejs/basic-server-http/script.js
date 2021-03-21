//const qrcode = require('qrcode');

let html;
let qr = '1@OWGaMLm6dfv8SixrmOOZvvyeLKItQqWzlI8X/bmWz8mTkj9pUBTpIbRkDUiMq+A/F1IXTVIWWVpprA==,1I+VdneHDZKLLUPTDBQSm3hYuXyL0IN9c1j5qcNy9Ws=,tjY9aFRRtJWAtpYdeWGehA==';
let QR;

(async () => {
    QR = await require('qrcode').toDataURL(qr);
    html = '<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>QR code</title>\n    <link id=\"favicon\" rel=\"shortcut icon\" type=\"image/png\" href=\"https://web.whatsapp.com//img/favicon_c5088e888c97ad440a61d247596f88e5.png\" src=\"/img/favicon_c5088e888c97ad440a61d247596f88e5.png\">\n    <style>\n        * \n        {\n            margin: 0;\n            padding: 0;\n        }\n        body\n        {\n            display: flex;\n            height: 100vh;\n            align-items: center;\n            justify-content: center;\n        }\n        img \n        {\n            height: 30%;\n        }\n    </style>\n</head>\n<body>\n    <img id=\"img\" src=\"'+ QR +'\">\n</body>\n</html>'
})();
        

const http = require('http');

const server = http.createServer((req, res) => {
    res.status = 200;
    res.write('html');
    res.end();
})

server.listen(3000, () => {
    console.log('Server on port 3000');
    require('opn')('http://localhost:3000'); //Opens the url in the default browser
})

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms ));
}
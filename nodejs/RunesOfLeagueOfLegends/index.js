const request = require('request');

let url = 'https://www.metasrc.com/5v5/na/champion/sylas/mid';
let urlBody = "";

request({
    uri: url,
}, function (error,response,body) {
    //console.log(body);
    urlBody = `${body}`;

    var m,
    urls = [],
    rex = /<image.*?href="([^">]*\/([^">]*?))".*?>/g;

    while ( m = rex.exec( urlBody ) ) {
        urls.push( m[1] );
    }

    //console.log(urlBody);
    console.log( urls );
})

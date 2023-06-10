const fs = require('fs');

const newFile = process.argv[2];

if (newFile === undefined) {
    return console.error("The syntax of the command is incorrect.");
}

try {
    fs.copyFileSync(__dirname + "/index.js", __dirname + `/bases/${getMaxNumberOfNames()}-${newFile}.js`, fs.constants.COPYFILE_EXCL, (newFile) => {
        console.log(`New file created`)
    });
    //fs.writeFileSync(__dirname + '/index.js', '', "utf-8")
} catch (error) {
    console.log(error)
}

function getMaxNumberOfNames() {
    return pad( parseInt( fs.readdirSync(__dirname + "/bases").at(-1) ) + 1, 2 );
}

function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}
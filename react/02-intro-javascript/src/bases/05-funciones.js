
// funciones en JS
function saludar( nombre ) {
    return `Hola soy, ${ nombre }`;
}

const saludar2 = ( nombre ) => {
    return `Hola soy, ${ nombre }`;
}

const saludar3 = ( nombre ) => `Hola soy, ${ nombre }`;

const saludar4 = () => `Hola mundo`;

console.log(saludar('Goku'));

console.log(saludar2('Vegeta'));

console.log(saludar3('Trunks'));

console.log(saludar4());

const getUser = () => ({
    uid: 'ABC123',
    username:'EL_PAPI'
});


console.log( getUser() );

// Tarea
// 1 transformar a una funcion de flecha
// 2 tiene que retornar un objeto implicito
// 3 Pruebas
const getUsuarioAtivo = ( nombre ) => ({
    uid: 'ABC567',
    username: nombre
});

const usuarioActivo = getUsuarioAtivo('Yisus');
console.log( usuarioActivo );
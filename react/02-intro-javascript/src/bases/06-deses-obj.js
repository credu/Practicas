// Desestructuracion
// Asignacion DEsustructurante
const persona = {
    nombre: 'tony',
    edad: 45,
    clave: 'ironman'
}

const { nombre, edad, clave } = persona;

console.log( nombre );
console.log( edad );
console.log( clave );

const Context = ( {clave, nombre, edad, rango = '(Capitan)'} ) => {

    // console.log(nombre, edad, rango);

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.12,
            lng: -12.32
        }
    }

}

const {nombreClave, anios, latlng: {lat, lng}} = Context( persona );

console.log(nombreClave, anios);
console.log(lat, lng)
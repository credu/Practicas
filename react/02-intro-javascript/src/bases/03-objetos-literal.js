const persona = {
    nombre: 'Jesus',
    apellido: 'Mendoza',
    edad: 5,
    direcion: {
        ciudad: 'New York',
        zip: 553312521,
        lat: 14.32,
        lng: 34.92
    }
};


const persona2 = {...persona};
persona2.nombre = 'Peter'

console.log(persona);
console.log(persona2);
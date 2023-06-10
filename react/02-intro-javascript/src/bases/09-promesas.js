import { getHeroeById, getHeroeByOwner } from "./bases/08-imp-exp";

// const promesa = new Promise( (resolve, reject) => {
//     setTimeout( () => {
//         const heroe = getHeroeById(2);
//         console.log(heroe);

//     }, 2000);
// });

const getHeroeByIdAsync = ( id ) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const p1  = getHeroeById( id );
            if ( p1 ) {
                resolve( p1 );
            }
            else {
                reject("No se pudo encontrar al heroe");
            }
        }, 1000);
    });
}

getHeroeByIdAsync(3)
    .then( console.log )
    .catch( console.error );
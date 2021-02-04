import { getHeroeByID } from './08-imp-exp'

// const promesa = new Promise( (resolve, reject) => {

//     setTimeout(() => {
//         const p1 = getHeroeByID(2);
//         resolve ( p1 );
//         // reject( 'No se pudo encontrar el heroe' );
//     }, 2000);
// });

// promesa.then( (heroe) => {
//     console.log('heroe', heroe)
// })
// .catch( err => console.warn( err ) );

const getHeroeByIDAsync = ( id ) => {
    return new Promise( (resolve, reject) => {

        setTimeout(() => {
            const p1 = getHeroeByID(id);
            if (p1) {
                resolve ( p1 );
            }
            else {
            reject('No se pudo encontrar el heroe');
            }
        }, 1000);
    });
}

getHeroeByIDAsync(3)
.then(console.log)
.catch(console.warn);
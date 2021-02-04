// import { heroes } from './data/heroes';
// import { heroes } from "./data/heroes";
//import heroes from './data/heroes';
//import heroes from './data/heroes';
import heroes from '../data/heroes';

// const getHeroeByID = (id) => {
//     return heroes.find( ( heroe ) => {
//         if ( heroe.id === id ) {
//             return true;
//         } else {
//             return false;
//         }
//     });
// }

// const getHeroeByID = (id) => {
//     return heroes.find( (heroe) => heroe.id === id);
// }

// const getHeroeByID = (id) => {
//     return heroes.find( (heroe) => heroe.id === id);
// }

export const getHeroeByID = (id) => heroes.find( (heroe) => heroe.id === id);

////console.log( getHeroeByID(2));


// find? filter
export const getHeroeByOwner = (owner) => heroes.filter( (heroe) => heroe.owner === owner);

////console.log( getHeroeByOwner('Marvel'));
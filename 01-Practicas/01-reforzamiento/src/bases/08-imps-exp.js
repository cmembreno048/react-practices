import heroes, {owners} from "../data/heroes.js";

// console.log(owners);

const getHeroeById = (id) => 
    heroes.find( 
        (heroe) => heroe.id === id
    );

// console.log(getHeroeById(3));



const getHeroeByOwner = (owner) => heroes.filter( (heroe) => heroe.owner === owner );

// console.log(getHeroeByOwner('DC'));

export {
    getHeroeById,
    getHeroeByOwner,
}


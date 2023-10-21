import { getHeroeById } from "./bases/08-imps-exp.js";

const getHeroeByIdAsync = (id) => {
    return new Promise( (resolve, reject) => {

        setTimeout(() => {
            const heroe = getHeroeById(id);
            if (heroe) {
                resolve(heroe);   
            }else{
                reject('No se pudo encontrar el heroe.');
            }
        }, 1000);

    } );
};

getHeroeByIdAsync(2)
    .then(console.log )
    .catch(console.warn)
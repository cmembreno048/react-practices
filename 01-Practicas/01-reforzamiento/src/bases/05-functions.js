
const saludar = (nombre) => {
    return `Hola ${nombre}`;
}

const saludar3 = (nombre) => `Hola ${nombre}`

const saludar4 = () => `Hola mundo`

console.log(saludar('Goku'));
console.log(saludar3('insecto'));
console.log(saludar4('insecto'));


const getUser = () => ({
        uid: 'ABC123',
        username: 'El_papi',
    })


console.log(getUser());

// Trasnforma a funcion flecha

const getUsuarioActivo = (nombre) => ({
        uid: 'ABC123',
        username: nombre,
    })

const usuarioActivo = getUsuarioActivo('Goku');
console.log(usuarioActivo);
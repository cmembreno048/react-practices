

const persona = {
    nombre: 'tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'soldado',
};


// console.log(nombre);
// console.log(edad);
// console.log(clave);
const myContext = ( {clave, nombre, edad, rango = 'Capitán'} ) => {
    return{
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat: 14.234234,
            lng: -12.234234,
        }
    }
}

const { nombreClave, anios, latlng:{lat, lng} } = myContext( persona );
console.log(nombreClave, anios, lat, lng);




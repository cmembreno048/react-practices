const persona = {
    nombre: 'Cristian',
    apellido: 'Membreño',
    edad: '25',
    direccion: {
        ciudad: 'hellin',
        lat: '34.3434',
        lng: '12.34234',
        zip: '1234',
    }
}

const persona2 = { ...persona }
persona2.nombre = "Samuel";

console.log(persona);
console.log(persona2);
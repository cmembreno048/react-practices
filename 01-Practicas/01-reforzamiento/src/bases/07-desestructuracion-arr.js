

const personajes = ['goku', 'vegeta', 'trunks']

const [p1] = personajes;

console.log(p1);

const retornaArreglo = () =>{
    return['ABC', '123']
}

const [letras, numeros] = retornaArreglo();

console.log(letras, numeros);


//tarea

const useState = (valor) => {
    return [valor, () =>{ console.log('hola mundo')}]
}

const [nombre, setNombre] = useState('goku')

console.log(nombre);
setNombre();
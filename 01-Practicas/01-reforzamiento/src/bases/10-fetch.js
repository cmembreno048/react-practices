


const API_KEY = 'https://api.giphy.com/v1/gifs/random?api_key=gtCyIRcw6b7vUXXIvzE53bbcx2gnDWYR';

const peticion = fetch(API_KEY);

peticion
    .then( resp => resp.json())
    .then(({data}) => {
        const {url} = data.images.original;
        document.write(`<img src="${url}" />`);
    })
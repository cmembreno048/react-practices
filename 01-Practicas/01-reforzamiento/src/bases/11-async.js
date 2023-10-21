


const getImage = async () => {

    const API_KEY = 'https://api.giphy.com/v1/gifs/random?api_key=gtCyIRcw6b7vUXXIvzE53bbcx2gnDWYR';
    const respuestas = await fetch(API_KEY);
    const {data} = await respuestas.json();
    const {url} = data.images.original;
    document.write(`<img src="${url}" />`);

}

getImage()
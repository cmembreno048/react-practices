import  {useEffect, useState} from 'react'
import './app.css'
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${word}?size=50&color=red&json=true`


export function App(){

    const [fact, setFact] = useState();
    const [imageURL, setImageUrl] = useState();



    useEffect( () => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
        .then(res => res.json())
        .then(data => {
            const {fact} = data;
            setFact(fact)
        });
    }, [] )

    useEffect(() => {
        if (!fact) return  
        const word = fact.split(" ", 1).join(" ")

        fetch(`https://cataas.com/cat/says/${word}?size=50&color=red&json=true`)
        .then(res => res.json())
        .then(response => {
            const { url } = response
            // this API dont work anymore
            setImageUrl('https://cataas.com/cat')
        })
        
    }, [fact])


    return(
        <main>
            <h1>App de gatitos</h1>
            {fact && <p>{fact}</p>}
            {imageURL && <img src={imageURL} alt={`usign a generated image from ${fact}`} />}
        </main>
    )
}

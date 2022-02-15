//, FETCH

// vamos a usar la api de GIPHY
/*
.1) Creo una API
.2) La que cree para este curso tiene una
> API_KEY DH96tj9GGDX97eKtC3GexxraklJk4yDi 

.3) Vamos a esta URL
?   https://developers.giphy.com/docs/api/endpoint#random

.4) Copiamos el URL de Gif URL
?   api.giphy.com/v1/gifs/random

Asi se veria el URL completo pasandole la api_key por URL
?   https://api.giphy.com/v1/gifs/random?api_key=DH96tj9GGDX97eKtC3GexxraklJk4yDi
 */

// salvamos la API KEY en una constante 
const API_KEY = "DH96tj9GGDX97eKtC3GexxraklJk4yDi";

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

peticion
    .then(res => res.json())
    .then(({data})=> {
        const {url} = data.images.original;
        
        const img = document.createElement('img');
        img.src = url;
        

        document.body.append( img );
    })
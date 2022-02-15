//, ASYNC . AWAIT

// api key de GIPHY
const API_KEY = "DH96tj9GGDX97eKtC3GexxraklJk4yDi";


/* 
const getImagenPromesa = () => {
	return new Promise((res, rej) => {
		res("https://reactrouter.com/web/guides/quick-start");
	});

};

getImagenPromesa().then(console.log)
 */
//. ASYNC nos permite crear lo mismo de manera mas simple
/// solo al poner el async, convierto el return en una promesa

//. El AWAIT nos ayuda a trabar el codigo como si fuera sincrono
// . se pone delante de una linea que devuelve una promesa, y la convierte en RESPONSE

const getImage = async () => {
    
    try {
        const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);
        const {data} = await respuesta.json();
    
        const { url } = data.images.original;
        console.log(url);
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
        
    } catch (error) {
        // manejoi del error
        console.error(error);
    }
}

getImage();

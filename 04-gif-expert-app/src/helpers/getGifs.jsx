// hago un metodo para traer los gifs de la API
export const getGifs = async (category) => {
	const url = `https://api.giphy.com/v1/gifs/search?api_key=DH96tj9GGDX97eKtC3GexxraklJk4yDi&q=${encodeURI(
		category
	)}&limit=15`;

	const resp = await fetch(url);

	const { data } = await resp.json();

	// esto me devuelve un array de objetos con las propiedades que necesito
	const gifs = data.map((gif) => {
		return {
			id: gif.id,
			title: gif.title,
			url: gif.images?.downsized_medium.url,
		};
	});

	return gifs;
};

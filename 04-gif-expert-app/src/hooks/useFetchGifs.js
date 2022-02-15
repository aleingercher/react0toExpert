import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

const useFetchGifs = ( category ) => {
	const [response, setResponse] = useState({
		data: [],
		loading: true,
	});

    useEffect(() => {
        getGifs(category)
			.then(imgs => {
				setTimeout(() => {
					setResponse({
						data: imgs,
						loading: false
					})
				}, 1000);
			})

    }, [])

	return response;
};

export default useFetchGifs;

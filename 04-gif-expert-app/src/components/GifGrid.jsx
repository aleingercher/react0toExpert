import useFetchGifs from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
import React from 'react';


export const GifGrid = ({ category, index }) => {
	const { loading, data: images } = useFetchGifs( category);

	return (
		<>
			<h3 className='animate__animated animate__fadeIn'>{category}</h3>

			{loading && <p className='animate__animated animate__flash'>El componente esta cargando</p> }
			<div className='card-grid'>
				{images.map((img) => {
					return <GifGridItem key={img.id} {...img} />;
				})}
			</div>
		</>
	);
};

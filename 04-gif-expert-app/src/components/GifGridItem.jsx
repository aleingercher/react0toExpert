import React from 'react';

/**
 * Componente que renderiza una card
 * @component
 * @param {Object} props
 * @param {string} [props.id] id de la card
 * @param {string} [props.title] titulo para mostrar
 * @param {string} props.url url relacionada
 * @param {string} props.key url relacionada
 */
export const GifGridItem = ({ id, title, url }) => {
	return (
		<div className='card animate__animated animate__fadeIn'>
			<img src={url} alt={title} />
			<p className=''>{title}</p>
		</div>
	);
};

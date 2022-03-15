import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

/**
 * clase padre de la pagina
 * @component
 * @returns {JSX}
 * @example 
 * <h2>Gif Expert App</h2>
	<AddCategory setCategories={setCategories} />
	<hr />
	{categories.map((category) => (
	<GifGrid category={category} key={category} />
	))}
 * 
 */
export const GifExpertApp = () => {
	// const categories = ['One Punch', 'Samurai X', 'Dragon Ball']
	/**
	 * @const categories estado que maneja lo que busco para los gifs
	 */
	const [categories, setCategories] = useState(['ariana grande']);

	// const handleAdd = (e) => {
	// 	// setCategories([... categories, e.target.innerHTML])
	// 	setCategories((categoria) => [...categoria, 'Nuevo Elemento', e.target.innerHTML]);
	// };

	return (
		<>
			<h2>Gif Expert App</h2>
			{/* le mando la referencia al setter */}
			<AddCategory setCategories={setCategories} />
			<hr />
			{categories.map((category) => (
				<GifGrid category={category} key={category} />
			))}
		</>
	);
};

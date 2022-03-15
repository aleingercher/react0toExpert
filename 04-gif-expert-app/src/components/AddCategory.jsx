import React, { useState } from "react";
import PropTypes from 'prop-types';

/**
 * componente que agrega la categoria
 * @component
 * @param {Object} props 
 * @param {function} props.setCategories funcion para setear las categorias
 * @example
 * <>
	<form action="" onSubmit={handleSubmit}>
		<input
			type="text"
			value={inputValue}
			onChange={handleInputChange}
		/>
	</form>
</>
 * @returns {jsx}
 */
export const AddCategory = ({ setCategories }) => {

	const [inputValue, setInputValue] = useState("");

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		
		if (inputValue.trim().length > 2) {
			setCategories(cat => [inputValue, ...cat]);
			setInputValue('')	
		} 
		
	};

	// const fechaDeHoy = (new Date()).getDate();

	return (
		<>
			<form action="" onSubmit={handleSubmit}>
				<input
					type="text"
					value={inputValue}
					onChange={handleInputChange}
				/>
			</form>
		</>
	);
};


AddCategory.propTypes = {
	setCategories: PropTypes.func.isRequired,
}
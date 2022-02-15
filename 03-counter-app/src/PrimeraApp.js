import React from "react";
import PropTypes from "prop-types";

const PrimeraApp = ({ primera, tercera = "texto default" }) => {
	console.log(primera);

	const imprimir = {
		nombre: "fer",
	};

	return (
		<>
			<h1> {JSON.stringify(imprimir, null, 3)} </h1>

			<h2> {primera} </h2>
			<h2> {tercera} </h2>
			<h1>Hola mundito</h1>
		</>
	);
};

// aca defino el tipo que deberia tener cada prop
PrimeraApp.propTypes = {
	primera: PropTypes.string,
	segunda: PropTypes.number.isRequired,
};

PrimeraApp.defaultProps = {
	tercera: "esta es otra forma de pasar un valor por default",
};

export default PrimeraApp;

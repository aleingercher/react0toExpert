import React from 'react';
// para renderizar usas el ReactDOM
import ReactDOM from 'react-dom';
import './index.css';
import CounterApp from './CounterApp';


const divRoot = document.querySelector('#root');

console.log(divRoot);

// ahora invoco al metodo de reactDOM.render
// se utiliza en vez del document.body.append

//              contenido, destino
ReactDOM.render( <CounterApp  />, divRoot);
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import heroes from './data/heroes';
import { getHeroesByOwner } from './base/08-imp-exp';

const CounterApp = ({ value = 10 }) => {

    // aca hago un state paradspfadsofia
    const [count, setCount] = useState(value);


    return (

        <div className="container mt-4 d-flex flex-column align-items-center">
            <h1>CounterApp</h1>  

            <button onClick={()=> setCount(count + 1)} 
                    className="btn btn-warning"> +</button>

            <h2 className="fs-1 mt-2"> { count }</h2>

            <button onClick={()=> setCount(count - 1)}
                    className="btn btn-warning"> -</button>

            <button onClick={()=> setCount( value)}
                    className="btn btn-warning mt-5"> reset </button>

            <h2> valor inicial: { value } </h2>
        </div>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp

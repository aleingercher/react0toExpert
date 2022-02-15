import { useState } from 'react'

const useCounter = (initialState = 10, step = 1) => {
  const [state, setState] = useState(initialState)  

    const increment = ()=>{
        setState(state + step)
    }
    
    const decrement = ()=>{
        setState(state - step)
    }

    const reset = ()=> {
        setState(initialState)
    }

    return {
        decrement,
        increment,
        reset,
        state,
        step
    }

}

export default useCounter
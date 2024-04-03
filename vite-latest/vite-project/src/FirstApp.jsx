import PropTypes from 'prop-types'
import { useState } from 'react'

const FirstApp=({value})=>{
    const [counter,setCounter]=useState(value)

    const handleAdd=()=>{
        setCounter(counter + 1)
    }

    const handleSubstract=()=>{
        setCounter(counter-1)
    }

    const handleReset=()=>{
        setCounter(0)
    }

    return (
        <>
        <h1>counter</h1>
        <span>{counter}</span>
        <button onClick={()=>handleAdd()}>+1</button>
        <button onClick={()=>handleSubstract()}>-1</button>
        <button onClick={()=>handleReset()}>Reset</button>
        </>   
    )
}

FirstApp.propTypes={
    title:PropTypes.string.isRequired,
    value:PropTypes.number.isRequired
}

FirstApp.defaultProps={
    title:'No hay titulo',
    value:0
}

// const FirstApp=({title,sum})=>{
//     return (
        
//         <>
//         <h1>{title}</h1>
//         <span>{sum}</span>
//         </>   
//     )
// }





// const FirstApp=(props)=>{
//     return(
//         <>
//         <h1>{props.title}</h1>
//         <span>10</span>
//         </>
//     )
// }


// const title ='First App';
// const FirstApp=()=>{
//     return(
//         <>
//         <h1>{title}</h1>
//         <span>10</span>
//         </>
//     )
// }
export default FirstApp



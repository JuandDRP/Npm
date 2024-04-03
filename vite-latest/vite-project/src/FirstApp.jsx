import PropTypes from 'prop-types'

const FirstApp=({title,sum})=>{
    return (
        
        <>
        <h1>{title}</h1>
        <span>{sum}</span>
        </>   
    )
}

FirstApp.propTypes={
    title:PropTypes.string.isRequired,
    sum:PropTypes.number.isRequired
}

FirstApp.defaultProps={
    title:'No hay titulo',
    sum:300
}



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



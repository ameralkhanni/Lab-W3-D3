import React from 'react'
interface ProgramersPro{

    name:string,
    programmingla:string,
    experYears:number,
    company:string

}
function Programers(props:ProgramersPro) {
  return (
    <div className='sty'>
        <hr></hr>
        <h4>Name:{props.name}</h4>
        <p>programmingla:{props.programmingla}</p>
        <p>Expernic Years: {props.experYears}</p>
        <p>company: {props.company}</p>
    </div>
    
  )
}

export default Programers
import React from 'react'
interface ServicesPro{

    tyServices:string,
    prise:number,
    

}
function Services(props:ServicesPro) {
  return (
    <div className='sty'>
        <hr></hr>
        <h2>Services</h2>
        <h4>{props.tyServices}</h4>
        <p>{props.prise}</p>
    </div>
    
  )
}

export default Services
import React from 'react'
interface CompaniesPro{

    nameCompany:string,
    NumberEmployees:number,
    Years:number,
    

}
function Companies(props:CompaniesPro) {
  return (
    <div className='sty'>
        <hr></hr>
        <h4 className='efe'>{props.nameCompany}</h4>
        <p className='wwe'>Number of Employees:{props.NumberEmployees}</p>
        <p className='wwe'>Date of Establishment{props.Years}</p>
        <hr></hr>
    </div>
    
  )
}

export default Companies

import './App.css'
import Programers from './component/Programers'
import Companies from './component/Companies'
import Services from './component/Services'
function App() {

  return (
    <div className="App">
      <Companies nameCompany={'TWiG'} NumberEmployees={3} Years={1999}/>


      <Programers name={"ahmad"} programmingla={"css"} experYears={5} company={"sdaya"}/>
      

      <Programers name={"ali"} programmingla={"html"} experYears={3} company={"armco"}/>
      

      <Programers name={"fahd"} programmingla={"js"} experYears={6} company={"alrha"}/>
      <Services tyServices={'new program'} prise={333} />

      <Companies nameCompany={'STC'} NumberEmployees={4} Years={2002}/>



<Programers name={"khlied"} programmingla={"java"} experYears={5} company={"CTS"}/>


<Programers name={"seead"} programmingla={"python"} experYears={2} company={"STC"}/>


<Programers name={"hatm"} programmingla={"jt"} experYears={8} company={"Viose"}/>
<Programers name={"ali"} programmingla={"css and html"} experYears={2} company={"Tuwaiq"}/>


      <Services tyServices={'add new Update'} prise={213} />

      <Companies nameCompany={'Mobily'} NumberEmployees={3} Years={2000}/>



<Programers name={"anas"} programmingla={"java"} experYears={9} company={"HP"}/>


<Programers name={"ahmad"} programmingla={"html"} experYears={3} company={"tre"}/>


<Programers name={"mohameed"} programmingla={"css  "} experYears={2} company={"STC"}/>


      <Services tyServices={'U&S progams'} prise={2312} />




     



      


    </div>
  )
}

export default App
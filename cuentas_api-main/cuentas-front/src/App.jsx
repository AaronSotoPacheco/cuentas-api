import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ItemComponent from './components/itemComponent'
import Button from 'react-bootstrap/Button';

function App() {
  var x=0
  //react hooks
  let [contador, setContador] = useState(0) 
  let [arr, setArr] = useState([])
let clickBtoton=()=>{
setContador(contador+1)
  console.log(x)
  setArr([...arr, contador])
}
  return (
    <>
     <h1>Contador</h1>
     <p>{contador}</p>
     <Button variant="dark">Dark</Button> 
     <button onClick={clickBtoton}>Aumentar</button>
     {arr.map((item)=>(<ItemComponent key={item}/>))}
     <ItemComponent/>

    </>
  )
}

export default App

import React, { useState } from 'react'
import Products from './Products'


function App() {
  // var [a, b] = useState(69);
  const [mode,setMode]=useState("Light")
  let name = "Hem Kishore Pradhan"
  const [count, setCount] = useState(0)
  const [user, setUser] = useState({
    name: "Hem Kishore Pradhan",
    age: 23,
    nickname: "Silver Anon",
    email:"hem123@gmail.com"
    
  })
    const toggleMode = () => {
    setMode((prevMode) => (prevMode === "Light" ? "Dark" : "Light"));
  };
  
  return (
    <div className='main' style={
      {
        backgroundColor: mode === "Light" ? "white" :"black",
        color : mode==="Light"? "black" : "white"
        
      }
    }>
      <Products age="23" data={{ age: "23", name: "Silver Anon" }}></Products>
      
      <h1>Hello {name}</h1>
      <h1>
        Count: {count}
        <button onClick={() => {
          setCount(count+1)
        }} style={{color:'blue'}}>
          Increament
        </button>
        <button onClick={() => {
          setCount(count-1)
        }} style={{color:"red"}}>
          Decreament
        </button>
      </h1>

      <h1>
        Change user React State in action
      </h1>

      <h1>
        {user.name}
      </h1>
      <h2>
       
        <button onClick={() => {
          setUser({
            name: "SilverAnon",
            age: 24,
            nickname: "Doffy",
            email:"doffytemuser@gmail.com"
          })
        }}>Change user name </button>
      </h2>
      <h1>
        toggle theme

           <button onClick={toggleMode}>
        Switch to {mode === "Light" ? "Dark" : "Light"} Mode
      </button>
    </h1>
    </div>
  )
}

export default App
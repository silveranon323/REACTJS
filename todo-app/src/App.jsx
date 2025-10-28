import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './features/todos-page/ToDoList';
import Header from './features/pages/Header';
import Footer from './features/pages/Footer';
import TodosForm from './features/todos-page/TodosForm';

function App() {

  let [count, setCount] = useState(0);
  let [inputCount, setInputCount] = useState(0);
function handleSet(value) {
    
    const parsedCount = parseInt(value, 10);
    if (!isNaN(parsedCount)) {
      setCount(parsedCount);
      console.log("Count:", parsedCount);
    } else {
      alert("Invalid input for count:", inputCount);
    }
  }

  function handleInputChange(event) {
    setInputCount(event.target.value);
  }

  return (
      <>
      <div className='container'>
        <div className="row">
          <header className='col-12'>
        <Header/>
          </header>
          {/* <main className='row'>
            <section className='col-md-6 col-12'>
      <TodoList/>

            </section>
            <section className='col-md-6 col-12'>
              <TodosForm/>
            </section>

          </main> */}
          <div className="col-12">
            <h2>
              Count :  {count}
            </h2> 
            <button type="button" className='btn btn-primary' onClick={() => {
              setCount(count+1)
            }}>
            Increment
            </button>
               <button type="button" className='btn btn-secondary' onClick={() => {
              setCount(count-1)
            }}>
            Decrement
            </button>
               <button type="button" className='btn btn-danger' onClick={() => {
              setCount(0)
            }}>
            Reset
            </button>
            <input type="text" name="inpCount" id='inp'/>
               <button type="button" className='btn btn-dark' onClick={() => handleSet(inputCount)}>
          
            Set
            </button>
          </div>
          <footer className='col-12'>
          
            <Footer />
            </footer>
     
      </div>
     
     </div>
    
</>
  )
}

export default App

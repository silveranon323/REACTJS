import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './features/todos-page/ToDoList';

function App() {


  return (
      <>
      <div className='component'>
      <div className="row">
        <div className="col-12">
      <TodoList/>
        </div>
      </div>
     
     </div>
    
</>
  )
}

export default App

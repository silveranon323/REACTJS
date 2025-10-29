import React from 'react'

const TodosForm = () => {
  const [todos, setTodos] = React.useState([]);
  const [todoForm, setTodoForm] = React.useState({
    id: 0,
    title: "",
    completed: false,
  });

  function addTodo(e) {
    e.preventDefault();
    setTodos([...todos, todoForm]);
    console.log("Added Todo:", todoForm);
  }

  function handleIdChange(e) {
    setTodoForm({ ...todoForm, id: e.target.value });
  }

  function handleTitleChange(e) {
    setTodoForm({ ...todoForm, title: e.target.value });
  }

  function handleCompletedChange(e) {
    setTodoForm({ ...todoForm, completed: e.target.checked });
  }

  return (
    <>
      <form onSubmit={addTodo}>
        <div className="mb-3">
          <label htmlFor="todoId" className="form-label">Task ID</label>
          <input
            type="number"
            className="form-control"
            id="todoId"
            placeholder="Enter Task ID"
            value={todoForm.id}
            onChange={handleIdChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="todoTitle" className="form-label">Task Title</label>
          <input
            type="text"
            className="form-control"
            id="todoTitle"
            placeholder="Enter Task Title"
            value={todoForm.title}
            onChange={handleTitleChange}
          />
        </div>

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="completedCheck"
            checked={todoForm.completed}
            onChange={handleCompletedChange}
          />
          <label className="form-check-label" htmlFor="completedCheck">
            Completed
          </label>
        </div>

        <button type="submit" className="btn btn-primary">Add Todo</button>
      </form>

      <div className="mt-4">
        <h4>Todos:</h4>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo.id} - {todo.title} ({todo.completed ? "✅ Completed" : "❌ Not Completed"})
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default TodosForm

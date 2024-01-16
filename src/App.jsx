import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    const copyTodos = [...todos, {text: text, id: Math.ceil(Math.random() * 10000), complete: true},
    ];
    setTodos(copyTodos);
    setText("");
  };

  const handleChange = e => {
    setText(e.target.value);
  };
  const handleDelete = id => {
    const filteredTodos = todos.filter(t => t.id !== id);
    setTodos(filteredTodos);
  };
  const handleCompleted = (id) => {
    const copyTodos = [...todos];
    const findOne = copyTodos.find(t => t.id === id);
    findOne.completed = !findOne.completed;
    setTodos(copyTodos);
  };
  const handleDark = () => {
    let icon = document.getElementById("icon");
       icon.onclick = function() {
        document.body.classList.toggle("dark");
        if(document.body.classList.contains("dark")){
          icon.src = "./sun.svg"
        }
       }
  }
  return (
    <div className="main">
      <div className="container">
      <div className="header">
            <a href="">TODO</a>
            <img onClick={() => handleDark()} id="icon" src="./moon.svg" alt="" />
          </div>
        <div className="main-wrapper">
          <div className="forms">
            <form className="input-wrapper" onSubmit={handleSubmit}>
              <input placeholder="Create a new todo…" type="text" value={text} onChange={handleChange}/>
              <button></button>
            </form>
            <div>
              {todos.map(todo => (
                <div className="texts" key={todo.id}>
                  <h1 
                  onClick={() => handleCompleted(todo.id)}
                  style={{textDecoration: todo.completed ? "line-through" : "none",
                }}
                >
                  {todo.text}</h1>
                  <button onClick={() => {handleDelete(todo.id)}}><img src="./cross.svg" alt="" /></button> 

                </div>
              ))}
            </div>
            <div className="bottom">
                <p className="first-p">Items left</p>
                <div>
                  <p>All</p>
                  <p>Active</p>
                  <p>Completed</p>
                </div>
                <p className="last-p">Clear Completed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
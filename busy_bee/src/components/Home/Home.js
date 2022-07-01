import { useState, useEffect } from "react";
import './Home.scss';

export const Home = () => {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(-1);
  const [update, setUpdate] = useState('');

  const [username, setUsername] = useState(localStorage.getItem("username") || '');


  const saveData = (newTodos) => {
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  const addUsername = (name) => {
    localStorage.setItem("username", name);
    setUsername(name);
  } ;

  useEffect(() => {
    if (localStorage.getItem("todos")) {
      setTodos(JSON.parse(localStorage.getItem("todos")));
    }
  }, []);

  const addTodo = () => {
    if (!newTodo) {
      return;
    }

    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 1000 + 1),
      value: newTodo,
      }
    ];

    setTodos(newTodos);
    setNewTodo("");
    saveData(newTodos);
  };


  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(item => item.id !== id);

    setTodos(updatedTodos);
    saveData(updatedTodos);
  };

  const editTodo = (id, newValue) => {
    const currentTodo = todos.find(element => element.id === id);
    const newTodo = {
      id: currentTodo.id,
      value: newValue,
    };

    deleteTodo(id);
    setTodos(prev=> [...prev, newTodo]);
    setUpdate('');
    setEdit(-1);
    saveData(todos);
  };

  return (
    <div className="todos">
      <div className="todos_greeting">
      <h1 className="todos_name"> Hey, </h1>
        <input
          type="text"
          placeholder="Stranger"
          value={username}
          onChange={(event) => addUsername(event.target.value)}
          className="todos_name-input"
        />
      </div>

      <div className="todos_input-box">
        <input
          type="text"
          placeholder="What's on your list today?"
          value={newTodo}
          onChange={(event) => setNewTodo(event.target.value)}
          className="todos_input"
        />
        <button
          onClick={addTodo}
          className="todos_button"
        >
          Add
        </button>
      </div>

      <ul className="todos_list">
        {todos.map(todo => {
          return (
            <>
              <li
                key={todo.id}
                onClick={() => setEdit(todo.id)}
                className="todos_value"
              >
                <p className="todos_text">
                  {todo.value}
                </p>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="todos_button"
                >
                  Delete
                </button>
              </li>

              {edit === todo.id
                ? (
                  <>
                    <input
                      type="text"
                      value={update}
                      onChange={(event) => setUpdate(event.target.value)}
                      className="todos_input"
                    />
                    <button
                      onClick={() => editTodo(todo.id, update)}
                      className="todos_button"
                    >
                      Update
                    </button>
                  </>
                ) : null
              }
            </>
          );
        })}
      </ul>
    </div>
  );
};

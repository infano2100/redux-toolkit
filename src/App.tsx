import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./App.css";

import {
  addItem,
  setComplete,
  getTodos,
  ItemInterface,
} from "./redux/Reducers/todoSlice";

import { addTitle, addContent, getData } from "./redux/Reducers/storesSlice";

const App = () => {
  const todos = useSelector(getTodos);
  const dataStore = useSelector(getData);

  const dispatch = useDispatch();
  const [todoTitle, setTodoTitle] = useState<string>("");
  const [textTitle, setTextTitle] = useState<string>("");
  const [textContent, setTextContent] = useState<string>("");

  return (
    <div className="App">
      <div style={{ marginBottom: 50 }}>
        <h1>Titel: {`${dataStore.title}`}</h1>
        <input
          type="text"
          value={textTitle}
          onChange={(e) => setTextTitle(e.target.value)}
        />
        <button onClick={() => dispatch(addTitle(`${textTitle}`))}>
          Add Titel
        </button>
      </div>
      <div style={{ marginBottom: 50 }}>
        <h1>Content: {`${dataStore.content}`}</h1>
        <input
          type="text"
          value={textContent}
          onChange={(e) => setTextContent(e.target.value)}
        />
        <button onClick={() => dispatch(addContent(`${textContent}`))}>
          Add Content
        </button>
      </div>
      <>
        {todos.map((item: ItemInterface, key: number) => {
          const { title, completed } = item;
          return (
            <div key={key} className="content">
              <p>{title}</p>
              <button onClick={() => dispatch(setComplete(item))}>
                {!completed ? "Done" : "Not Done"}
              </button>
            </div>
          );
        })}
      </>
      <div>
        <input
          type="text"
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
        />
        <button
          onClick={() =>
            dispatch(
              addItem({
                title: todoTitle,
                completed: false,
              })
            )
          }
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default App;

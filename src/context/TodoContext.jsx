import React, { createContext, useState } from "react";

export const TodoContext = createContext();

const TodoProvider = (props) => {
  const [tareaNueva, setTareaNueva] = useState({ tarea: "" });
  const [listaTareas, setListaTareas] = useState([]);
  return (
    <TodoContext.Provider
      value={{ tareaNueva, listaTareas, setTareaNueva, setListaTareas }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;

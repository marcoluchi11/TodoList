import React, { createContext, useState } from "react";

export const TodoContext = createContext();

const TodoProvider = (props) => {
  const [tareaNueva, setTareaNueva] = useState({ tarea: "" });
  const [listaTareas, setListaTareas] = useState(() => {
    const listovich = localStorage.getItem("listatareas");
    return listovich ? JSON.parse(listovich) : [];
  });
  const [registrado, setRegistrado] = useState(false);
  const [error, setError] = useState(false);
  return (
    <TodoContext.Provider
      value={{
        tareaNueva,
        listaTareas,
        error,
        registrado,
        setTareaNueva,
        setListaTareas,
        setError,
        setRegistrado,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;

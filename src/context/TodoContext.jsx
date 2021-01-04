import React, { createContext, useState } from "react";

export const TodoContext = createContext();

const TodoProvider = (props) => {
  const [tareaNueva, setTareaNueva] = useState({ tarea: "" });
  const [listaTareas, setListaTareas] = useState(() => {
    const listovich = localStorage.getItem("listatareas");
    return listovich ? JSON.parse(listovich) : [];
  });

  const [user, setUser] = useState("");
  const [registrado, setRegistrado] = useState(false);
  const [error, setError] = useState(false);
  const [usuario, setUsuario] = useState(false);
  return (
    <TodoContext.Provider
      value={{
        tareaNueva,
        listaTareas,
        error,
        registrado,
        usuario,
        user,
        setTareaNueva,
        setListaTareas,
        setError,
        setRegistrado,
        setUsuario,
        setUser,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;

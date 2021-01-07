import React, { createContext, useState } from "react";

export const TodoContext = createContext();

const TodoProvider = (props) => {
  const [tareaNueva, setTareaNueva] = useState({ tarea: "" });
  const [listaTareas, setListaTareas] = useState([]);

  const [user, setUser] = useState("");
  const [registrado, setRegistrado] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
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
        loading,
        setTareaNueva,
        setListaTareas,
        setError,
        setRegistrado,
        setUsuario,
        setUser,
        setLoading,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;

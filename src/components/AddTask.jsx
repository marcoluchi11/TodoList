import React, { Fragment, useContext } from "react";
import styled from "@emotion/styled";
import Error from "./Error";
import { nanoid } from "nanoid";
import { TodoContext } from "./../context/TodoContext";
const BotonSubmit = styled.input`
  background-color: #008cba;
  font-size: 1.3rem;
  padding: 1rem;
  color: #ffffff;
  outline: none;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-left: 1rem;
  margin-bottom: 3rem;
  margin-top: 0.3rem;
  width: 100%;
`;
const Input = styled.input`
  color: #ffffff;
  background-color: transparent;
  border-radius: 24px;
  border: 0.5px solid #ffffff;
  height: 2.9rem;
  margin: 1rem;
  padding: 1rem;
  &::placeholder {
    font-size: 1.1rem;
    color: #ffffff;
  }
`;
const AddTask = () => {
  const {
    tareaNueva,
    setTareaNueva,
    listaTareas,
    setListaTareas,
    error,
    setError,
  } = useContext(TodoContext);

  const { tarea } = tareaNueva;
  const handleChange = (e) => {
    setTareaNueva({ ...tareaNueva, [e.target.name]: e.target.value });
  };
  const handleClick = (e) => {
    e.preventDefault();
    if (tarea.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    const agregarTask = [...listaTareas, { id: nanoid(), tarea: tarea }];
    localStorage.setItem("listatareas", JSON.stringify(agregarTask));
    setListaTareas(agregarTask);

    setTareaNueva({ tarea: "" });
  };
  return (
    <Fragment>
      <form>
        <Input
          className="inputTexto"
          onChange={handleChange}
          type="text"
          name="tarea"
          placeholder="Añade una tarea..."
          value={tarea}
        />
        {error ? <Error /> : null}
        <BotonSubmit
          onClick={handleClick}
          className="addTask"
          type="submit"
          value=" + Añadir Tarea"
        />
      </form>
    </Fragment>
  );
};

export default AddTask;

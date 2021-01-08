import React, { Fragment, useContext } from "react";
import styled from "@emotion/styled";
import Error from "./Error";
import fire from "./../firebaseConfig";
import { nanoid } from "nanoid";
import { TodoContext } from "./../context/TodoContext";
const BotonSubmit = styled.input`
  background-color: #14274e;
  &:hover {
    background-color: #394867;
  }
  font-size: 1.3rem;
  padding: 1rem;
  color: #ffffff;
  outline: none;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  margin-bottom: 3rem;
  margin-top: 0.3rem;
  width: 100%;
`;
const Input = styled.input`
  color: #14274e;
  background-color: transparent;
  border-radius: 24px;
  border: 0.5px solid #14274e;
  height: 2.9rem;
  margin: 0.8rem 0;
  padding: 1rem;
  &::placeholder {
    font-size: 1.1rem;
    color: #14274e;
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
    usuario,
    user,
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
    if (usuario === false) {
      setError(true);
      return;
    }
    setError(false);
    const agregarTask = [...listaTareas, { id: nanoid(), tarea: tarea }];
    localStorage.setItem("listatareas", JSON.stringify(agregarTask));
    setListaTareas(agregarTask);

    setTareaNueva({ tarea: "" });
    const record = {
      id: user,
      tarea: tareaNueva.tarea,
    };
    const db = fire.firestore();

    db.collection("tareas")
      .add(record)
      .then(() => {
        console.log("agregaste correctamente a la Database Tato");
      })
      .catch((err) => {
        console.error("Error adding document: ", err);
      });
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
        {error ? (
          <Error mensaje="Ingrese algun valor valido" usuario={usuario} />
        ) : null}
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

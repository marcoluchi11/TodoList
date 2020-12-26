import React, { useContext, Fragment } from "react";
import styled from "@emotion/styled";
import { nanoid } from "nanoid";
import { TodoContext } from "./../context/TodoContext";

const ItemTarea = styled.div`
  display: flex;
`;
const ItemTareaTexto = styled.h4`
  margin-right: 1rem;
`;
const Boton = styled.button`
  margin: 0.5rem;
  align-self: center;
  height: 1.8rem;
`;
const TaskList = () => {
  const { listaTareas, setListaTareas } = useContext(TodoContext);
  const handleClick = (id) => {
    const tasklist = listaTareas.filter((tarea) => id !== tarea.id);
    localStorage.setItem("listatareas", JSON.stringify(tasklist));
    setListaTareas(tasklist);
  };
  return (
    <Fragment>
      <h1>Lista De Tareas</h1>
      {listaTareas.map((tarea) => (
        <ItemTarea key={nanoid()}>
          <ItemTareaTexto>{tarea.tarea}</ItemTareaTexto>
          <Boton onClick={() => handleClick(tarea.id)}>
            <img
              src="https://icongr.am/fontawesome/close.svg?size=23&color=currentColor"
              alt="Delete"
            />
          </Boton>
        </ItemTarea>
      ))}
    </Fragment>
  );
};

export default TaskList;

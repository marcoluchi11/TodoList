import React, { useContext, Fragment } from "react";
import styled from "@emotion/styled";
import { TodoContext } from "./../context/TodoContext";
const TaskList = () => {
  const { listaTareas, setListaTareas } = useContext(TodoContext);
  return (
    <Fragment>
      <h1>Lista De Tareas</h1>
      {listaTareas.map((tarea) => (
        <p>{tarea}</p>
      ))}
    </Fragment>
  );
};

export default TaskList;

import React, { useContext } from "react";
import styled from "@emotion/styled";
import { TodoContext } from "./../context/TodoContext";
const BotonSubmit = styled.input`
  background-color: #008cba;
  font-size: 1.1rem;
  padding: 1rem;
  color: #ffffff;
  outline: none;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-left: 1rem;
`;
const Input = styled.input`
  background-color: transparent;
  border-radius: 24px;
  border: 0.5px solid black;
  height: 2rem;
  margin: 1rem;
  padding: 1rem;
`;
const AddTask = () => {
  const { tareaNueva, setTareaNueva, listaTareas, setListaTareas } = useContext(
    TodoContext
  );

  const { tarea } = tareaNueva;
  const handleChange = (e) => {
    setTareaNueva({ ...tareaNueva, [e.target.name]: e.target.value });
  };
  const handleClick = (e) => {
    e.preventDefault();
    setListaTareas([...listaTareas, tarea]);
    setTareaNueva({ tarea: "" });
  };
  return (
    <form>
      <Input
        onChange={handleChange}
        type="text"
        name="tarea"
        placeholder="Añade una tarea..."
        value={tarea}
      />
      <BotonSubmit
        onClick={handleClick}
        className="addTask"
        type="submit"
        value=" + Añadir Tarea"
      />
    </form>
  );
};

export default AddTask;

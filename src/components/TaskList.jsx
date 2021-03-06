import React, { useContext, Fragment } from "react";
import styled from "@emotion/styled";
import Spinner from "./Spinner";
import { nanoid } from "nanoid";
import { TodoContext } from "./../context/TodoContext";
import fire from "./../firebaseConfig";
const ItemTarea = styled.div`
  display: flex;
  background-color: #9ba4b4;
  border-radius: 10px;
  margin: 0.3rem;
`;
const ItemTareaTexto = styled.h4`
  padding: 0 1rem;
`;
const Boton = styled.button`
  margin: 0.5rem;
  align-self: center;
  height: 1.8rem;
`;
const TaskList = () => {
  const { listaTareas, setListaTareas, loading } = useContext(TodoContext);

  const handleClick = (id, task) => {
    //Filtra en la parte visual
    const tasklist = listaTareas.filter((tarea) => id !== tarea.id);
    //Elimina de la db
    const db = fire.firestore();
    db.collection("tareas")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (
            doc.data().id === fire.auth().currentUser.uid &&
            doc.data().tarea === task
          ) {
            db.collection("tareas")
              .doc(doc.id)
              .delete()
              .then(() => {
                console.log("se borro correctamente tatito");
              });
          }
        });
      });
    setListaTareas(tasklist);
  };
  return (
    <Fragment>
      <h1>Lista De Tareas</h1>
      {loading ? (
        <Spinner />
      ) : (
        listaTareas.map((tarea) => (
          <ItemTarea key={nanoid()}>
            <ItemTareaTexto>{tarea.tarea}</ItemTareaTexto>
            <Boton onClick={() => handleClick(tarea.id, tarea.tarea)}>
              <img
                src="https://icongr.am/fontawesome/close.svg?size=23&color=currentColor"
                alt="Delete"
              />
            </Boton>
          </ItemTarea>
        ))
      )}
    </Fragment>
  );
};

export default TaskList;

import React from "react";
import styled from "@emotion/styled";

const Mensaje = styled.p`
  background-color: #ff5959;
  padding: 1rem;
  margin: 0.5rem;
  border-radius: 5px;
`;
const Error = ({ mensaje, usuario }) => {
  if (usuario === false) {
    return <Mensaje>Ingrese o registrese antes de agregar tareas</Mensaje>;
  }
  return <Mensaje>{mensaje}</Mensaje>;
};

export default Error;

import React from "react";
import styled from "@emotion/styled";

const Mensaje = styled.p`
  background-color: #ff5959;
  padding: 1rem;
  margin: 0.5rem;
  border-radius: 5px;
`;
const Error = () => {
  return <Mensaje>Ingresa algun valor</Mensaje>;
};

export default Error;

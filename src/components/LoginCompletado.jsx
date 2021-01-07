import React, { Fragment } from "react";
import styled from "@emotion/styled";

const BotonSalir = styled.input`
  font-size: 0.9rem;
  margin: 1rem;
  padding: 0.5rem;
  border: none;
  border-radius: 7px;

  background-color: #14274e;
  color: #f1f6f9;
  cursor: pointer;
`;
const LoginCompletado = ({ email, handleLogout, setLogin }) => {
  return (
    <Fragment>
      <p>Bienvenide, {email}</p>
      <BotonSalir value="Salir" type="button" onClick={handleLogout} />
    </Fragment>
  );
};

export default LoginCompletado;

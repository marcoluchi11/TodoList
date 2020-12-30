import React, { Fragment } from "react";
import styled from "@emotion/styled";

const BotonSalir = styled.input`
  padding: 0 1.3rem;
  margin: 1rem;
  font-size: 0.9rem;
  cursor: pointer;
`;
const LoginCompletado = ({ email, handleLogout, setLogin }) => {
  return (
    <Fragment>
      <p>Bienvenido, {email}</p>
      <BotonSalir value="Salir" type="button" onClick={handleLogout} />
    </Fragment>
  );
};

export default LoginCompletado;

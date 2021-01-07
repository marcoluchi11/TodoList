import React, { Fragment, useContext } from "react";
import styled from "@emotion/styled";
import { TodoContext } from "../context/TodoContext";
import RegistroCompletado from "./RegistroCompletado";
const Label = styled.label`
  margin: 1rem;
`;
const Ingresar = styled.input`
  background-color: #14274e;
  color: #f1f6f9;
  margin: 1rem;
  padding: 0.5rem;
  border: none;
  border-radius: 7px;
  cursor: pointer;
`;
const ErrorMsg = styled.p`
  color: red;
  font-size: 16px;
  padding: 0.6rem;
  border-radius: 10px;
  background-color: #eaeaea2b;
`;
const RegistroMsg = styled.div`
  color: #ffffff;
  font-size: 16px;
  padding: 0.6rem;
  border-radius: 10px;
  background-color: #28cc20;
`;
const Input = styled.input`
  border-radius: 10px;
`;
const Linkovich = styled.a`
  text-decoration: underline;
  margin: 0 0.6rem;
  cursor: pointer;
  color: #14274e;
  &:hover {
    text-decoration: underline;
  }
`;
const Formulario = ({
  email,
  setEmail,
  password,
  setPassword,
  handleLogin,
  handleSignUp,
  tieneCuenta,
  setTieneCuenta,
  passwordError,
  emailError,
}) => {
  const { registrado, setRegistrado } = useContext(TodoContext);
  return (
    <Fragment>
      <form>
        <Label>Email</Label>
        <Input
          type="text"
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <Label>Contraseña</Label>
        <Input
          required
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {tieneCuenta ? (
          <Ingresar type="submit" onClick={handleLogin} value="Ingresá" />
        ) : (
          <Ingresar type="submit" onClick={handleSignUp} value="Registrate" />
        )}
      </form>

      {tieneCuenta ? (
        <p>
          ¿No tenés una cuenta?,
          <Linkovich onClick={() => setTieneCuenta(!tieneCuenta)} href="#!">
            Registrate
          </Linkovich>
        </p>
      ) : (
        <p>
          ¿Ya tenés cuenta?,
          <Linkovich onClick={() => setTieneCuenta(!tieneCuenta)} href="#!">
            Ingresá{" "}
          </Linkovich>
        </p>
      )}
      {passwordError ? <ErrorMsg>{passwordError}</ErrorMsg> : null}
      {emailError ? <ErrorMsg>{emailError}</ErrorMsg> : null}
      {registrado ? (
        <RegistroMsg>
          <RegistroCompletado
            setTieneCuenta={setTieneCuenta}
            setRegistrado={setRegistrado}
          />
        </RegistroMsg>
      ) : null}
    </Fragment>
  );
};

export default Formulario;

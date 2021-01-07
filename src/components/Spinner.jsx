import React from "react";
import "./Spinner.css";
import styled from "@emotion/styled";
const Container = styled.div`
  display: flex;
  padding: 0.5rem;
  p {
    margin-right: 0.5rem;
  }
`;
const Spinner = () => {
  return (
    <Container>
      <p> Cargando Tareas...</p>
      <div class="sk-chase">
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
      </div>
    </Container>
  );
};

export default Spinner;

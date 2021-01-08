import React from "react";

const RegistroCompletado = ({ setTieneCuenta, setRegistrado }) => {
  return (
    <p>
      Felicitaciones, te has registado con exito,{" "}
      <a
        className="registro"
        href="#!"
        onClick={() => {
          setTieneCuenta(true);
          setRegistrado(false);
        }}
      >
        Ingresa Aqui
      </a>
    </p>
  );
};

export default RegistroCompletado;

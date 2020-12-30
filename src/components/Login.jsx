import React, { Fragment, useState, useEffect } from "react";
import LoginCompletado from "./LoginCompletado";
import fire from "./../firebaseConfig";
import Formulario from "./Formulario";
const Login = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [tieneCuenta, setTieneCuenta] = useState(false);
  const [login, setLogin] = useState(false);

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };
  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };
  const handleLogin = (e) => {
    e.preventDefault();
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("te logueaste con exito mostro");
        setLogin(true);
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;

          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
          default:
            console.log("tuvieja");
        }
      });
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;

          case "auth/weak-password":
            setPasswordError("error pass");
            break;
          default:
            console.log("tuvieja");
        }
      });
  };

  const handleLogout = () => {
    setLogin(false);
    fire.auth().signOut();
    console.log("te deslogueaste tato");
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };
  useEffect(() => {
    //authListener();
  }, []);
  return (
    <Fragment>
      {login ? (
        <LoginCompletado
          email={email}
          handleLogout={handleLogout}
          setLogin={setLogin}
        />
      ) : (
        <Formulario
          email={email}
          password={password}
          setPassword={setPassword}
          setEmail={setEmail}
          setTieneCuenta={setTieneCuenta}
          tieneCuenta={tieneCuenta}
          passwordError={passwordError}
          emailError={emailError}
          handleLogin={handleLogin}
          handleSignUp={handleSignUp}
        />
      )}
    </Fragment>
  );
};

export default Login;

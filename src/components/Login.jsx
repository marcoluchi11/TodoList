import React, { Fragment, useState, useContext } from "react";
import LoginCompletado from "./LoginCompletado";
import fire from "./../firebaseConfig";
import { TodoContext } from "./../context/TodoContext";
import Formulario from "./Formulario";
const Login = () => {
  const {
    setRegistrado,
    setUsuario,
    listaTareas,
    setListaTareas,

    setUser,
  } = useContext(TodoContext);

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
  // const saveTask = (user) => {
  //   const record = {
  //     user: user.uid,
  //     task: "Tu vieja",
  //   };
  //   const db = fire.firestore();

  //   //AGREGA RECORD A LA DATABASE
  //   db.collection("tareas")
  //     .add(record)
  //     .then(() => {
  //       console.log("agregaste correctamente a la Database Tato");
  //     })
  //     .catch(function (error) {
  //       console.error("Error adding document: ", error);
  //     });
  // };
  const handleLogin = (e) => {
    e.preventDefault();
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setLogin(true);
        setUsuario(true);
        setUser(fire.auth().currentUser.uid);
        const db = fire.firestore();
        db.collection("tareas")
          .get()
          .then(function (querySnapshot) {
            let getTareas = [];
            querySnapshot.forEach(function (doc) {
              // doc.data() is never undefined for query doc snapshots

              if (doc.data().id === fire.auth().currentUser.uid) {
                const task = doc.data().tarea;

                getTareas.push({ tarea: task });
              }
            });
            console.log(getTareas);
            setListaTareas(getTareas);
          });
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
      .then(() => {
        clearInputs();
        setRegistrado(true);
      })
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
            console.log("Registrado con Exito");
        }
      });
  };

  const handleLogout = () => {
    setLogin(false);
    fire.auth().signOut();
    console.log("te deslogueaste tato");
    setUsuario(false);
  };

  // const authListener = () => {
  //   fire.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       clearInputs();
  //       setUser(user);
  //     } else {
  //       setUser("");
  //     }
  //   });
  // };
  // useEffect(() => {
  //   //   authListener();
  // }, []);
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

// EL USUARIO INGRESA

// SE BUSCAN TAREAS DE SU UID EN DATABASE

// SE MUESTRAN EN PANTALLA

// SE ELIMINAN O SE AGREGAN Y ESO IMPACTA EN DATABASE

// CUANDO SE DESLOGUEA SE BORRA TODO

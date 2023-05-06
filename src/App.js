import { useState } from "react";
import "./App.css";
import MyAlert from "./components/MyAlert";
import MyLogin from "./components/MyLogin";

function App({ onSubmit }) {
  const [tipoDeAlerta, setTipoDeAlerta] = useState("");
  const [mensajeDeAlerta, setMensajeDeAlerta] = useState("");
 

  const validar = (user) => {
    const validEmail = "naldi.castro@gmail.com";
    const validPassword = "123456";


    if (user.email === validEmail && user.password === validPassword) {
      setMensajeDeAlerta("Contraseña Correcta, ya puede ingresar");
      setTipoDeAlerta("success");
    } else {
      setMensajeDeAlerta("Contraseña Incorrecta, intente de nuevo");
      setTipoDeAlerta("danger");
    }
  };

  return (
    <div
      className="App d-flex d-flex align-items-center flex-column 
    "
      style={{ width: "100%" }}
    >
      <MyLogin onSubmit={validar} />
      <MyAlert tipo={tipoDeAlerta} mensaje={mensajeDeAlerta}/>
    </div>
  );
}

export default App;

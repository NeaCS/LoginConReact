import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

const MyLogin = ({onSubmit}) => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log('email', email);
  const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit({ email, password });
  }


  return (
    <div className="mt-5">
      <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label> <h5>Correo electrónico</h5> </Form.Label>
      <Form.Control type="email" placeholder="Ingrese su email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <Form.Text>
        Nunca compartiremos tu información con nadie
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label><h5>Contraseña</h5> </Form.Label>
      <Form.Control type="password" placeholder="Ingrese su contraseña" value={password} onChange={(e) => setPassword(e.target.value)}/>
    </Form.Group>
    <Button variant="primary" type="submit" disabled={!email.trim() || !password.trim()}>
      Envíar
    </Button>
  </Form></div>
  )
}

export default MyLogin
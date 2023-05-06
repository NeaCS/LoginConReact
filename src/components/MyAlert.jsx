import React from 'react'
import { Alert } from 'react-bootstrap'

const MyAlert = (props) => {
  const {tipo, mensaje} = props

  return (
<Alert variant={tipo} className="mt-5">
   {mensaje}
  </Alert>
  )
}

export default MyAlert
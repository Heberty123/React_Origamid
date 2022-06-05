import React from 'react'

const Button = ({ setModal }) => {
    

    return (
    <>
      <button onClick={() => setModal((Ativo) => !Ativo)}>Button</button>  
    </>
  )
}

export default Button
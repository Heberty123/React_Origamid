import React from 'react'

const Modal = ({ modal, setModal }) => {

    const [contar, setContar] = React.useState(1);
    const [item, setItem] = React.useState('item 1');

  return (
    <>
        <h1>{modal ? 'Conteúdo foi aberto !' : 'Conteudo foi fechado !'}</h1>
    </>
  )
}

export default Modal
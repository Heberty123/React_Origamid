import React from 'react';
import Button from "./Button";
import Modal from "./Modal";

function App() {

  const [modal, setModal] = React.useState(false);

  return (
    <>
      <h1>Teste</h1>
      <Button setModal={setModal} />
      <Modal modal={modal} setModal={setModal} />
    </>
  );
}

export default App;

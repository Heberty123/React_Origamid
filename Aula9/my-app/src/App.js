import React from "react";
import Produto from "./Produto";

function App() {

    const [dados, setDados] = React.useState(null);


    async function handleClick(event) {
        const response = await fetch(
            `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,

        );
        const json = await response.json();
        setDados(json);   
    }



    React.useEffect(() => {
        
        handleClick(localStorage.getItem("produto"));

    }, []);




    React.useEffect(() => {
        
        localStorage.setItem("produto", dados.nome);

    }, [dados]);




    
  return (
    <div>
        <button onClick={handleClick}>notebook</button>
        <button onClick={handleClick}>smartphone</button>
        { dados && <Produto dados={dados}/>}
    </div>
  );
}

export default App;

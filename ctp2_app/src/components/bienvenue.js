import { useState } from "react";
function Bienvenue(props){
    const [clic, clicNumber] = useState(0);
    return (
    <div>
        <h1>Bonjour, {props.name}</h1>
        <div>
            <p>
                Vous êtes : {props.text} <br/>
                Connexion à : {props.date}
            </p>
        </div>
        <button onClick={()=>clicNumber(clic+1)}>
            clic !
        </button>
        <p>
            Nombre de clic:{clic}
        </p>
    </div> 
    
    );
}
export default Bienvenue;
import { useState, useEffect } from 'react';

function Bienvenue(props) {
    const [clic, clicNumber] = useState(0);
    useEffect(() => {
        alert(`Vous avez cliqué ${clic} fois`);
    })
    return (<div><h1>Bonjour, {props.name}</h1>
        <div>
            <p>
                Vous êtes : {props.text} <br />
                Connexion à : {props.date}
            </p>
        </div>
        <button onClick={() => clicNumber(clic + 1)}>
            clic !
        </button>
    </div>);
}
export default Bienvenue;
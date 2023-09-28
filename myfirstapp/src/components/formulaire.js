import React, { useState } from 'react';

function Formulaire() {
    const [categorie, setCategorie] = useState('Etudiant');
    const [name, setName] = useState('');

    const bienvenue = () => {
        alert('❤️Bienvenue à ESGI Party !❤️');
    }

    const monnomsaffiche = (event) => {
        event.preventDefault();
        alert(`❤️Bienvenue à ESGI Party ${name} !❤️ 
        Vous êtes : ${categorie}`);
    }

    const handleChange = (event) => {
        setCategorie(event.target.value);
    }

    return (
        <div>
            <form className='formulaire' onSubmit={monnomsaffiche}>
                <label>
                    Choisissez votre catégorie :
                    <select value={categorie} onChange={handleChange}>
                        <option value="Etudiant">Etudiant</option>
                        <option value="Enseignant permanent">Enseignant permanent</option>
                        <option value="Enseignant contractuel">Enseignant contractuel</option>
                        <option value="Intervenant externe">Intervenant externe</option>
                    </select>
                </label>
                <div className='nameGuest'>
                    <input
                        type='text'
                        name='nom'
                        placeholder='Votre nom'
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='signIn'>
                    <label>
                        S'enregistrer :
                    </label>
                    <input type='submit' value='Allons-y' onClick={bienvenue} />
                </div>
            </form>
        </div>
    );
}

export default Formulaire;

import React, { useState } from 'react';

function Formulaire() {
    const [categorie, setCategorie] = useState('Etudiant');
    const [name, setName] = useState('');

    const bienvenue = () => {
        alert('❤️Bienvenue à ESGI Party !❤️');
    }

    const monnomsaffiche = (event) => {
        event.preventDefault();
        const message = renderCategorySpecificComponent();
        alert(message);
    }

    const handleChange = (event) => {
        setCategorie(event.target.value);
    }

    const renderCategorySpecificComponent = () => {
        switch (categorie) {
            case 'Etudiant':
                return `Bienvenue ${name} !`;
            case 'Enseignant permanent':
                return `Votre compte : ${name} !`;
            case 'Enseignant contractuel':
                return `Bonjour ${name} !`;
            case 'Intervenant externe':
                return `Casse toi ${name} !`;
            default:
                return `❤️Bienvenue à ESGI Party ${name} !❤️ Vous êtes : ${categorie}`;
        }
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
